<template>
  <transition name="fade">
    <div class="modal" @click.self="handleToggleModal">
      <div class="modal__mask">
        <div class="modal__container">
          <div class="modal__header">
            <button
              @click.stop.prevent="closeModal"
              class="modal__header__close"
            >
              <img
                class="modal__header__close-icon"
                src="@/assets/images/icon/close_theme.svg"
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AdminCheckModal',
  props: {
    handleToggleModal: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-200);
}
</style>
