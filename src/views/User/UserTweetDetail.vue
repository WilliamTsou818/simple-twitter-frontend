<template>
  <div>
    UserTweetDetail
  </div>
</template>

<script>
export default {
  created() {
    const { tweet_id } = this.$route.params
    console.log('UserTweetDetail tweet_id', tweet_id)
  },
}
</script>

<style></style>
