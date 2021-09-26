<template>
  <div
    :class="['chat-list', { 'chat-list-active': active }]"
    @click.stop.prevent="handleClickList(room.RoomId, user.id)"
  >
    <div
      class="chat-list__avatar"
      :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
    ></div>
    <div class="chat-list__info">
      <div class="chat-list__info__detail">
        <div class="chat-list__info__user">
          <span class="chat-list__info__name">{{ user.name }} </span>
          <span class="chat-list__info__account">{{
            user.account | altFilter
          }}</span>
        </div>
        <div v-show="room" class="chat-list__info__time">
          {{ room.createdAt | fromNowFilter }}
        </div>
      </div>
      <div v-show="room" class="chat-list__info__chat">
        {{ room.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter, altFilter } from '../utils/mixins'
export default {
  name: 'Chatlist',
  mixins: [fromNowFilter, altFilter],
  props: {
    user: {
      type: Object,
    },
    room: {
      type: [Object, Boolean],
      default: false,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    paramsRoomId() {
      return Number(this.$route.params.room_id)
    },
  },
  created() {
    this.active = this.paramsRoomId === this.room.RoomId
  },
  watch: {
    paramsRoomId() {
      this.active = this.paramsRoomId === this.room.RoomId
    },
  },
  methods: {
    handleClickList(room, user) {
      if (room) {
        this.$router.push({
          name: 'PrivateRoom',
          params: { room_id: room },
        })
        this.createActive = Number(this.roomId) === this.room.RoomId
      } else {
        this.$router.push({
          name: 'UserInfo',
          params: { user_id: user },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-list {
  display: flex;
  align-items: center;
  height: 76px;
  width: 100%;
  padding: 0 15px;
  border-bottom: 1px solid var(--blue-gray-600);
  border-right: 2px solid var(--white);
  cursor: pointer;
  &-active {
    border-right: 2px solid var(--theme);
  }
  &:hover {
    background-color: var(--blue-gray-500);
  }
  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--blue-gray-600);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__info {
    padding-left: 10px;
    flex: 1;
    &__detail {
      display: flex;
      justify-content: space-between;
    }
    &__name {
      color: var(--text);
      font-weight: 700;
      font-size: 15px;
    }
    &__account {
      color: var(--gray-500);
      font-weight: 500;
      font-size: 15px;
    }
    &__time {
      text-align: right;
      color: var(--gray-500);
      font-weight: 500;
      font-size: 15px;
    }
    &__chat {
      text-align: left;
      overflow: hidden;
      font-size: 15px;
      font-weight: 500;
      color: var(--gray-500);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
