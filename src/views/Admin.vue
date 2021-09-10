<script>
import NavBarAdmin from './../components/NavBarAdmin.vue'
export default {
  name: 'admin',
  components: {
    NavBarAdmin,
  },
}
</script>

<template>
  <div class="admin">
    <NavBarAdmin />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  max-width: 1440px ;
  display: flex;
  margin: 0 auto;
  border: 1px solid red;
}
main {
  flex: 1;
}
.admin {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: #FF6600;
      }
    }
  }
}
</style>