<template>
  <div class="container">
    <div class="container__head">使用者列表</div>
    <AdminUserCard />
  </div>
</template>

<script>
import AdminUserCard from '@/components/AdminUserCard'

export default {
  components: {
    AdminUserCard,
  },
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  border-left: 1px solid var(--gray-200);
  &__head {
    text-align: left;
    border-bottom: 1px solid var(--gray-200);
    font-weight: bold;
    padding: 1rem 1.5rem;
  }
}
</style>
