<template>
  <div class="container__head">{{ title }}</div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container__head {
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
  font-weight: bold;
  padding: 1rem 1.5rem;
}
</style>
