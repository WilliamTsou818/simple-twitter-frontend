<template>
  <div class="card">
    <div class="card-user">
      <div class="card-user-img">
        <div class="card-user-cover"></div>
        <div class="card-user-avatar"></div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-info-name">
        John Doe
      </div>
      <div class="card-info-id">
        @heyjohn
      </div>
    </div>
    <div class="card-actions">
       <span>1.5K</span>
       <span>20K</span>
    </div>
    <div class="card-follow">
      <span>34 個跟隨中</span>
      <span>59 位跟隨者</span>
    </div>
  </div>
</template>

<script>
export default {
   name: 'AdminUserCard',
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 245px;
  height: 314px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #F6F7F8;
  &-user {
    &-img {
      position: relative;
    }
    &-cover {
      height: 140px;
      width: 100%;
      background-color: #C4C4C4;
    }
    &-avatar {
      position: absolute;
      top: 68px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background-color: #C4C4C4;
      border-radius: 50px;
      border: 4px solid white;
    }
  }
  &-info {
    padding-top: 32px;
  }
  &-actions {
    padding: 1rem 0;
  }
  &-actions {
    padding: 1rem 0;
  }
}
</style>