<template>
  <header :class="['header', navigationOpened && 'nav-opened']">
    <div class="header-nav" @click="navigationOpened = !navigationOpened">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <!-- <div class="header-logo"></div> -->
    <div class="header-fast_contacts">
      <p class="header-fast_contracts-email">email@someemail.com</p>
      <p class="header-fast_contracts-phone">+359894522032</p>
    </div>

    <NavigationSidebar v-if="navigationOpened" />
  </header>
</template>

<script>
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.vue";
export default {
  components: { NavigationSidebar },
  name: "Header",
  data() {
    return {
      navigationOpened: false
    };
  }
};
</script>

<style></style>
