<template>
  <div>
    <div v-show="chat.isPill" class="pill-status">
      <span class="pill-status__text">{{ chat.content }}</span>
    </div>
    <div
      v-show="!chat.isPill"
      :class="['chatBubble', { 'chatBubble-self': isCurrentUser }]"
    >
      <div
        v-if="chat.User"
        class="chatBubble__avatar"
        :style="{ backgroundImage: 'url(' + chat.User.avatar + ')' }"
      ></div>
      <div>
        <div class="chatBubble__bubble">{{ chat.content }}</div>
        <div class="chatBubble__time">{{ chat.createdAt | fromNowFilter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fromNowFilter } from '../utils/mixins'
export default {
  name: 'Chatlist',
  mixins: [fromNowFilter],
  props: {
    chat: {
      type: Object,
    },
  },
  computed: {
    ...mapState(['currentUser']),
    isCurrentUser() {
      return this.currentUser.id === this.chat.UserId
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.pill-status {
  margin: 8px 0;
  &__text {
    padding: 7px 14px;
    background-color: var(--gray-300);
    border-radius: 20px;
    @include font-setting(15px, 500, var(--gray-500));
  }
}
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
      text-align: right;
    }
  }
  &__avatar {
    min-width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--blue-gray-600);
    margin-bottom: 20px;
    margin-right: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__bubble {
    padding: 10px 15px;
    border-radius: 25px 25px 25px 0px;
    color: var(--text);
    background-color: var(--blue-gray-600);
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
  }
  &__time {
    text-align: left;
    @include font-setting(13px, 400, var(--gray-500));
  }
}
</style>
