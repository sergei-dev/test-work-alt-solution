<script setup>
    const props = defineProps({
        name: {
          type: String,
          required: true
        },
        placeholder: String,
        modelValue: String
    })

    const emit = defineEmits(['update:modelValue'])

    const updateValue = (event) => {
        emit('update:modelValue', event.target.value)
    }
</script>

<template>
  <div class="form-input">
    <slot></slot>
    <input type="text" :name="name" :placeholder="placeholder" :value="modelValue" @input="updateValue">
  </div>
</template>

<style lang="scss">
  .form-input {
    display: block;

    input {
        width: 100%;
        display: block;
        padding: 0 9px;
        background: $white;
        border: 1px solid $silver-3;
        border-radius: 8px;
        line-height: 32px;
        height: 32px;
        color: $grey-2;
        font-weight: 400;
        font-size: 13px;
        transition: border-color .3s;

        &:focus {
            outline: none;
            border-color: $accent;
        }

        @include placeholder {
            color: $grey-2;
            font-weight: 400;
            font-size: 13px;
        }
    }

    &--search {
        position: relative;

        input {
            padding-left: 32px;
        }
    }
  }
</style>
