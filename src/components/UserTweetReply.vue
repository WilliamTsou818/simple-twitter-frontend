<template>
  <div class="reply">
    <div class="reply__detail">
      <button
        class="reply__detail__avatar"
        v-bind:style="{ backgroundImage: 'url(' + reply.User.avatar + ')' }"
        @click.stop.prevent="handleClickUser(reply.User.id)"
      ></button>
      <div class="reply__detail__right">
        <div class="reply__detail__user">
          <span
            @click.stop.prevent="handleClickUser(reply.User.id)"
            class="reply__detail__name"
            >{{ reply.User.name }}</span
          >
          <span
            @click.stop.prevent="handleClickUser(reply.User.id)"
            class="reply__detail__account"
            >{{ reply.User.account | altFilter }}</span
          >
          <span class="reply__detail__date"
            >・{{ reply.createdAt | fromNowFilter }}</span
          >
        </div>
        <div
          @click.stop.prevent="handleClickUser(replyToUserId)"
          class="reply__detail__reply"
        >
          <span class="reply__detail__reply--text">回覆</span>
          {{ replyToAccount | altFilter }}
        </div>
        <div class="reply__detail__content">
          {{ reply.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter, altFilter } from './../utils/mixins'

export default {
  name: 'UserTweetReply',
  props: {
    initReply: {
      type: Object,
      required: true,
    },
    replyTo: {
      type: String,
      default: '',
    },
    replyToId: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      reply: this.initReply,
      isProcessing: false,
    }
  },
  computed: {
    replyToAccount() {
      return this.reply.Tweet ? this.reply.Tweet.User.account : this.replyTo
    },
    replyToUserId() {
      return this.reply.Tweet ? this.reply.Tweet.User.id : this.replyToId
    },
  },
  mixins: [fromNowFilter, altFilter],
  methods: {
    handleClickUser(user_id) {
      this.$router.push({ name: 'UserInfo', params: { user_id } })
    },
  },
}
</script>

<style lang="scss" scoped>
.reply {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid var(--blue-gray-600);
  transition: 0.25s;
  &:hover {
    background-color: var(--gray-300);
  }
  &__detail {
    display: flex;
    &__avatar {
      width: 50px;
      height: 50px;
      margin-top: 3px;
      margin-right: 10px;
      border-radius: 50px;
      background-color: #c4c4c4;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__right {
      flex: 1;
    }
    &__name {
      font-weight: bold;
      padding-right: 5px;
      color: var(--text);
      cursor: pointer;
    }
    &__account {
      color: var(--gray-500);
      cursor: pointer;
    }
    &__date {
      color: var(--gray-500);
    }
    &__reply {
      font-weight: 500;
      margin-top: 4px;
      color: var(--theme);
      cursor: pointer;
      &--text {
        color: var(--gray-500);
      }
    }
    &__content {
      word-break: break-all;
      margin-top: 5px;
      font-weight: normal;
      font-size: 15px;
      color: var(--text);
    }
  }
}
</style>
