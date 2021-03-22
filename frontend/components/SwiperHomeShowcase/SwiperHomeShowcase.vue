<template>
  <div class="swiper-home-showcase" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        :key="banner"
        v-for="(banner, index) in banners"
      >
        <div
          class="swiper-slide-image"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner}?sig=${index}`
          }"
        ></div>

        <div class="swiper-slide-content">
          <div class="swiper-slide-content-wrapper">
            <h4 class="swiper-slide-wrapper-title">
              Some kind of a title here
            </h4>
            <!-- TODO: Make it a link -->
            <button class="swiper-slide-wrapper-ctn">Explore Gallery</button>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-controller">
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev">Prev</div>
      <div class="swiper-button-next">Next</div>
    </div>
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
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/1600x900"
      ],
      swiperOption: {
        mousewheel: true,
        loop: true,
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
  }
};
</script>
