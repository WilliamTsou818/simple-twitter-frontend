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
    token: ""
  },
  autoConnect: false
}

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://wahp-simeple-twitter-api.herokuapp.com', socketOptions),
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
    disconnect(reason) {
      // console.log('socket disconnect', reason)
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        this.$socket.connect();
      }
    },
  },
}).$mount('#app')

