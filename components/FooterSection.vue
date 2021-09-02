<template>
  <footer class="md:h-450px h-500px flex items-center justify-center footer-bg">
    <div class="flex items-center space-x-6">
      <a href="#" class="filter text-lg text-white underline drop-shadow-text"
        >Support</a
      >
      <a href="#" class="filter text-lg text-white underline drop-shadow-text"
        >Term</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class FooterSection extends Vue {}
</script>

<style scoped lang="scss">
.footer-bg {
  background: url("/img/footer.png") center / cover no-repeat;
}

@media only screen and (max-width: 760px) {
  .footer-bg {
    background: url("/img/footer-mob.png") center / cover no-repeat !important;
  }
}
</style>
