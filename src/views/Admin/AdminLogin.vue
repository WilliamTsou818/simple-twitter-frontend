<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <LoginForm :title="title" :path="path" />
    <section class="section-actions">
      <router-link class="section-actions__link" to="/user/login">
        前台登入
      </router-link>
    </section>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'AdminLogin',
  components: {
    LoginForm,
  },
  data() {
    return {
      title: '後台登入',
      // 登入成功跳轉頁面
      path: { name: 'AdminAllTweets' },
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 60px auto 20px auto;
  width: 50px;
  height: 50px;
  padding: 5px;
}
.section-actions {
  margin: 0 auto;
  margin-top: 20px;
  width: 540px;
  max-width: 90vw;
  text-align: end;
  &__link {
    text-decoration: underline;
    color: var(--blue-light);
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
