<template>
  <div class="chatBubble" :class="{ 'chatBubble-self': isSelf }">
    <div class="chatBubble__avatar"></div>
    <div class="">
      <div class="chatBubble__bubble">hello word</div>
      <div class="chatBubble__time">剛剛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatlist',
  // mixins: [fromNowFilter],
  props: {
    isSelf: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    chat: {
      type: String,
    },
    time: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.chatBubble {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  padding: 10px 15px;
  &-self {
    justify-content: right;
    .chatBubble__avatar {
      display: none;
    }
    .chatBubble__time {
      text-align: right;
    }
    .chatBubble__bubble {
      color: var(--white);
      background-color: var(--theme);
      border-radius: 25px 25px 0 25px;
    }
  }
  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--blue-gray-600);
    margin-bottom: 20px;
    margin-right: 10px;
  }
  &__bubble {
    padding: 10px 15px;
    border-radius: 25px 25px 25px 0px;
    color: var(--text);
    background-color: var(--blue-gray-600);
  }
  &__time {
    text-align: left;
    @include font-setting(13px, 400, var(--gray-500));
  }
}
</style>
