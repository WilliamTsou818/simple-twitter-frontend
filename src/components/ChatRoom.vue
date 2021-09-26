<template>
  <div class="chat-room">
    <div ref="chat" class="chat-room__chat">
      <transition-group name="fade">
        <ChatBubble v-for="(chat, index) in chats" :key="index" :chat="chat" />
      </transition-group>
    </div>
    <div class="chat-room__newChat">
      <input
        class="chat-room__newChat__input"
        v-model="content"
        type="text"
        placeholder="輸入訊息..."
        @keyup.enter="handleNewChatClick"
      />
      <button
        class="chat-room__newChat__submit"
        @click.stop.prevent="handleNewChatClick"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1301 11.358L3.61406 2.10798C3.32406 1.95598 2.97406 2.00598 2.74106 2.23398C2.51106 2.45998 2.44806 2.81098 2.59106 3.10198L6.95306 12.022L2.59106 20.942C2.44806 21.234 2.51106 21.585 2.74106 21.81C2.88606 21.95 3.07406 22.022 3.26406 22.022C3.38406 22.022 3.50406 21.994 3.61406 21.935L21.1311 12.685C21.3761 12.555 21.5311 12.299 21.5311 12.021C21.5311 11.743 21.3761 11.489 21.1311 11.359L21.1301 11.358ZM4.94806 4.50998L17.7521 11.272H8.25506L4.94806 4.51198V4.50998ZM8.25506 12.77H17.7531L4.94806 19.535L8.25506 12.772V12.77Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import ChatBubble from '@/components/ChatBubble'
export default {
  name: 'ChatRoom',
  components: {
    ChatBubble,
  },
  props: {
    chats: {
      type: Array,
    },
  },
  data() {
    return {
      content: '',
    }
  },
  mounted() {
    this.scrollToEnd()
  },
  updated() {
    this.scrollToEnd()
  },
  methods: {
    handleNewChatClick() {
      this.$emit('new-chat', this.content)
      this.content = ''
    },
    scrollToEnd() {
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.chat-room {
  height: calc(100vh - 56px);
  box-sizing: border-box;
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
  &__chat {
    flex: 1;
    padding-top: 16px;
    height: calc(100vh - 112px);
    overflow-y: scroll;
    padding-bottom: 55px;
  }
  &__newChat {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--white);
    height: 55px;
    padding: 0 15px;
    border-top: 1px solid var(--blue-gray-600);
    &__input {
      flex: 1;
      padding: 0 12px;
      background-color: var(--input-bg);
      height: 32px;
      border: none;
      border-radius: 16px;
      margin-right: 10px;
      @include font-setting(15px, 500, var(--black));
      &::placeholder {
        color: var(--input-placeholder);
      }
    }
    &__submit {
      display: flex;
      align-items: center;
      > svg {
        fill: var(--blue-gray-900);
      }
      &:hover {
        > svg {
          fill: var(--theme);
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .chat-room {
    &__chat {
      height: calc(100vh - 168px);
      padding-top: 56px;
    }
  }
}
@media screen and (max-width: 960px) {
  .chat-room {
    &__chat {
      padding-top: 50px;
    }
  }
}
</style>
