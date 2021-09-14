<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Noto Sans TC, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
@media screen and (max-width: 599px) {
  #app {
    margin-bottom: 55px;
  }
}
</style>
