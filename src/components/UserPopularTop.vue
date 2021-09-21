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
          <ButtonFollow :user="user" :userId="user.id" />
        </router-link>
      </div>
    </div>
    <p class="more">© 2021 WAHP</p>
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
@import '../assets/styles/mixin.scss';
.popular {
  width: 350px;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 15px;
  margin-left: 30px;
  margin-right: 82px;
  &::-webkit-scrollbar {
    display: none;
  }
  &__container {
    background-color: var(--blue-gray-500);
    border-radius: 14px;
    min-height: 200px;
    padding-bottom: 8px;
  }
  &__title {
    @include font-setting(18px, bold, var(--text));
    text-align: left;
    padding: 10px 15px;
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
.more {
  font-size: 12px;
  text-align: left;
  color: var(--gray-400);
  margin: 20px 20px;
}

@media screen and (max-width: 1200px) {
  .popular {
    width: 300px;
    margin: 0 24px;
  }
}
</style>
