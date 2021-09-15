<template>
  <div class="user-info">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <div>User_name</div>
      <div>User_tweet_length</div>
      <div>User_profile</div>
      <router-view />
    </main>
    <UserPopularTop />
  </div>
</template>

<script>
import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import UserPopularTop from '@/components/UserPopularTop.vue'

export default {
  name: 'UserInfo',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserPopularTop,
  },
}
</script>

<style lang="scss" scoped>
.user-info {
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
}
main {
  flex: 1;
}
.section-form {
  max-width: 642px;
  padding: 0 16px;
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
