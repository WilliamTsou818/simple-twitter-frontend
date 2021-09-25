<template>
  <div :class="['chat-list', { 'chat-list-active': active }]">
    <div class="chat-list__avatar"></div>
    <div class="chat-list__info">
      <div class="chat-list__info__detail">
        <div class="chat-list__info__user">
          <span class="chat-list__info__name">{{ name }} </span>
          <span class="chat-list__info__account">@{{ account }}</span>
        </div>
        <div v-show="time" class="chat-list__info__time">
          {{ time | fromNowFilter }}
        </div>
      </div>
      <div v-show="chat" class="chat-list__info__chat">
        {{ chat }}
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'
export default {
  name: 'Chatlist',
  mixins: [fromNowFilter],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    name: {
      type: String,
      default: 'loading',
    },
    account: {
      type: String,
      default: 'loading',
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
.chat-list {
  display: flex;
  align-items: center;
  height: 76px;
  width: 100%;
  padding: 0 15px;
  border-bottom: 1px solid var(--blue-gray-600);
  cursor: pointer;
  &-active {
    border-right: 2px solid var(--theme);
  }
  &:hover {
    background-color: var(--blue-gray-500);
  }
  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--blue-gray-600);
  }
  &__info {
    padding-left: 10px;
    flex: 1;
    &__detail {
      display: flex;
      justify-content: space-between;
    }
    &__name {
      color: var(--text);
      font-weight: 700;
      font-size: 15px;
    }
    &__account {
      color: var(--gray-500);
      font-weight: 500;
      font-size: 15px;
    }
    &__time {
      text-align: right;
      color: var(--gray-500);
      font-weight: 500;
      font-size: 15px;
    }
    &__chat {
      text-align: left;
      overflow: hidden;
      font-size: 15px;
      font-weight: 500;
      color: var(--gray-500);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
