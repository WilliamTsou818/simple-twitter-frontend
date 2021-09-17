import { mapState } from 'vuex'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-tw'
dayjs.extend(relativeTime).locale('zh-tw')

export const fromNowFilter = {
  filters: {
    fromNowFilter(dateTime) {
      if (!dateTime) {
        return '-'
      }
      const now = dayjs()
      const fromNowTime = now.diff(dateTime, 'hour')
      //如果時間間隔小於 24 小時，顯示M月DD日
      if (fromNowTime > 24) {
        return dayjs(dateTime).format('M月DD日')
      } else {
        return dayjs(dateTime).fromNow(true)
      }
    },
  },
}

export const timeFormatFilter = {
  filters: {
    timeFormatFilter(dateTime) {
      if (!dateTime) {
        return '-'
      }
      const prefix = dayjs(dateTime).hour() > 12 ? '下午' : '上午'
      return prefix + dayjs(dateTime).format(" hh:mm・YYYY年M月DD日")
    },
  },
}

export const thousandFilter = {
  filters: {
    thousandFilter(num) {
      if (!num) {
        num = 0
      } else if (Number(num) > 1000) {
        num = (num / 1000).toFixed(1)
        num = String(num) + 'K'
      }
      return num
    },
  },
}

export const altFilter = {
  filters: {
    altFilter(account) {
      if (!account) {
        return '@'
      }
      return '@' + account
    },
  },
}

// 回覆相關設定
export const replyAction = {
  computed: {
    ...mapState(['replyDetail', 'isReplyRefresh']),
  },
  methods: {
    // 傳入回覆的推文內容
    handleActionReply(replyDetail) {
      this.$store.dispatch('handleSetReplyDetail', replyDetail)
      this.$store.dispatch('isReplyModalOpen', true)
    },
  },
  // TODO:這個isReplyRefresh要在自己的view裡面寫。
  // watch: {
  //   isReplyRefresh(isRefresh) {
  //     if (isRefresh) {
  //       this.$store.dispatch('isReplyRefresh', false)
  //       // ...下面可以自行增加頁面刷新function
  //     }
  //   },
  // },
}
