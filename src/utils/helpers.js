import axios from 'axios'
import Swal from 'sweetalert2'

//需替換
const baseURL = 'https://wahp-simeple-twitter-api.herokuapp.com/api'

//TODO:apiary
// const baseURL =
//   "https://private-anon-b4043a34c1-whapsimpletwitter.apiary-mock.com/api/";

const axiosInstance = axios.create({
  baseURL,
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

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
})

//FIXME: 先用來串admin tweet
const apiaryURL =
  'https://private-anon-b4043a34c1-whapsimpletwitter.apiary-mock.com/api'

const productionURL = 'https://wahp-simeple-twitter-api.herokuapp.com/api'

const axiosInstance2 = axios.create({
  baseURL: productionURL,
})

axiosInstance2.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjMxNTMxMjczfQ.Iyzc7dWxp8U9IhCwelXGjIbMfh-4tqr8uJU0K4JIbYM'

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper2 = axiosInstance2
