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

// 側邊攔新增推文相關設定
export const newPostAction = {
  computed: {
    ...mapState(['isNewPostRefresh']),
  },
  methods: {
    handleActionNewPost() {
      // 開啟Modal
      this.$store.dispatch('isNewPostModalOpen', true)
    },
  },
  // TODO:這個isNewPostRefresh要在自己的view裡面寫。
  // watch: {
  //   isNewPostRefresh(isRefresh) {
  //     if (isRefresh) {
  //       this.$store.dispatch('isNewPostRefresh', false)
  //       // ...下面可以自行增加頁面刷新function
  //     }
  //   },
  // },
}