<template>
    <nav>
      <router-link to="/admin/tweets">推文清單</router-link>
      <router-link to="/admin/users">使用者列表 </router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  display:flex;
  flex-direction: column;
  width: 235px;
  > a {
    display: block;
    text-align: left;
  }
}
</style>