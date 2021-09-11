<template>
  <div class="admin">
    <NavBarAdmin />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBarAdmin from './../components/NavBarAdmin.vue'

export default {
  name: 'admin',
  components: {
    NavBarAdmin,
  },
}
</script>

<style lang="scss" scoped>
.admin {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  // TODO:測試用
  border: 1px solid red;
}
main {
  flex: 1;
}
</style>
