<template>
  <div class="container container--admin">
    <Head :title="'使用者列表'" />
    <AdminUserCard />
  </div>
</template>

<script>
import Head from '@/components/Head'
import AdminUserCard from '@/components/AdminUserCard'

export default {
  components: {
    Head,
    AdminUserCard,
  },
}
</script>
