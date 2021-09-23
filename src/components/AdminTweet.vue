<template>
  <div class="atweet">
    <div
      class="atweet__avatar"
      v-bind:style="{ backgroundImage: 'url(' + tweet.User.avatar + ')' }"
    ></div>
    <div class="atweet__detail">
      <div class="atweet__detail__user">
        <span class="atweet__detail__name">{{ tweet.User.name }}</span>
        <span class="atweet__detail__account">@{{ tweet.User.account }}</span>
        <span class="atweet__detail__date"
          >・{{ tweet.updatedAt | fromNowFilter }}</span
        >
      </div>
      <div class="atweet__detail__content">
        {{ tweet.description | ellipsis }}
      </div>
    </div>
    <button
      class="atweet__button-remove"
      :class="{
        'atweet__button-wait': isProcessing,
      }"
      @click="handleListClickDelete(tweet)"
      v-bind:disabled="isProcessing"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.414 12.0001L19.207 6.20712C19.597 5.81712 19.597 5.18412 19.207 4.79312C18.817 4.40212 18.184 4.40312 17.793 4.79312L12 10.5861L6.207 4.79312C5.817 4.40312 5.184 4.40312 4.793 4.79312C4.402 5.18312 4.403 5.81612 4.793 6.20712L10.586 12.0001L4.793 17.7931C4.403 18.1831 4.403 18.8161 4.793 19.2071C4.988 19.4021 5.243 19.5001 5.5 19.5001C5.757 19.5001 6.012 19.4021 6.207 19.2071L12 13.4141L17.793 19.2071C17.988 19.4021 18.243 19.5001 18.5 19.5001C18.757 19.5001 19.012 19.4021 19.207 19.2071C19.597 18.8171 19.597 18.1841 19.207 17.7931L13.414 12.0001Z"
          fill="#657786"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
export default {
  name: 'AdminTweet',
  props: {
    tweet: {
      type: Object,
      required: true,
    },
    handleListClickDelete: {
      type: Function,
      default: () => {},
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [fromNowFilter],
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 50) {
        return value.slice(0, 50) + '...'
      }
      return value
    },
  },
}
</script>

<style lang="scss" scoped>
.atweet {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
  &__button-wait {
    pointer-events: all !important;
    cursor: wait;
  }
  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #c4c4c4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__detail {
    flex: 1;
    padding: 0 1rem;
    &__name {
      font-weight: bold;
      padding-right: 5px;
      color: var(--text);
    }
    &__account,
    &__date {
      color: var(--gray-500);
    }
    &__content {
      margin-top: 5px;
      color: var(--text);
    }
  }
}
</style>
