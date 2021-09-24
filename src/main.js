import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import '@/assets/styles/main.scss'

const socketOptions = {
  auth: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTYzMjQ0Nzk1MX0.UR2Sey3xFt_PxaUaHswqhPboH8QSlhi62qAUN_7fDOM",
  }
}

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://wahp-simeple-twitter-api.herokuapp.com/', socketOptions),
  vuex: {
    store,
    actionPrefix: "SOCKET_",
  }
})
);

const options = {
  // You can set your default options here
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: false,
  icon: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: false,
  toastClassName: "custom-toast",
  bodyClassName: ["custom-class-body"]
};
Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  sockets: {
    connect() {
      console.log('socket connected')
    },
    connect_error() {
      console.log('socket connect_error')
      this.$socket.close();
    },
    disconnect(reason) {
      console.log('socket disconnect', reason)
    },
  },
}).$mount('#app')

