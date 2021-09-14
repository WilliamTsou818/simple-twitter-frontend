<template>
  <div class="nav-left">
    <div class="nav-left__logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <nav class="nav-left__nav">
      <template v-if="currentUser.role === 'admin'">
        <router-link to="/admin/tweets" class="nav-left__nav__link">
          <svg
            class="nav-left__nav__icon"
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
          <span class="nav-left__nav__text">推文清單</span>
        </router-link>
        <router-link to="/admin/users" class="nav-left__nav__link">
          <svg
            class="nav-left__nav__icon"
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
          <span class="nav-left__nav__text">使用者列表</span>
        </router-link>
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

export default {
  name: 'NavBarAdmin',
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    handleLogout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/admin/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  margin-left: 7vw;
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
      margin: 8px 0;
      border-radius: 20rem;
      font-size: 18px;
      font-weight: bold;
      color: var(--text);
      &:hover {
        background-color: var(--theme-200);
        color: var(--theme);
      }
      &:hover > .nav-left__nav__icon {
        fill: var(--theme);
      }
      &.router-link-exact-active {
        color: #ff6600;
        > .nav-left__nav__icon {
          fill: var(--theme);
        }
      }
    }
    &__icon {
      fill: var(--black);
      margin-right: 1.25rem;
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
@media screen and (max-width: 1200px) {
  .nav-left {
    align-items: center;
    width: 70px;
    margin-left: 0;
    &__nav__text {
      display: none;
    }
    &__nav__link {
      padding: 8px 8px;
    }
    &__nav__icon {
      margin-right: 0;
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
