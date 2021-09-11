<template>
  <div class="home">
    <!-- 開發中使用 -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/admin/login">後台登入</router-link>
    <router-link to="/admin/tweets">推文清單</router-link>
    <router-link to="/admin/users">使用者列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  width: 600px;
  > a {
    display: block;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--text);
  margin: 20px;
  &:hover{
    color: var(--theme);
  }
}
</style>