import axios from 'axios'
import dayjs from 'dayjs'

//需替換
const baseURL = 'https://wahp-simeple-twitter-api.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')
    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.message.includes('timeout')) {
      console.log("網路超時", error);
      alert("網路超時，請稍後在試");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
)

export const apiHelper = axiosInstance

export const sortBy = {
  ASC: 'ASC',
  DESC: 'DESC',
  // ASC 小到大(舊到新) | DESC 大到小(新到舊)
  // 用CreatedAt排序
  createdAt(dataArray, orderby) {
    let newArray = []
    switch (orderby) {
      case sortBy.ASC:
        newArray = [...dataArray].sort((a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix())
        break;
      case sortBy.DESC:
        newArray = [...dataArray].sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix())
        break;
      default:
        newArray = dataArray
        break;
    }
    return newArray
  }
}