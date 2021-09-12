<template>
  <div class="container container--admin">
    <Head :title="title" />
    <AdminUserCard />
    <div v-for="user in users" :key="user.id">
      {{ user.id }}
    </div>
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
        console.log(this.users)
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
