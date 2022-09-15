<script setup>
    import { ref, computed } from 'vue';
    import draggable from 'vuedraggable';
    import IconUpdate from '@/components/icons/IconUpdate.vue';
    import IconSearch from '@/components/icons/IconSearch.vue';
    import Button from '@/components/UI/Button.vue';
    import ColumnItem from '@/components/ColumnItem.vue';
    import Input from '@/components/UI/Input.vue';

    const props = defineProps({
        originalColumns: Array,
        isShow: {
          type: Boolean,
          required: true
        }
    })

    const search = ref('');
    const selectedColumns = ref([]);
    let originalColumnsList = ref(props.originalColumns);

    const saveDisabled = ref(true);
    const updateDisabled = ref(true);
    const clearDisabled = ref(true);

    const selectedColumn = (item) => {
      originalColumnsList.value = originalColumnsList.value.filter((column) => column.id != item.id);
      selectedColumns.value.push(item);
      saveDisabled.value = false;
    }

    const searchedColumns = computed(() => {
      return originalColumnsList.value.filter((column) => {
        return (
          column.title.toLowerCase().includes(search.value.toLowerCase()));
      });
    });

    const removeColumns = (column) => {
      selectedColumns.value = selectedColumns.value.filter((item) => item.id != column.id);
      originalColumnsList.value.push(column);
      originalColumnsList.value.sort((a, b) => a.id > b.id ? 1 : -1);
    }
</script>

<template>
  <Transition name="slide-fade">
    <div class="navigation-popup" v-if="isShow">
      <div class="navigation-popup__columns">
        <div class="navigation-popup__item">
          <div class="navigation-popup__head">
            <h3 class="navigation-popup__head-title">Columns</h3>
          </div>
          <draggable class="navigation-popup__list" 
            v-model="selectedColumns" 
            item-key="selected-columns" 
            v-if="selectedColumns.length">
            <template #item="{ element }">
              <ColumnItem :key="element.id" :id="element.id" :title="element.title" isEdit @remove="removeColumns" />
            </template>
          </draggable>
          <p class="navigation-popup__empty" v-else>No column selected</p>
        </div>
        <div class="navigation-popup__item navigation-popup__item--add">
          <div class="navigation-popup__head">
            <h3 class="navigation-popup__head-title">Add column</h3>
            <Button class="button--transparent button--add">
              <span class="button__plus"></span>
              Create custom column
            </Button>
          </div>
          <div class="navigation-popup__search-wrap">
            <Input name="search-columns" v-model="search" placeholder="Search" class="form-input--search navigation-popup__form-input">
              <div class="navigation-popup__search-btn">
                <IconSearch />
              </div>
            </Input>
            <div v-if="searchedColumns.length" class="navigation-popup__list">
              <ColumnItem v-for="column in searchedColumns" :key="column.id" :id="column.id"  :title="column.title" @click="selectedColumn(column)" :isEdit="false" />
            </div>
            <p class="navigation-popup__empty" v-else>Nothing found</p>
          </div>
        </div>
      </div>
      <footer class="navigation-popup__footer">
        <div class="navigation-popup__actions">
          <Button class="button--border navigation-popup__button" :class="{'button--disabled': saveDisabled}">
            Save as new columns
          </Button>
          <Button class="button--border navigation-popup__button" :class="{'button--disabled': updateDisabled}">
            Update current columns
          </Button>
        </div>
        <div class="navigation-popup__actions">
            <Button class="button-icon button--transparent navigation-popup__clear" :class="{'button--disabled': clearDisabled}">
              <IconUpdate class="button__icon" />Clear</Button>
            <Button>
              Apply
            </Button>
        </div>
      </footer>
    </div>
  </Transition>
</template>

<style lang="scss">
  .navigation-popup {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    max-width: 704px;
    width: 100%;
    background: $white;
    filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.08));
    border-radius: 12px;

    &__head-title {
      line-height: 1.54em;
      font-size: 13px;
    }

    &__columns {
      display: flex;

      @include response(767) {
        flex-direction: column;
      }
    }

    &__list {
      overflow-y: auto;
      max-height: 404px;
      padding-left: 6px;
      padding-right: 10px;
    }

    &__item {
      width: 50%;
      padding-top: 12px;

      &:first-child {
        border-right: 1px solid $silver;
      }

      &--add {
        padding-top: 10px;

        .navigation-popup__list {
          max-height: 368px;
          margin-top: 4px;
        }

        .navigation-popup__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .navigation-popup__empty {
          padding-left: 6px;
          padding-right: 16px;
        }
      }

      @include response(767) {
        width: 100%;
      }
    }

    &__head {
      padding: 0 16px;
      margin-bottom: 12px;
    }

    &__footer,
    &__actions {
      display: flex;
      align-items: center;

      @include response(767) {
        flex-direction: column;
      }
    }

    &__actions {
      @include response(767) {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__footer {
      padding: 11.5px 16px;
      justify-content: space-between;
      box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.04);
      border-top: 1px solid $silver;
    }

    &__button {
      margin-right: 4px;
      padding-top: 7px;
      padding-bottom: 7px;

      @include response(767) {
        margin-right: 0;
        margin-bottom: 10px;
      }

      &:last-child {
        margin-right: 0;

        @include response(767) {
          margin-bottom: 0;
        }
      }
    }

    &__clear {
      margin-right: 8px;

      @include response(767) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    &__empty {
      padding: 0 16px;
    }

    &__form-input {
      margin-left: 6px;
      margin-right: 16px;
    }

    &__search-btn {
      position: absolute;
      top: 9px;
      left: 9px;
      width: 14px;
      height: 14px;
      color: $grey-2;
    }
  }
</style>
