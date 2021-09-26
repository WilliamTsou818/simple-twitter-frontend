<template>
  <div class="nav-left">
    <router-link to="/user/home" class="nav-left__logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </router-link>
    <nav class="nav-left__nav">
      <template v-if="currentUser.role === 'admin'">
        <router-link class="nav-left__nav__link" to="/admin/tweets">
          <NavItem title="推文清單">
            <IconHome />
          </NavItem>
        </router-link>
        <router-link class="nav-left__nav__link" to="/admin/users">
          <NavItem title="使用者列表">
            <IconUser />
          </NavItem>
        </router-link>
      </template>
      <template v-if="currentUser.role === 'user'">
        <router-link class="nav-left__nav__link" to="/user/home">
          <NavItem title="首頁">
            <IconHome />
          </NavItem>
        </router-link>

        <router-link class="nav-left__nav__link" to="/user/chat/public">
          <NavItem title="公開聊天室" :badge="publicUnreadMessageCount">
            <IconChat count />
          </NavItem>
        </router-link>

        <router-link
          :class="[
            'nav-left__nav__link',
            { 'router-link-active': room === 'PrivateRoom' },
          ]"
          :to="{
            name: 'PrivateRoom',
            params: { room_id: 0 },
          }"
        >
          <NavItem title="私人訊息" :count="privateUnreadMessageCount">
            <IconMail />
          </NavItem>
        </router-link>

        <router-link
          :to="{ name: 'UserInfo', params: { user_id: currentUser.id } }"
          class="nav-left__nav__link"
        >
          <NavItem title="個人資料">
            <IconUser />
          </NavItem>
        </router-link>

        <router-link to="/user/setting" class="nav-left__nav__link">
          <NavItem title="設定">
            <IconSetting />
          </NavItem>
        </router-link>

        <button
          class="nav-left__nav__link action-tweet--small"
          @click.stop.prevent="$emit('new-post')"
        >
          <svg
            class="nav-left__nav__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8 7.20001H5.6V3.90001C5.6 3.50001 5.3 3.10001 4.8 3.10001C4.3 3.10001 4.1 3.50001 4.1 3.90001V7.20001H0.8C0.4 7.20001 0 7.50001 0 8.00001C0 8.50001 0.3 8.80001 0.8 8.80001H4.1V12.1C4.1 12.5 4.4 12.9 4.9 12.9C5.4 12.9 5.7 12.6 5.7 12.1V8.70001H9C9.4 8.70001 9.8 8.40001 9.8 7.90001C9.8 7.40001 9.3 7.20001 8.8 7.20001ZM23.8 2.30001V2.20001H23.7C23.6 2.20001 14.5 3.40001 9.3 13.9C5.5 21.5 5.7 23.8 6 23.8C6.3 23.9 9.4 17.3 12.7 14.6C17.9 13.5 19.3 11 19.3 11C19.3 11 17.8 11.2 17.2 11.2C16.4 11.2 15.8 11 15.5 10.9C16.8 9.70001 17.9 9.40001 19 9.20001C19.9 9.00001 20.8 8.80001 22 8.00001C24.2 6.40001 23.9 2.50001 23.8 2.30001Z"
            />
          </svg>
        </button>
        <button
          class="nav-left__nav__btn-tweet action-tweet--large"
          type="button"
          @click.stop.prevent="$emit('new-post')"
        >
          推文
        </button>
      </template>
    </nav>
    <button class="nav-left__logout" @click="handleLogout">
      <svg
        class="nav-left__logout__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 16L7 12M7 12L11 8M7 12H21M16 16V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H13C13.7956 4 14.5587 4.31607 15.1213 4.87868C15.6839 5.44129 16 6.20435 16 7V8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="nav-left__logout__text">登出</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavItem from '@/components/NavItem'

import IconHome from '@/components/icons/IconHome'
import IconMail from '@/components/icons/IconMail'
import IconUser from '@/components/icons/IconUser'
import IconChat from '@/components/icons/IconChat'
import IconSetting from '@/components/icons/IconSetting'

export default {
  name: 'NavBar',
  computed: {
    ...mapState([
      'currentUser',
      'privateUnreadMessageCount',
      'publicUnreadMessageCount',
    ]),
    room() {
      return this.$route.name
    },
  },
  components: {
    NavItem,
    IconMail,
    IconUser,
    IconChat,
    IconHome,
    IconSetting,
  },
  methods: {
    handleLogout() {
      const role =
        this.$store.state.currentUser.role === 'user' ? 'user' : 'admin'
      this.$store.commit('revokeAuthentication')
      this.$router.push(`/${role}/login`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.nav-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  margin-left: calc(min(7%, 103px));
  margin-right: 40px;
  padding-top: 0.5rem;
  width: 235px;
  &__logo {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50px;
    &:hover {
      background-color: var(--theme-200);
    }
  }
  &__nav {
    margin-top: 1.5rem;
    flex: 1;
    &__link {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      margin: 10px 0;
      border-radius: 20rem;
      @include font-setting(18px, bold, var(--text));
      &:hover {
        background-color: var(--theme-200);
        color: var(--theme);
      }
      &:hover > .nav-left__nav__icon {
        fill: var(--theme);
      }
      &.router-link-active {
        color: var(--theme);
        > .nav-left__nav__icon {
          fill: var(--theme);
        }
      }
    }
    &__icon {
      fill: var(--black);
      margin-right: 1.25rem;
    }
    &__btn-tweet {
      width: 210px;
      height: 38px;
      background-color: var(--theme);
      border-radius: 50px;
      @include font-setting(18px, 500, var(--white));
      &:hover {
        background-color: var(--theme-600);
      }
    }
  }
  &__logout {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    padding: 8px 12px;
    text-align: left;
    &__icon {
      stroke: var(--black);
      margin-right: 1.25rem;
    }
    &:hover {
      background-color: var(--theme-200);
      color: var(--theme);
    }
    &:hover > &__icon {
      stroke: var(--theme);
    }
  }
}
@media screen and (max-width: 600px) {
}
@media screen and (min-width: 1199px) {
  .action-tweet--small {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .action-tweet--large {
    display: none;
  }
  .nav-left {
    align-items: center;
    width: 70px;
    margin-left: 0;
    margin-right: 0;
    &__nav {
      &__text {
        display: none;
      }
      &__link {
        /* padding: 8px 8px; */
      }
      &__icon {
        margin-right: 0;
      }
    }
    &__logout {
      justify-content: center;
      &__icon {
        margin-right: 0;
      }
      &__text {
        display: none;
      }
    }
  }
}
</style>
