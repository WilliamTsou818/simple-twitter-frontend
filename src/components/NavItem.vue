<template>
  <div class="nav-item">
    <div class="nav-item__icon">
      <div v-if="count" class="nav-item__icon__count">{{ count }}</div>
      <div v-if="badge" class="nav-item__icon__badge"></div>
      <slot class="nav-item__icon__svg"></slot>
    </div>
    <span class="nav-item__text">{{ title }}</span>
  </div>
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
    badge: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixin.scss';
.router-link-active {
  .nav-item {
    color: var(--theme);
    &__icon {
      color: var(--theme);
    }
  }
}
.nav-item {
  display: flex;
  align-items: center;
  width: 100%;
  /* padding: 8px 12px;
  border-radius: 20rem; */
  @include font-setting(18px, bold, var(--text));
  &:hover {
    /* background-color: var(--theme-200); */
    color: var(--theme);
    .nav-item__icon {
      color: var(--theme);
    }
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
    color: var(--text);
    &__svg {
      fill: var(--text);
    }
    &__badge,
    &__count {
      position: absolute;
      line-height: 16px;
      border-radius: 8px;
      font-size: 5px;
      border: 1px solid var(--white);
      background-color: var(--theme);
      color: var(--white);
    }
    &__badge {
      top: -2px;
      right: -4px;
      width: 12px;
      height: 12px;
    }
    &__count {
      top: -7px;
      right: -10px;
      font-size: 5px;
      width: 18px;
      height: 18px;
      line-height: 16px;
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
