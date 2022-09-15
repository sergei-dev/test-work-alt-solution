<script setup>
    import IconArrow from '@/components/icons/IconArrow.vue';
</script>

<template>
  <button class="button-toggle">
    <span class="button-toggle__inner">
      <slot></slot>
    </span>
    <IconArrow class="button-toggle__arrow" />
  </button>
</template>

<style lang="scss">
  .button-toggle {
    padding: 9px 13px;
    display: flex;
    align-items: center;
    color: $light-text;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color .3s;

    &__icon {
      margin-right: 9px;
    }

    &__inner {
      position: relative; 
      display: flex;
      align-items: center;
      padding-right: 9px;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1px;
        height: 24px;
        background: rgba(255, 255, 255, 0.1);
      }
    }

    &__arrow {
      margin-left: 12px;
      transition: transform .3s;
    }

    &:hover {
      background-color: $dark-grey;
    }

    &--active {
      background-color: $dark-grey;

      .button-toggle__arrow {
        transform: rotate(180deg);
      }
    }
  }
</style>
