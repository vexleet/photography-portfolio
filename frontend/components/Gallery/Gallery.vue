<template>
  <div>
    <GalleryFilters :changeFilterEvent="changeFilter" />

    <ul class="grid effect-2" id="grid">
      <li
        class="grid-item"
        v-for="(item, index) in filteredItems || items"
        :key="`${item}+${index}`"
      >
        <a>
          <img :src="`${item.imgSrc}?a=${index}`" />
        </a>
      </li>
    </ul>
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import "../../assets/js/animOnScroll";
import GalleryFilters from "../GalleryFilters/GalleryFilters.vue";

export default {
  components: {
    GalleryFilters
  },
  data() {
    return {
      items: [
        { imgSrc: "https://source.unsplash.com/random/300x600", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x300", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/900x900", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x300", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/900x900", type: "cars" },
        {
          imgSrc: "https://source.unsplash.com/random/1600x900",
          type: "nature"
        },
        { imgSrc: "https://source.unsplash.com/random/300x600", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/500x600", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x600", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x600", type: "cars" },
        {
          imgSrc: "https://source.unsplash.com/random/800x300",
          type: "nature"
        },
        {
          imgSrc: "https://source.unsplash.com/random/600x300",
          type: "nature"
        },
        {
          imgSrc: "https://source.unsplash.com/random/300x300",
          type: "nature"
        },
        {
          imgSrc: "https://source.unsplash.com/random/300x300",
          type: "nature"
        },
        {
          imgSrc: "https://source.unsplash.com/random/1600x900",
          type: "people"
        },
        { imgSrc: "https://source.unsplash.com/random/300x600", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x300", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/900x900", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/800x300", type: "cars" },
        { imgSrc: "https://source.unsplash.com/random/900x900", type: "cars" },
        {
          imgSrc: "https://source.unsplash.com/random/1600x900",
          type: "nature"
        },
        {
          imgSrc: "https://source.unsplash.com/random/300x600",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/500x600",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/800x600",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/800x600",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/800x300",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/600x300",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/300x300",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/300x300",
          type: "people"
        },
        {
          imgSrc: "https://source.unsplash.com/random/1600x900",
          type: "people"
        }
      ],
      filteredItems: null,
      anim: null
    };
  },
  mounted() {
    this.anim = new AnimOnScroll(
      document.getElementById("grid"),
      document.querySelector(".lds-spinner"),
      {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 0.2
      }
    );
  },
  methods: {
    changeFilter(type) {
      if (type === "all") {
        this.filteredItems = null;
        // setTimeout(() => {
        this.$nextTick(() => {
          this.anim._init();
        });
        // }, 100);

        return;
      }

      this.filteredItems = this.items.filter(x => x.type === type);
      // setTimeout(() => {
      this.$nextTick(() => {
        console.log(true);
        this.anim._init();
      });
      // }, 100);
    }
  }
};
</script>
