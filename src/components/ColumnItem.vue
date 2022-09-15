<script setup>
    import IconDrag from '@/components/icons/IconDrag.vue';
    import ButtonClose from '@/components/UI/ButtonClose.vue';

    defineProps({
        id: {
          type: Number,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        isEdit: Boolean,
    })
</script>

<template>
  <div class="column-item" @click.stop>
    <div class="column-item__draggable" v-if="isEdit">
      <IconDrag class="column-item__icon" />
    </div>
    <p class="column-item__title">{{ title }}</p>
    <ButtonClose class="column-item__close" v-if="isEdit" @click="$emit('remove', { id: id, title: title })" />
  </div>
</template>

<style lang="scss">
  .column-item {
    cursor: pointer;
    padding: 10px 9px;
    display: flex;
    align-items: center;
    transition: background-color .3s;
    border-radius: 8px;

    &__draggable {
      padding: 10px 13px 10px 9px;
      cursor: move;
    }

    &__title {
      margin: 0;
    }

    &__close {
      margin-left: auto;
      opacity: 0;
      visibility: hidden;
      transition: opacity .3s, visibility .3s;

      @include response(767) {
        opacity: 1;
        visibility: visible;
      }
    }

    &__icon {
      path {
        fill: $grey-2;
      }
    }

    &:hover {
      background-color: $silver-2;

      .column-item__close {
        opacity: 1;
        visibility: visible;
      }
    }

    &:last-child {
      margin-bottom: 20px;
    }

    &[data-draggable="true"] {
      padding: 0 9px 0 0;
    }
  }
</style>
