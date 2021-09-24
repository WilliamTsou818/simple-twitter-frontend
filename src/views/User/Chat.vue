<template>
  <div class="chat">
    <NavBar class="sm-d-none" @new-post="handleActionNewPost" />
    <TabBar class="lg-d-none" @new-post="handleActionNewPost" />
    <main>
      <router-view />
    </main>
    <UserNewPostModal
      v-show="isNewPostModalOpen"
      @close="handleNewPostModalClose"
      @post-success="handleNewPostSuccess"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import TabBar from '@/components/TabBar.vue'
import UserNewPostModal from '@/components/UserNewPostModal'
import { newPostAction } from '@/utils/mixins'

export default {
  name: 'Chat',
  components: {
    NavBar,
    TabBar,
    UserNewPostModal,
  },
  computed: {
    ...mapState(['isNewPostModalOpen']),
  },
  mixins: [newPostAction],
  beforeRouteUpdate(to, from, next) {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }

    next()
  },
  beforeDestroy() {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }
  },
  methods: {
    // 關閉Modal
    handleNewPostModalClose() {
      this.$store.dispatch('isNewPostModalOpen', false)
    },
    // 新增推文成功
    handleNewPostSuccess() {
      // 設定需要刷新，需要刷新的頁面必須watch state.isNewPostRefresh的變化
      this.$store.dispatch('isNewPostRefresh', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.chat {
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
@media screen and (max-width: 768px) {
  .md-d-none {
    display: none;
  }
}
@media screen and (min-width: 599px) {
  .lg-d-none {
    display: none;
  }
}
</style>
