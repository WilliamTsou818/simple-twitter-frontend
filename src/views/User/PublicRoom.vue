<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__list">
        <Head title="上線使用者(5)" />
        <ChatList name="apple" account="apple" />
        <ChatList name="apple" account="apple" />
        <ChatList name="apple" account="apple" />
      </div>
      <div class="chat__room">
        <Head title="公開聊天室" />
        <ChatRoom :chats="chats" @new-chat="handleNewChatSend" />
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
export default {
  name: 'PublicRoom',
  components: {
    Head,
    ChatList,
    ChatRoom,
  },
  data() {
    return {
      chats: [
        {
          isPill: true,
          id: '2397823',
          content: 'Esther Howard 上線',
        },
        {
          isPill: false,
          id: '45678',
          isSelf: false,
          content: '大家完成專案了嗎？',
          createdAt: '2021-09-11T08:51:50.000Z',
          avatar: 'https://i.imgur.com/DIGOWdG.jpeg',
        },
        {
          isPill: false,
          id: '4532g',
          isSelf: true,
          content: '快了吧....',
          createdAt: '2021-09-24T08:51:50.000Z',
        },
        {
          isPill: false,
          id: '4532U',
          isSelf: false,
          content: '記得參加工作坊喔',
          createdAt: '2021-09-24T18:51:50.000Z',
          avatar: 'https://i.imgur.com/DIGOWdG.jpeg',
        },
        {
          isPill: false,
          id: '45t32g',
          isSelf: true,
          content: '好喔～',
          createdAt: '2021-09-24T18:51:50.000Z',
        },
        {
          isPill: false,
          id: '422532U',
          isSelf: false,
          content: '我先離開囉',
          createdAt: '2021-09-24T18:51:50.000Z',
          avatar: 'https://i.imgur.com/HNBx3FH.jpeg',
        },
        {
          isPill: true,
          id: '232234',
          content: 'Ralph Edwards 離線',
        },
      ],
    }
  },
  created() {
    console.log('created------------joinPublicRoom')
    this.$socket.emit('joinPublicRoom')
  },
  beforeDestroy() {
    console.log('beforeDestroy------------leavePublicRoom')
    this.$socket.emit('leavePublicRoom')
  },
  sockets: {
    connect() {
      console.log('publicRoon socket connected', this.$socket.connected)
      // 斷線重連，重新加入房間
      this.$socket.emit('joinPublicRoom')
    },
  },
  methods: {
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
