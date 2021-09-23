<template>
  <div class="admin">
    <NavBar class="sm-d-none" />
    <TabBar class="lg-d-none" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TabBar from '../components/TabBar.vue'

export default {
  name: 'admin',
  components: {
    NavBar,
    TabBar,
  },
}
</script>

<style lang="scss" scoped>
.admin {
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
