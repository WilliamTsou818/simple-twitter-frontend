<template>
  <div class="container container--admin">
    <Head :title="title" />
    <section class="users">
      <Spinner v-if="isLoading" />
      <div class="users__grid-container">
        <AdminUserCard v-for="user in users" :user="user" :key="user.id" />
      </div>
    </section>
  </div>
</template>

<script>
import adminAPI from '@/apis/admin'
import { Toastification } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import AdminUserCard from '@/components/AdminUserCard'

export default {
  mixins: [Toastification],
  components: {
    Spinner,
    Head,
    AdminUserCard,
  },
  data() {
    return {
      title: '使用者列表',
      users: [],
      isLoading: true,
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data
        this.isLoading = false
      } catch (error) {
        console.log('error', error)
        this.ToastError({
          title: '列表載入失敗！',
          description: `目前無法讀取所有使用者，請稍後再試`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.users {
  padding: 15px;
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
}
@media screen and (max-width: 1080px) {
  .users__grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 600px) {
  .users {
    padding-bottom: 56px;
    &__grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
