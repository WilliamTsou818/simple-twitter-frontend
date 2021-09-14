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
