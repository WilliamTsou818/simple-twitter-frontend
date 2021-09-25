<template>
  <div class="container container--chat">
    <div class="chat">
      <div class="chat__lists md-d-none">
        <Head :title="onlineUsers" />
        <ChatList
          v-for="user in publicUsers"
          :user="user"
          :key="user.id"
          :name="user.name"
          :account="user.account"
          :avatar="user.avatar"
        />
        <Spinner v-show="isLoading" />
      </div>
      <div class="chat__room">
        <Head title="公開聊天室" class="md-d-none" />
        <Head :title="chatUsers" class="lg-d-none" />
        <div class="chat__head lg-d-none">
          <div class="chat__head__lists">
            <div
              v-for="user in publicUsers"
              :key="user.id"
              class="chat__head__avatar"
              :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
            ></div>
          </div>
        </div>

        <ChatRoom :chats="publicAllMessages" @new-chat="handleNewChatSend" />
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toastification } from './../../utils/mixins'
import { mapState } from 'vuex'

import Head from '@/components/Head'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
import Spinner from '@/components/Spinner'

export default {
  name: 'PublicRoom',
  mixins: [Toastification],
  components: {
    Head,
    ChatList,
    ChatRoom,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      isJoin: false,
    }
  },
  computed: {
    ...mapState(['publicUsers', 'publicAllMessages']),
    onlineUsers() {
      return `上線使用者(${this.publicUsers.length})`
    },
    chatUsers() {
      return `公開聊天室(${this.publicUsers.length})`
    },
  },
  created() {
    this.openPublicRoom()
  },
  beforeDestroy() {
    if (this.isJoin) {
      console.log('beforeDestroy------------leavePublicRoom')
      this.$socket.emit('leavePublicRoom')
      // 清空上線使用者
      this.$store.commit('setPublicUsers', [])
    }
  },
  sockets: {
    connect() {
      console.log('publicRoon socket connected', this.$socket.connected)
      // 斷線重連，重新加入房間
      this.openPublicRoom()
    },
    error(error) {
      console.log('publicRoon socket error', error)
      let title = ''
      switch (error.errType) {
        default:
          title = 'PublicRoon Error!'
          break
      }
      this.ToastError({
        title,
        description: error.message,
      })
    },
  },
  methods: {
    async openPublicRoom() {
      await this.fetchAllMessages()
      console.log('created------------joinPublicRoom')
      this.$socket.emit('joinPublicRoom')
      this.isJoin = true
    },
    async fetchAllMessages() {
      try {
        this.isLoading = true
        const { data } = await usersAPI.messages.getPublicAll()
        console.log('fetchAllMessages', data)
        this.$store.dispatch('setPublicAllMessages', data)
        this.isLoading = false
      } catch (err) {
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }

        this.ToastError({
          title: '獲取訊息失敗！',
          description: message,
        })
      }
    },
    handleNewChatSend(content) {
      console.log('handleNewChatSend', content)
      this.$socket.emit('publicMessage', {
        UserId: this.$store.getters.getCurrentUser.id,
        RoomId: 5,
        content,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  &__lists {
    width: 390px;
    height: 100vh;
    overflow-y: scroll;
    border-right: 1px solid var(--blue-gray-600);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__room {
    flex: 1;
  }
  &__head {
    display: flex;
    position: fixed;
    top: 46px;
    z-index: 2;
    background-color: var(--white);
    height: 50px;
    width: calc(100vw - 70px);

    padding-top: 10px;
    &__lists {
      padding: 0 15px;
      flex: 1;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      // scrollbar設定
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: var(--blue-gray-500);
      }
      &::-webkit-scrollbar {
        height: 3px;
        background-color: var(--blue-gray-500);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: var(--blue-gray-900);
      }
    }
    &__avatar {
      margin-right: 10px;
      min-width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: var(--blue-gray-600);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

@media screen and (max-width: 600px) {
  .chat {
    &__head {
      width: 100vw;
    }
  }
}
@media screen and (max-width: 960px) {
  .md-d-none {
    display: none;
  }
}
@media screen and (min-width: 959px) {
  .lg-d-none {
    display: none;
  }
}
</style>
