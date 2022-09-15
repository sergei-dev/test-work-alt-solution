<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .button {
    padding: 8px 16px;
    background: $accent;
    border-radius: 8px;
    color: $white;
    font-weight: 500;
    text-align: center;
    line-height: 1.23em;
    transition: background-color .3s;

    &:hover {
      background: $green-light;
    }

    &--border {
      background: 0 0;
      border: 1px solid $grey;
      color: $dark-2;
      transition: border-color .3s, background-color .3s, color .3s;

      &:hover {
        border-color: $accent;
        background: $accent;
        color: $white;
      }
    }

    &--transparent {
      padding-left: 8px;
      padding-right: 8px;
      background: 0 0;
      color: $dark-2;
      transition: color .3s;

      &:hover {
        background: 0 0;
        color: $accent;
      }
    }

    &--add {
      position: relative;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 24px;
      font-size: 12px;
      color: $grey-2;
    }

    &__plus {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;

      &::after,
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: currentColor;
        transition: background-color .3s;
      }

      &::after {
        width: 1px;
        height: 10px;
      }

      &::before {
        width: 10px;
        height: 1px;
      }
    }

    &__icon {
      margin-right: 11px;
    }

    &--disabled {
      pointer-events: none;
      opacity: 0.4;
    }
  }
</style>
