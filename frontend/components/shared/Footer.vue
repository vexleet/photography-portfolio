<template>
  <footer class="footer">
    <div class="footer-rights">&copy; {{ currentYear }} vexleet</div>

    <div class="footer-socials">
      <a href="https://www.facebook.com/" target="_blank">
        <fa :icon="['fab', 'facebook-f']" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <fa :icon="['fab', 'instagram']" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style></style>
