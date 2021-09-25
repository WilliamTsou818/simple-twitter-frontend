<template>
  <router-link :to="link" class="nav-item">
    <div class="nav-item__icon">
      <div v-if="count" class="nav-item__icon__badge">{{ count }}</div>
      <slot class="nav-item__icon__svg"></slot>
    </div>
    <span class="nav-item__text">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
    count: {
      type: [Number, String],
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixin.scss';
.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 20rem;
  @include font-setting(18px, bold, var(--text));
  &:hover {
    background-color: var(--theme-200);
    color: var(--theme);
  }
  &.router-link-active {
    color: #ff6600;
    .nav-item__icon__svg {
      fill: var(--theme);
    }
  }
  &__icon {
    position: relative;
    width: 24px;
    height: 24px;
    margin-right: 1.25rem;
    &__svg {
      fill: var(--text);
    }
    &__badge {
      position: absolute;
      top: -7px;
      right: -10px;
      font-size: 5px;
      width: 18px;
      height: 18px;
      line-height: 16px;
      border-radius: 8px;
      border: 1px solid var(--white);
      background-color: var(--theme);
      color: white;
    }
  }
}
@media screen and (max-width: 1200px) {
  .nav-item {
    &__icon {
      margin-right: 0;
    }
    &__text {
      display: none;
    }
  }
}
</style>
