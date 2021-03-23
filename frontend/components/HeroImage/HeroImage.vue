<template>
  <div
    class="hero"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`
    }"
  >
    <div class="hero-inner">
      <h1 class="hero-inner-title">Gallery</h1>
      <!-- <a href="https://example.com/" class="btn">Go ahead...</a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroImage: "https://source.unsplash.com/random/1600x900"
    };
  }
};
</script>

<style></style>
