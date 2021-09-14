<template>
  <div class="home">
    <NavBarAdmin class="sm-d-none" />
    <!-- TODO:開發中使用 -->
    <div class="development-link">
      <router-link to="/">Home</router-link>
      <router-link to="/user/login">前台登入</router-link>
      <router-link to="/user/register">使用者註冊</router-link>
      <router-link to="/admin/login">後台登入</router-link>
      <router-link to="/admin/tweets">推文清單</router-link>
      <router-link to="/admin/users">使用者列表</router-link>
      <button @click.prevent.stop="handleLogout">登出(測試用)</button>
    </div>
    <UserPopularTop />
  </div>
</template>

<script>
import NavBarAdmin from './../components/NavBarAdmin.vue'
import TabBarAdmin from './../components/TabBarAdmin.vue'
import UserPopularTop from './../components/UserPopularTop.vue'

export default {
  name: 'Home',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserPopularTop,
  },
  methods: {
    handleLogout() {
      console.log('登出(測試用)')
      this.$store.commit('revokeAuthentication')
    },
  },
}
</script>

<style scoped lang="scss">
.home {
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  // TODO:測試用
  border: 1px solid red;
}
.development-link {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  width: 600px;
  > a {
    display: block;
  }
}

a,
button {
  color: var(--text);
  margin: 20px;
  &:hover {
    color: var(--theme);
  }
}

@media screen and (max-width: 600px) {
  .sm-d-none {
    display: none;
  }
}
@media screen and (min-width: 599px) {
  .lg-d-none {
    display: none;
  }
}
</style>
