<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__lists">
        <Head title="訊息" message />
        <ChatList
          v-for="data in dummyRooms"
          :key="data.id"
          :user="data.User"
          :room="data.Room"
          :time="data.updatedAt"
        />
      </div>
      <div class="chat__room">
        <Head title="Apple" account="apple" />
        <ChatRoom :chats="chats" @new-chat="handleNewChatSend" />
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
      chats: [
        {
          isPill: false,
          id: '45678',
          isSelf: false,
          content: 'Hello 你最近好嗎？',
          createdAt: '2021-09-11T08:51:50.000Z',
          avatar: 'https://i.imgur.com/DIGOWdG.jpeg',
        },
        {
          isPill: false,
          id: '4532g',
          isSelf: true,
          content: '最近天氣變化大～',
          createdAt: '2021-09-24T08:51:50.000Z',
        },
        {
          isPill: false,
          id: '4532U',
          isSelf: false,
          content: '記得多穿一點囉！',
          createdAt: '2021-09-24T18:51:50.000Z',
          avatar: 'https://i.imgur.com/DIGOWdG.jpeg',
        },
        {
          isPill: false,
          id: '453ww2g',
          isSelf: true,
          content: '好喔～',
          createdAt: '2021-09-24T18:51:50.000Z',
        },
        {
          isPill: false,
          id: '422532U',
          isSelf: false,
          content: '我先去洗澡喔',
          createdAt: '2021-09-24T18:51:50.000Z',
          avatar: 'https://i.imgur.com/DIGOWdG.jpeg',
        },
      ],
      //TODO: 不確定roomID和roomName的內容，該使用誰當path
      //TODO: apiary的account有@ 待確認
      dummyRooms: [
        {
          id: 15,
          UserId: 25,
          RoomId: 15,
          createdAt: '2021-09-11T08:51:50.000Z',
          updatedAt: '2021-09-11T08:51:50.000Z',
          Room: {
            id: 15,
            name: '25-15',
            chat: '這樣也是符合挑戰規格',
          },
          User: {
            id: 25,
            avatar:
              'https://loremflickr.com/320/240/boy/?lock=30.806766147458163',
            name: 'User2',
            account: '@user2',
          },
        },
        {
          id: 35,
          UserId: 35,
          RoomId: 25,
          createdAt: '2021-09-11T08:51:50.000Z',
          updatedAt: '2021-09-11T08:51:50.000Z',
          Room: {
            id: 25,
            name: '15-35',
            chat: '嗯嗯 你先去吃飯吧',
          },
          User: {
            id: 35,
            avatar:
              'https://loremflickr.com/320/240/girl/?lock=43.956002864159',
            name: 'User3',
            account: '@user3',
          },
        },
      ],
    }
  },
  computed: {
    ...mapState(['currentUser', 'privateRooms', 'privateAllMessages']),
  },
  created() {
    const { room_id } = this.$route.params
    console.log('room_id', room_id)
    this.openPrivateRoom(room_id)
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
    this.openPrivateRoom(room_id)
    next()
  },
  beforeDestroy() {
    if (this.isJoin) {
      console.log('beforeDestroy------------leavePrivateRoom')
      this.$socket.emit('leavePrivateRoom')
    }
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
        this.$store.dispatch('setPrivateRooms', data)
        console.log(data)
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
