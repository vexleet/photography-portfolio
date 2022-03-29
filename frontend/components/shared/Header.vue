<template>
  <div class="header-wrapper">
    <header :class="['header', navigationOpened && 'nav-opened']">
      <div class="header-nav" @click="navigationOpened = !navigationOpened">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <!-- <div class="header-logo"></div> -->
      <div class="header-get_in_touch">
        <NuxtLink to="/contact">
          <button class="button-get_in_touch">Get In Touch</button>
        </NuxtLink>
      </div>
      <!-- <div class="header-fast_contacts">
      <p class="header-fast_contracts-email">email@someemail.com</p>
      <p class="header-fast_contracts-phone">+359894522032</p>
    </div> -->
    </header>
    <NavigationSidebar v-if="navigationOpened" />
  </div>
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
