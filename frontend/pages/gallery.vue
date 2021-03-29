<template>
  <div class="container">
    <HeroImage />
    <Gallery />
    <PhotoSwipe />
  </div>
</template>

<script>
import Gallery from "../components/Gallery/Gallery.vue";
import HeroImage from "../components/HeroImage/HeroImage.vue";
import PhotoSwipe from "../components/PhotoSwipe/PhotoSwipe.vue";
export default {
  components: { HeroImage, Gallery, PhotoSwipe }
};
</script>

<style></style>
