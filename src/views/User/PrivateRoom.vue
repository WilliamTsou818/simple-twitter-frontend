<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__list">
        <Head title="訊息" message />
        <ChatList
          name="apple"
          account="apple"
          chat="Nulla Lorem mollit cupidatat irure"
          time="2021-09-24T06:31:16.000Z"
        />
        <ChatList
          name="apple"
          account="apple"
          chat="Nulla Lorem mollit cupidatat irurew w dwe w wwwwww"
          time="2021-09-12T06:31:16.000Z"
          active
        />
        <ChatList
          name="apple"
          account="apple"
          chat="Nulla Lorem mollit cupidatat irure"
          time="2021-09-24T06:31:16.000Z"
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
  &__list {
    width: 390px;
    height: 100vh;
    border-right: 1px solid var(--blue-gray-600);
  }
  &__room {
    flex: 1;
  }
}
</style>
