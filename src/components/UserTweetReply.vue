<template>
  <div class="reply">
    <div class="reply__detail">
      <button
        class="reply__detail__avatar"
        v-bind:style="{ backgroundImage: 'url(' + reply.User.avatar + ')' }"
        @click.stop.prevent="handleClickAvatar(reply.User.id)"
      ></button>
      <div class="reply__detail__right">
        <div class="reply__detail__user">
          <span class="reply__detail__name">{{ reply.User.name }}</span>
          <span class="reply__detail__account">{{
            reply.User.account | altFilter
          }}</span>
          <span class="reply__detail__date"
            >・{{ reply.createdAt | fromNowFilter }}</span
          >
        </div>
        <div class="reply__detail__reply">
          <span class="reply__detail__reply--text">回覆</span>
          {{ replyTo | altFilter }}
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
      require: true,
    },
  },
  data() {
    return {
      reply: this.initReply,
      isProcessing: false,
    }
  },
  mixins: [fromNowFilter, altFilter],
  methods: {
    handleClickAvatar(user_id) {
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
    }
    &__account,
    &__date {
      color: var(--gray-500);
    }
    &__reply {
      font-weight: 500;
      margin-top: 4px;
      color: var(--theme);
      &--text {
        color: var(--gray-500);
      }
    }
    &__content {
      margin-top: 5px;
      font-weight: normal;
      font-size: 15px;
      color: var(--text);
    }
  }
}
</style>
