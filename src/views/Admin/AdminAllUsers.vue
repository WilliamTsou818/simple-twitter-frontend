<template>
  <div class="container container--admin">
    <Head :title="title" />
    <section class="users">
      <div class="users__grid-container">
        <AdminUserCard v-for="user in users" :user="user" :key="user.id" />
      </div>
    </section>
  </div>
</template>

<script>
import adminAPI from '@/apis/admin'
import { Toast } from './../../utils/helpers'

import Head from '@/components/Head'
import AdminUserCard from '@/components/AdminUserCard'

export default {
  components: {
    Head,
    AdminUserCard,
  },
  data() {
    return {
      title: '使用者列表',
      users: [],
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
        Toast.fire({
          icon: 'error',
          title: '目前無法讀取所有使用者，請稍後再試',
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
  .users__grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
