<template>
  <div class="two-columns-container">
    <div class="photographer-avatar">
      <img src="https://source.unsplash.com/random/400x500"/>
    </div>
    <div class="photographer-info">
      <h3 class="photographer-info-title">About me</h3>
      <p class="photographer-info-about">
        I am a creative documentary producer, currently making long-form TV shows for Channel NewsAsia in Singapore.
        I take particular interest in stories about migration, sexuality, and the creative process. Representation and inclusion are important to me.
        In a previous life (within a relatively short life) I worked at a human rights NGO in Washington DC and studied cultural politics & Latin America affairs at Georgetown University. I grew up in Singapore.
      </p>
      <div class="cta-buttons">
        <button><NuxtLink to="/gallery">My Work</NuxtLink></button>
        <button><NuxtLink to="/contact">Contact</NuxtLink></button>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>
