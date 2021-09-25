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
        <ChatRoom :chats="chats" />
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
  created() {
    this.fetchAllRooms()
  },
  data() {
    return {
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
  methods: {
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
    handleNewChatSend(content) {
      console.log('handleNewChatSend', content)
      this.$socket.emit('publicMessage', {
        userId: this.$store.getters.getCurrentUser.id,
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
