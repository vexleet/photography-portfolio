<template>
  <div class="gallery-filters">
    <ul class="gallery-filters-items">
      <li
        class="gallery-filter-item"
        v-for="filterItem in filterItems"
        :key="filterItem.type"
        @click="changeFilterEvent(filterItem.type)"
      >
        {{ filterItem.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    changeFilterEvent: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      filterItems: [
        {
          text: "All",
          type: "all"
        },
        {
          text: "Cars",
          type: "cars"
        },
        {
          text: "Nature",
          type: "nature"
        },
        {
          text: "People",
          type: "people"
        }
      ]
    };
  }
};
</script>

<style></style>
