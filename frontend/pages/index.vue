<template>
  <div class="container">
    <SwiperHomeShowcase />
  </div>
</template>

<script>
import SwiperHomeShowcase from "../components/SwiperHomeShowcase/SwiperHomeShowcase.vue";
export default {
  components: { SwiperHomeShowcase }
};
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Mukta-ExtraLight", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
