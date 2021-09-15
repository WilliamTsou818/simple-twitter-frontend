<template>
  <div class="user">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <router-view />
    </main>
    <UserPopularTop class="sm-d-none" />
  </div>
</template>

<script>
import NavBarAdmin from './../components/NavBarAdmin.vue'
import TabBarAdmin from './../components/TabBarAdmin.vue'
import UserPopularTop from '@/components/UserPopularTop.vue'

export default {
  name: 'user',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserPopularTop,
  },
}
</script>

<style lang="scss" scoped>
.user {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
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
