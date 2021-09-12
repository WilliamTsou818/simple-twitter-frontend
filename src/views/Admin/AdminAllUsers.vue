<template>
  <div class="container container--admin">
    <Head :title="title" />
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
  data() {
    return {
      title: '使用者列表',
    }
  },
}
</script>
