<template>
  <div class="modal">
    <div class="modal__mask">
      <div class="modal__container">
        <div class="modal__img"></div>
        <div class="modal__name">名稱</div>
        <div class="modal__intro"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  &__container {
    width: 200px;
    height: 200px;
    background-color: var(--white);
  }
}
</style>
