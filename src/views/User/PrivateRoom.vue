<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__lists">
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

export default {
  name: 'PrivateRoom',
  mixins: [Toastification],
  components: {
    Head,
    ChatList,
    ChatRoom,
  },
  data() {
    return {
      isLoading: true,
      isJoin: false,
      currentRoomData: {},
    }
  },
  computed: {
    ...mapState(['currentUser', 'privateRooms', 'privateAllMessages']),
  },
  created() {
    console.log('created socket connected', this.$socket.connected)
    if (this.$socket.connected) {
      const { room_id } = this.$route.params
      console.log('created room_id', room_id)
      this.openPrivateRoom(Number(room_id))
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate to', to)
    // 這邊要離開房間?在join?
    if (this.isJoin) {
      console.log('beforeRouteUpdate------------leavePrivateRoom')
      this.$socket.emit('leavePrivateRoom')
    }
    const { room_id } = to.params
    console.log('beforeRouteUpdate room_id', room_id)
    this.openPrivateRoom(Number(room_id))
    next()
  },
  beforeDestroy() {
    if (this.isJoin) {
      console.log('beforeDestroy------------leavePrivateRoom')
      this.$socket.emit('leavePrivateRoom')
    }
  },
  sockets: {
    connect() {
      console.log('privateRoom socket connected', this.$socket.connected)
      // 斷線重連，重新加入房間
      const { room_id } = this.$route.params
      console.log('privateRoom socket room_id', room_id)
      this.openPrivateRoom(Number(room_id))
    },
    error(error) {
      console.log('privateRoom socket error', error)
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
            console.log('response', response)
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
      console.log('handleNewChatSend', content)
      this.$socket.emit('privateMessage', {
        currentUserId: this.currentUser.id,
        RoomId: this.currentRoomData.RoomId,
        targetUserId: this.currentRoomData.UserId,
        content,
      })
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
  }
}
</style>
