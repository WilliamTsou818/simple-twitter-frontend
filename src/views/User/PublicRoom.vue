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
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head'
import ChatList from '@/components/ChatList'
export default {
  name: 'PrivateRoom',
  components: {
    Head,
    ChatList,
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
