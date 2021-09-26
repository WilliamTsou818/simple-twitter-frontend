<template>
  <div class="container container--chat">
    <div
      v-show="isListOpen"
      class="chat__modal lg-d-none"
      @click="handleToggleList"
    >
      <div class="chat__modal__container">
        <ChatList
          v-for="data in privateRooms"
          :key="data.RoomId"
          :user="data.User"
          :room="data"
        />
      </div>
    </div>
    <div class="chat">
      <div class="chat__lists md-d-none">
        <Head title="訊息" message />
        <ChatList
          v-for="data in privateRooms"
          :key="data.RoomId"
          :user="data.User"
          :room="data"
        />
      </div>
      <div class="chat__room">
        <Head
          :title="currentRoomData.User ? currentRoomData.User.name : ''"
          :account="currentRoomData.User ? currentRoomData.User.account : ''"
        />
        <div class="chat__room__icon lg-d-none" @click="handleToggleList">
          <IconList />
        </div>
        <ChatRoom :chats="privateAllMessages" @new-chat="handleNewChatSend" />
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toastification } from './../../utils/mixins'
import { mapState } from 'vuex'

import Head from '@/components/Head'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'

import IconList from '@/components/icons/IconList'

export default {
  name: 'PrivateRoom',
  mixins: [Toastification],
  components: {
    Head,
    ChatList,
    ChatRoom,
    IconList,
  },
  data() {
    return {
      isLoading: true,
      isJoin: false,
      currentRoomData: {},
      isListOpen: true,
    }
  },
  computed: {
    ...mapState(['currentUser', 'privateRooms', 'privateAllMessages']),
  },
  created() {
    if (this.$socket.connected) {
      const { room_id } = this.$route.params
      this.openPrivateRoom(Number(room_id))
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 這邊要離開房間?在join?
    if (this.isJoin) {
      this.$socket.emit('leavePrivateRoom')
      this.handleToggleList()
    }
    const { room_id } = to.params
    this.openPrivateRoom(Number(room_id))
    next()
  },
  beforeDestroy() {
    if (this.isJoin) {
      this.$socket.emit('leavePrivateRoom')
    }
  },
  sockets: {
    connect() {
      // 斷線重連，重新加入房間
      const { room_id } = this.$route.params
      this.openPrivateRoom(Number(room_id))
    },
    error(error) {
      console.log('privateRoon socket error', error)
      let title = ''
      switch (error.errType) {
        default:
          title = 'PrivateRoom Error!'
          break
      }
      this.ToastError({
        title,
        description: error.message,
      })
    },
    // 新私聊房間出現
    newPrivateRoom() {
      this.fetchAllRooms()
    },
    unReadMessage() {
      this.fetchAllRooms()
    },
  },
  methods: {
    async openPrivateRoom(room_id) {
      await this.fetchAllRooms()
      this.joinPrivateRoom(room_id)
    },
    async fetchAllRooms() {
      try {
        this.isLoading = true
        const { data } = await usersAPI.messages.getPrivateRoom()
        console.log('fetchAllRooms', data)
        this.$store.dispatch('setPrivateRooms', data)
        this.isLoading = false
      } catch (err) {
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }

        this.ToastError({
          title: '獲取訊息失敗！',
          description: message,
        })
      }
    },
    joinPrivateRoom(room_id) {
      console.log('joinPrivateRoom', room_id)
      const roomData = room_id
        ? this.privateRooms.find((room) => room.RoomId === room_id)
        : null

      console.log('roomData 1', roomData)
      if (!roomData && this.privateRooms.length > 0) {
        // 重新導向第一個私訊
        console.log('重新導向第一個私訊 RoomId', this.privateRooms[0].RoomId)
        this.$router.push({
          name: 'PrivateRoom',
          params: { room_id: this.privateRooms[0].RoomId },
        })
        return
      }
      console.log('roomData', roomData)
      if (roomData) {
        console.log('------------joinPrivateRoom')
        this.currentRoomData = { ...roomData }
        this.$socket.emit(
          'joinPrivateRoom',
          { targetUserId: roomData.UserId, currentUserId: this.currentUser.id },
          (response) => {
            // 回傳room_id
            // console.log('response', response)
          }
        )
        this.isJoin = true
        this.fetchAllMessages(room_id)
      } else {
        console.log('目前沒有私訊房間')
      }
    },
    async fetchAllMessages(RoomId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.messages.getPrivateAll({ RoomId })
        console.log('fetchAllMessages', data)
        this.$store.dispatch('setPrivateAllMessages', data)
        this.isLoading = false
      } catch (err) {
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }

        this.ToastError({
          title: '獲取私訊失敗！',
          description: message,
        })
      }
    },
    handleNewChatSend(content) {
      this.$socket.emit('privateMessage', {
        currentUserId: this.currentUser.id,
        RoomId: this.currentRoomData.RoomId,
        targetUserId: this.currentRoomData.UserId,
        content,
      })
    },
    handleToggleList() {
      this.isListOpen = !this.isListOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  &__lists {
    width: 390px;
    height: 100vh;
    overflow-y: scroll;
    border-right: 1px solid var(--blue-gray-600);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__room {
    flex: 1;
    &__icon {
      position: absolute;
      top: 16px;
      right: 20px;
      z-index: 10;
      cursor: pointer;
    }
  }
  &__modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: calc(100vh - 50px);
    bottom: 50px;
    background-color: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &__container {
      width: 85%;
      height: 70vh;
      padding: 20px 0;
      overflow-y: scroll;
      background-color: var(--white);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      color: var(--text);
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .md-d-none {
    display: none;
  }
  .chat {
    &__lists {
      width: 100%;
    }
  }
}
@media screen and (min-width: 959px) {
  .lg-d-none {
    display: none;
  }
}
</style>
