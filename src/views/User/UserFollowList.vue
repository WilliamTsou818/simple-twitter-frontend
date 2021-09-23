<template>
  <div class="follow">
    <Spinner v-if="isLoadingPage || currentViewUser.isLoading" />
    <div v-if="!currentViewUser.isLoading && !isLoadingPage">
      <div v-if="emptyState" class="follow__empty-hint">
        <h3>目前沒有 {{ emptyStateMessage }}</h3>
        <p>當有 {{ emptyStateMessage }} 會顯示於此列表</p>
      </div>
      <transition-group name="fade">
        <router-link
          :to="{
            name: 'UserAllTweets',
            params: { user_id: user.followerId || user.followingId },
          }"
          v-for="user in followList"
          :key="user.account"
          class="follow__list"
        >
          <div
            class="follow__list__avatar"
            :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
          ></div>
          <div class="follow__list__detail">
            <div class="follow__list__social">
              <div class="follow__list__info">
                <div class="follow__list__name">{{ user.name }}</div>
                <div class="follow__list__account">
                  {{ user.account | altFilter }}
                </div>
              </div>
              <div
                class="follow__list__button"
                v-if="user.followerId && user.followerId !== currentUserId"
              >
                <ButtonFollow :user="user" :userId="user.followerId" small />
              </div>
              <div
                class="follow__list__button"
                v-if="user.followingId && user.followingId !== currentUserId"
              >
                <ButtonFollow :user="user" :userId="user.followingId" small />
              </div>
            </div>
            <div class="follow__list__intro">
              {{ user.introduction }}
            </div>
          </div>
        </router-link>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { altFilter, Toastification } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import ButtonFollow from '@/components/ButtonFollow.vue'

export default {
  name: 'UserFollowList',
  mixins: [altFilter, Toastification],
  components: {
    ButtonFollow,
    Spinner,
  },
  props: {
    isLoadingPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: 'followings',
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
    tab() {
      return this.$route.name
    },
    followList() {
      return this.tab === 'UserFollowings'
        ? this.currentViewUser.followings
        : this.currentViewUser.followers
    },
    emptyState() {
      return !this.followList.length
    },
    emptyStateMessage() {
      return this.show === 'UserFollowings' ? '正在跟隨' : '跟隨者'
    },
    currentUserId() {
      return this.$store.getters.getCurrentUser.id
    },
  },
  created() {
    const { name } = this.$route
    this.show = name
  },
}
</script>

<style lang="scss" scoped>
.follow {
  height: calc(100vh - 109px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__empty-hint {
    margin-top: 100px;
  }
  &__list {
    display: flex;
    padding: 10px 15px;
    border-bottom: 1px solid var(--blue-gray-600);
    cursor: pointer;
    &:hover {
      background-color: var(--blue-gray-500);
    }
    &__avatar {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: var(--gray-300);
      margin-right: 10px;
    }
    &__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    &__social {
      display: flex;
      justify-content: space-between;
    }
    &__info {
      text-align: left;
      font-size: 15px;
      line-height: 15px;
    }
    &__name {
      color: var(--text);
      font-weight: 900;
      word-break: break-all;
    }
    &__account {
      color: var(--gray-500);
      margin-top: 5px;
      font-weight: 500;
      word-break: break-all;
    }
    &__intro {
      color: var(--text);
      text-align: left;
      font-weight: 500;
      line-height: 22px;
      padding-top: 5px;
      word-break: break-all;
    }
    &__button {
      min-width: 120px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter {
  opacity: 0;
}
</style>
