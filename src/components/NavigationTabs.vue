<script setup>
    import { ref } from "vue";

    import ButtonToggle from '@/components/UI/ButtonToggle.vue';
    import IconColumn from '@/components/icons/IconColumn.vue';
    import NavigationPopup from '@/components/NavigationPopup.vue';

    const originalColumns = ref([
      {
        id: 0,
        title: 'Last touch'
      },
      {
        id: 1,
        title: 'Owner'
      },
      {
        id: 2,
        title: 'Country'
      },
      {
        id: 3,
        title: 'Revenue'
      },
      {
        id: 4,
        title: 'Status'
      },
      {
        id: 5,
        title: 'Potential'
      },
      {
        id: 6,
        title: 'Round size'
      },
      {
        id: 7,
        title: 'Last touch'
      },
      {
        id: 8,
        title: 'Owner'
      },
      {
        id: 9,
        title: 'Country'
      },
      {
        id: 10,
        title: 'Revenue'
      },
      {
        id: 11,
        title: 'Status'
      },
      {
        id: 12,
        title: 'Potential'
      },
      {
        id: 13,
        title: 'Round size'
      },
      {
        id: 14,
        title: 'Last touch'
      },
      {
        id: 15,
        title: 'Owner'
      },
      {
        id: 16,
        title: 'Country'
      },
      {
        id: 17,
        title: 'Revenue'
      },
      {
        id: 18,
        title: 'Status'
      },
      {
        id: 19,
        title: 'Potential'
      },
      {
        id: 20,
        title: 'Round size'
      },
            {
        id: 21,
        title: 'Owner'
      },
      {
        id: 22,
        title: 'Country'
      },
      {
        id: 23,
        title: 'Revenue'
      },
      {
        id: 24,
        title: 'Status'
      },
      {
        id: 25,
        title: 'Potential'
      },
      {
        id: 26,
        title: 'Round size'
      }
    ]);

    const showPopup = ref(false);

    const closePopup = () => {
      showPopup.value = false;
    }
</script>

<template>
  <div class="navigation-tabs">
    <ButtonToggle class="navigation-tabs__button" :class="{'button-toggle--active': showPopup}" @click.stop="showPopup = !showPopup">
        <IconColumn class="button-toggle__icon" />
        Columns
    </ButtonToggle>
    <NavigationPopup :originalColumns="originalColumns" :isShow="showPopup" v-click-outside="closePopup" />
  </div>
</template>

<style lang="scss">
  .navigation-tabs {
    position: relative;
    padding: 8px 0;
    margin-top: 100px;

    &__button {
      position: relative;
    }
  }
</style>
