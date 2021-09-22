<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="title">建立你的帳號</div>
    <section class="section-form">
      <AccountForm :page="page" />
    </section>
  </div>
</template>

<script>
import AccountForm from '@/components/AccountForm'

export default {
  name: 'UserRegister',
  components: {
    AccountForm,
  },
  data() {
    return {
      page: 'signUp',
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
.title {
  margin-bottom: 40px;
  @include font-setting(23px, bold, var(--text));
}
.section-form {
  margin: 0 auto;
  max-width: 540px;
}
</style>
