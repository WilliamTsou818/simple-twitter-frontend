<template>
  <div class="popular">
    <div class="popular__container">
      <div class="popular__title">
        Popular
      </div>
      <Spinner v-if="isLoading" />
      <div class="popular__user-list">
        <router-link
          :to="{ name: 'UserAllTweets', params: { user_id: user.id } }"
          class="popular__user-list__list"
          v-for="user in popular"
          :key="user.id"
        >
          <div
            class="popular__user-list__avatar"
            :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
          ></div>
          <div class="popular__user-list__info">
            <div class="popular__user-list__name">{{ user.name }}</div>
            <div class="popular__user-list__account">
              {{ user.account | altFilter }}
            </div>
          </div>
          <ButtonFollow :user="user" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { altFilter } from './../utils/mixins'

import Spinner from '@/components/Spinner'
import ButtonFollow from '@/components/ButtonFollow.vue'

export default {
  name: 'UserPopularTop.vue',
  components: {
    Spinner,
    ButtonFollow,
  },
  mixins: [altFilter],
  data() {
    return {
      isLoading: true,
      userIsFollowing: false,
    }
  },
  computed: {
    popular() {
      return this.$store.getters.getPopular
    },
  },
  created() {
    this.fetchPopularUsers()
  },
  methods: {
    async fetchPopularUsers() {
      try {
        const { data } = await usersAPI.getPopularUsers()
        this.$store.dispatch('handleSetPopular', data)
        this.isLoading = false
      } catch (err) {
        console.log(err)
        Toast.fire({
          icon: 'error',
          title: 'PopularTop讀取失敗',
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.popular {
  width: 350px;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 82px;
  &__container {
    background-color: var(--blue-gray-500);
    border-radius: 14px;
    min-height: 200px;
    padding-bottom: 8px;
  }
  &__title {
    font-size: 18px;
    text-align: left;
    padding: 10px 15px;
    font-weight: bold;
    color: var(--text);
    border-bottom: 1px solid var(--blue-gray-600);
  }
  &__user-list {
    &__list {
      display: flex;
      padding: 10px 15px;
      align-items: center;
      border-bottom: 1px solid var(--blue-gray-600);
      &:hover {
        background-color: var(--blue-gray-600);
      }
      &:last-child {
        border-bottom: 0px solid var(--blue-gray-600);
      }
    }
    &__avatar {
      width: 50px;
      height: 50px;
      background-color: #c4c4c4;
      border-radius: 50px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__info {
      flex: 1;
      text-align: left;
      padding-left: 20px;
      font-weight: 900;
      font-size: 15px;
    }
    &__name {
      color: var(--text);
    }
    &__account {
      color: var(--gray-500);
      margin-top: 2px;
    }
  }
}
</style>
