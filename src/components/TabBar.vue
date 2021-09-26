<template>
  <div class="tab-bar">
    <template v-if="currentUser.role === 'admin'">
      <div class="tab-bar__tab">
        <button @click="handleLogout">
          <svg
            class="tab-bar__tab__icon--left"
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
        </button>
      </div>
      <div class="tab-bar__tab">
        <router-link to="/admin/tweets">
          <svg
            class="tab-bar__tab__icon"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.58 6.34986L12.475 0.896855C12.178 0.736855 11.821 0.736855 11.525 0.896855L1.42496 6.34986C0.938957 6.61386 0.757957 7.21986 1.01996 7.70586C1.19996 8.04086 1.54496 8.23086 1.89996 8.23086C2.05996 8.23086 2.22396 8.19286 2.37496 8.11086L3.10896 7.71486L4.69896 18.9649C4.91496 20.1789 6.00896 21.0269 7.35896 21.0269H16.641C17.991 21.0269 19.085 20.1789 19.303 18.9389L20.891 7.71386L21.628 8.11186C22.113 8.37486 22.72 8.19386 22.982 7.70786C23.245 7.22186 23.062 6.61486 22.578 6.35286L22.58 6.34986ZM12 14.4349C10.205 14.4349 8.74996 12.9799 8.74996 11.1849C8.74996 9.38986 10.205 7.93486 12 7.93486C13.795 7.93486 15.25 9.38986 15.25 11.1849C15.25 12.9799 13.795 14.4349 12 14.4349Z"
            />
          </svg>
        </router-link>
      </div>
      <div class="tab-bar__tab">
        <router-link to="/admin/users">
          <svg
            class="tab-bar__tab__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9999 11.8158C13.3549 11.8158 14.8719 11.6658 15.8399 10.5598C16.6539 9.62976 16.9179 8.19176 16.6459 6.16776C16.2659 3.34276 14.5289 1.65576 11.9999 1.65576C9.47091 1.65576 7.73391 3.34276 7.35391 6.16976C7.08191 8.19176 7.3459 9.62976 8.1599 10.5598C9.1279 11.6668 10.6449 11.8158 11.9999 11.8158ZM8.83991 6.36776C9.00191 5.16776 9.62691 3.15576 11.9999 3.15576C14.3729 3.15576 14.9979 5.16876 15.1599 6.36776C15.3669 7.91776 15.2169 8.99476 14.7099 9.57276C14.2549 10.0928 13.4439 10.3158 11.9999 10.3158C10.5559 10.3158 9.7449 10.0928 9.28991 9.57276C8.78291 8.99476 8.63291 7.91676 8.83991 6.36776ZM20.2799 19.2358C19.4029 15.7098 15.9979 13.2458 11.9999 13.2458C8.00191 13.2458 4.59691 15.7098 3.71991 19.2358C3.54791 19.9278 3.6919 20.6358 4.1149 21.1758C4.5229 21.6958 5.15491 21.9958 5.84791 21.9958H18.1519C18.8449 21.9958 19.4769 21.6958 19.8849 21.1758C20.3089 20.6358 20.4519 19.9288 20.2789 19.2358H20.2799ZM18.7039 20.2518C18.5779 20.4118 18.3879 20.4978 18.1519 20.4978H5.84791C5.61291 20.4978 5.42191 20.4128 5.29591 20.2518C5.15891 20.0778 5.11591 19.8398 5.17591 19.5978C5.88591 16.7428 8.69291 14.7478 11.9999 14.7478C15.3069 14.7478 18.1139 16.7418 18.8239 19.5978C18.8839 19.8398 18.8409 20.0778 18.7039 20.2518Z"
            />
          </svg>
        </router-link>
      </div>
    </template>
    <template v-if="currentUser.role === 'user'">
      <div class="tab-bar__tab">
        <button @click.stop.prevent="$emit('new-post')">
          <svg
            class="tab-bar__tab__icon"
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
      </div>
      <div class="tab-bar__tab">
        <router-link to="/user/chat/public">
          <NavItem :badge="publicUnreadMessage">
            <IconChat />
          </NavItem>
        </router-link>
      </div>
      <div class="tab-bar__tab">
        <router-link to="/user/home" class="tab-bar__tab__icon">
          <IconHome />
        </router-link>
      </div>
      <div class="tab-bar__tab">
        <router-link
          :to="{
            name: 'PrivateRoom',
            params: { room_id: 0 },
          }"
          :class="[
            'tab-bar__tab__icon',
            { 'router-link-active': room === 'PrivateRoom' },
          ]"
        >
          <NavItem title="私人訊息" :count="privateUnreadMessageCount">
            <IconMail />
          </NavItem>
        </router-link>
      </div>
      <div class="tab-bar__tab" @click="hanadleMenuToggle">
        <IconMore />
      </div>
      <div v-show="isMenuOpen" class="tab-bar__menu" @click="hanadleMenuToggle">
        <div class="tab-bar__menu__container">
          <router-link
            :to="{ name: 'UserInfo', params: { user_id: currentUser.id } }"
            class="tab-bar__menu__icon"
          >
            <IconUser />
          </router-link>
          <router-link to="/user/setting" class="tab-bar__menu__icon">
            <IconSetting />
          </router-link>
          <div class="tab-bar__menu__icon">
            <button @click="handleLogout">
              <svg
                class="tab-bar__tab__icon--left"
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
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import NavItem from '@/components/NavItem'
import IconMail from '@/components/icons/IconMail'
import IconMore from '@/components/icons/IconMore'
import IconSetting from '@/components/icons/IconSetting'
import IconUser from '@/components/icons/IconUser'
import IconHome from '@/components/icons/IconHome'
import IconChat from '@/components/icons/IconChat'

export default {
  name: 'TabBar',
  computed: {
    ...mapState(['currentUser']),
  },
  components: {
    NavItem,
    IconMail,
    IconMore,
    IconSetting,
    IconUser,
    IconHome,
    IconChat,
  },
  computed: {
    ...mapState([
      'currentUser',
      'privateUnreadMessageCount',
      'publicUnreadMessage',
    ]),
    room() {
      return this.$route.name
    },
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    handleLogout() {
      const role =
        this.$store.state.currentUser.role === 'user' ? 'user' : 'admin'
      this.$store.commit('revokeAuthentication')
      this.$router.push(`/${role}/login`)
    },
    hanadleMenuToggle() {
      console.log('hi')
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid var(--gray-200);
  background-color: var(--white);
  z-index: 3;
  &__tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 50px;
    color: var(--theme);
    &__icon--left {
      stroke: var(--black);
    }
    &__icon {
      fill: var(--black);
      color: var(--black);
    }
    &:hover {
      background-color: var(--theme-200);
    }
    &:hover > a > .tab-bar__tab__icon,
    &:hover > button > .tab-bar__tab__icon {
      fill: var(--theme);
      color: var(--theme);
    }
    &:hover > button > .tab-bar__tab__icon--left {
      stroke: var(--theme);
    }
    > .router-link-active {
      color: var(--theme);
      > .tab-bar__tab__icon {
        fill: var(--theme);
      }
    }
  }
  &__menu {
    position: fixed;
    width: 100vw;
    height: calc(100vh - 50px);
    bottom: 50px;
    background-color: var(--gray-100);
    &__container {
      width: 48px;
      height: 140px;
      background-color: var(--white);
      border-radius: 20px;
      position: absolute;
      bottom: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      color: var(--text);
    }
    &__icon {
      color: var(--text);
    }
  }
}
</style>
