<template>
  <div class="container">
    <HeroImage title="About me"/>
    <TwoColumnsImageText/>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage/HeroImage.vue";
import TwoColumnsImageText from "~/components/TwoColumnsImageText/TwoColumnsImageText";
export default {
  components: {TwoColumnsImageText, HeroImage }
}
</script>
