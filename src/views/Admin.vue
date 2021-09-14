<template>
  <div class="admin">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBarAdmin from './../components/NavBarAdmin.vue'
import TabBarAdmin from './../components/TabBarAdmin.vue'

export default {
  name: 'admin',
  components: {
    NavBarAdmin,
    TabBarAdmin,
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
