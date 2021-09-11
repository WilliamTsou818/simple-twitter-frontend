<template>
  <div class="container container--admin">
    <Head :title="'推文清單'" />
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
import Head from '@/components/Head'
import AdminTweet from '@/components/AdminTweet'

export default {
  components: {
    Head,
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
