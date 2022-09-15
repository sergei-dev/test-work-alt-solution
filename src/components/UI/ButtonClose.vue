<template>
  <button class="button-close"></button>
</template>

<style lang="scss">
  .button-close {
    position: relative;
    width: 16px;
    height: 16px;

    &::after,
    &::before {
        content: '';
        left: 50%;
        top: 50%;
        position: absolute;
        border-radius: 8px;
        width: 1px;
        height: 9px;
        background-color: $grey-2;
        transition: background-color .3s;
    }

    &::after {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
        &::after,
        &::before {
            background-color: $accent;
        }
    }
  }
</style>
