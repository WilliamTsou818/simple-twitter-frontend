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
        <ChatList active />
      </div>
      <div class="chat__room">
        <Head title="Apple" account="apple" />
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
