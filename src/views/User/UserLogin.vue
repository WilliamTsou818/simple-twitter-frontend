<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <LoginForm :title="title" :path="path" />
    <section class="section-actions">
      <router-link class="section-actions__link" to="/user/register">
        註冊 Alphitter
      </router-link>
      <span class="section-actions__dot">·</span>
      <router-link class="section-actions__link" to="/admin/login">
        後台登入
      </router-link>
    </section>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'UserLogin',
  components: {
    LoginForm,
  },
  data() {
    return {
      title: '登入 Alphitter',
      // 登入成功跳轉頁面
      path: { name: 'User' },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixin.scss';
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
  &__dot,
  &__link {
    @include font-setting(18px, bold, var(--blue-light));
  }
  &__link {
    text-decoration: underline;
  }
}
</style>
