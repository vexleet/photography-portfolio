<template>
  <div>
    <ul class="grid effect-2" id="grid">
      <li
        class="grid-item"
        v-for="(item, index) in items"
        :key="`${item}+${index}`"
      >
        <a>
          <img :src="`${item}?a=${index}`" />
        </a>
      </li>
    </ul>

    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
      <div class="pswp__bg"></div>

      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">
        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>

            <button
              class="pswp__button pswp__button--share"
              title="Share"
            ></button>

            <button
              class="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>

            <button
              class="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>

            <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>

          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>

          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>

          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/js/animOnScroll";

export default {
  components: {
    // VueMasonryGallery
  },
  data() {
    return {
      items: [
        "https://source.unsplash.com/random/300x600",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/900x900",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/900x900",
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/300x600",
        "https://source.unsplash.com/random/500x600",
        "https://source.unsplash.com/random/800x600",
        "https://source.unsplash.com/random/800x600",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/600x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/300x600",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/900x900",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/900x900",
        "https://source.unsplash.com/random/1600x900",
        "https://source.unsplash.com/random/300x600",
        "https://source.unsplash.com/random/500x600",
        "https://source.unsplash.com/random/800x600",
        "https://source.unsplash.com/random/800x600",
        "https://source.unsplash.com/random/800x300",
        "https://source.unsplash.com/random/600x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/1600x900"
      ],
      photoswipe: null
    };
  },
  mounted() {
    new AnimOnScroll(document.getElementById("grid"), {
      minDuration: 0.4,
      maxDuration: 0.7,
      viewportFactor: 0.2
    });
  }
};
</script>

<style lang="scss">
/* clear fix */
.grid {
  max-width: 69em;
  list-style: none;
  margin: 30px auto;
  padding: 0;
}

.grid li {
  display: block;
  float: left;
  padding: 7px;
  width: 33%;
  opacity: 0;
}

.grid li.shown,
.no-js .grid li,
.no-cssanimations .grid li {
  opacity: 1;
}

.grid li a,
.grid li img {
  outline: none;
  border: none;
  display: block;
  max-width: 100%;
}

.grid.effect-2 li.animate {
  -webkit-transform: translateY(200px);
  transform: translateY(200px);
  -webkit-animation: moveUp 0.65s ease forwards;
  animation: moveUp 0.65s ease forwards;
}

@-webkit-keyframes moveUp {
  0% {
  }
  100% {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}

@keyframes moveUp {
  0% {
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
