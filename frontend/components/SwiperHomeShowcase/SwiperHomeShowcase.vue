<template>
  <div class="swiper-home-showcase" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <div
          class="swiper-slide-image"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner}`
          }"
        ></div>
        <!-- <img class="swiper-slide-image" :src="banner" /> -->
        <div class="swiper-slide-content">
          <div class="swiper-slide-content-wrapper">
            <h4 class="swiper-slide-wrapper-title">
              Some kind of a title here
            </h4>
            <button class="swiper-slide-wrapper-ctn">Explore Gallery</button>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// https://source.unsplash.com/random/1600x900

export default {
  data() {
    return {
      banners: [
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/1600x900"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    this.mySwiper.slideTo(3, 1000, false);
  }
};
</script>
