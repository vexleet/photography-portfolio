<template>
  <div>
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
        />
      </div>
      <div class="grid-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeDefaultUI from "photoswipe/dist/photoswipe-ui-default";
// import VueMasonryGallery from "vue-masonry-gallery"
import Masonry from "masonry-layout";

export default {
  components: {
    // VueMasonryGallery
  },
  data() {
    return {
      items: [
        "https://source.unsplash.com/random/300x600",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300",
        "https://source.unsplash.com/random/300x300"
      ],
      photoswipe: null
    };
  },
  mounted() {
    setTimeout(() => {
      var grid = document.querySelector(".grid");
      var msnry;

      // init Isotope after all images have loaded
      msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true
      });
    }, 5000);
    return;
    document.querySelectorAll("#gallery figure").forEach(el => {
      const link = el.querySelector("a");
      const item = {
        src: link.getAttribute("href"),
        w: link.getAttribute("data-width"),
        h: link.getAttribute("data-height")
      };

      this.items.push(item);
    });

    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("click", event => {
        event.preventDefault();
        const pswp = document.querySelector(".pswp");
        const gallery = new PhotoSwipe(
          pswp,
          PhotoSwipeDefaultUI,
          this.items,
          {}
        );

        gallery.init();
      });
    });
  }
};
</script>

<style>
.grid {
  background: #ddd;
}

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  width: 33.333%;
}

.grid-item {
  float: left;
}

.grid-item img {
  display: block;
  max-width: 100%;
}
</style>
