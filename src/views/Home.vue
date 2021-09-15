<template>
  <div class="home">
    <!-- TODO:開發中使用 -->
    <div class="development-link">
      <router-link to="/">Home</router-link>
      <router-link to="/user/login">前台登入</router-link>
      <router-link to="/user/register">使用者註冊</router-link>
      <router-link to="/user/setting">使用者帳號設定</router-link>
      <router-link to="/user/home">使用者首頁</router-link>
      <router-link :to="{ name: 'UserInfo', params: { user_id: 75 } }"
        >使用者個人資訊</router-link
      >
      <hr />
      <router-link to="/admin/login">後台登入</router-link>
      <router-link to="/admin/tweets">推文清單</router-link>
      <router-link to="/admin/users">使用者列表</router-link>
      <button @click.prevent.stop="handleLogout">登出(測試用)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
</style>
