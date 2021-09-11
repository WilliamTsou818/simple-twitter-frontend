<template>
  <div class="container">
    <div class="container__head">推文清單</div>
    <div>
      <div v-for="(tweet, index) in tweets" :key="index">
        <div>
          <AdminTweet :init-tweet="tweet" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminTweet from '@/components/AdminTweet'

export default {
  components: {
    AdminTweet,
  },
  data() {
    return {
      tweets: [
        {
          userName: 'Apple',
          userId: 'apple',
          date: '2020-02-20',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
        },
        {
          userName: 'Willian',
          userId: 'willian',
          date: '2020-02-20',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
        },
      ],
    }
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
