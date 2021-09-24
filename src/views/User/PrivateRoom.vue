<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__list">
        <Head title="訊息" message />
      </div>
      <div class="chat__room">
        <Head title="Apple" account="apple" />
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head'
export default {
  name: 'PrivateRoom',
  components: {
    Head,
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
