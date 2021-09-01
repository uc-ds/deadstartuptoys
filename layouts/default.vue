<template>
  <div>
    <nuxt />
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  mounted: function() {
    // prevent the add to home screen banner
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
    });
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
