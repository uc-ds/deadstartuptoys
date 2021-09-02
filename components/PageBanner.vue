<template>
  <section
    class="
      h-screen
      bg-red-400
      flex
      items-center
      relative
      banner-bg
      overflow-hidden
    "
  >
    <img
      src="/img/label.png"
      alt=""
      class="w-1/3 md:hidden block top-0 fixed z-50 left-1/2 right-1/2 -translate-x-1/2"
    />
    <img src="/img/castle.png" alt="" class="fixed z-40 h-full w-full" />
    <div class="fixed top-4 md:right-8 right-0 z-50">
      <img
        src="/img/label.png"
        alt=""
        class="ml-auto sm:w-full w-1/2 md:block hidden"
      />
      <img
        src="/img/angel-2.png"
        alt=""
        class="-mt-5 sm:w-full w-2/3 ml-auto sm:mr-0 -mr-5"
      />
    </div>

    <div class="fixed top-4 md:left-8 left-0 z-50">
      <img
        src="/img/label.png"
        alt=""
        class="sm:w-full w-1/2 md:block hidden"
      />
      <img
        src="/img/angel.png"
        alt=""
        class="-mt-5 sm:w-full w-2/3 sm:ml-0 -ml-5"
      />
    </div>
    <img
      src="/img/banner-castle-footer.svg"
      alt=""
      class="
        absolute
        bottom-0
        left-0
        right-0
        w-11/12
        mx-auto
        z-50
        md:block
        hidden
      "
    />
    <img
      src="/img/castle-footer-mob.png"
      alt=""
      class="
        absolute
        bottom-0
        left-0
        right-0
        w-full
        mx-auto
        z-50
        md:hidden
        block
      "
    />
    <div class="w-full flex flex-wrap fixed z-40 sm:px-0 px-10">
      <div class="w-full flex flex-wrap">
        <div class="w-full text-center">
          <h1
            class="
              md:text-110px
              text-56px
              recoleta-font
              text-white
              filter
              drop-shadow-text
              leading-tight
            "
          >
            Dead <br class="sm:hidden block" />
            Startup <br class="sm:hidden block" />
            Toys
          </h1>
        </div>
        <div class="w-full text-center mb-10">
          <p class="filter drop-shadow-text md:text-4xl text-xl text-white">
            Toy versions of iconic <br class="sm:hidden block" />
            failed startups
          </p>
        </div>
        <div class="w-full flex justify-center">
          <a
            class="
              btn-gradient
              text-white
              flex flex-wrap
              shadow-main
              rounded-full
              py-3
              px-8
              text-center
            "
            href="#products"
          >
            <span class="w-full text-xl mb-2">Shop now</span>
            <span class="w-full text-xl opacity-50">Limited edition</span>
          </a>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        lg:flex-nowrap
        flex-wrap
        fixed
        z-20
        w-full
        justify-between
        h-full
        overflow-y-hidden
      "
    >
      <div class="w-full relative">
        <img
          src="/img/floating-toy-1.svg"
          alt=""
          class="toy-1 absolute -top-1/2 left-40"
        />
        <img
          src="/img/floating-toy-2.svg"
          alt=""
          class="toy-2 absolute sm:left-3/4 left-1/3 -top-1/2"
        />
        <img
          src="/img/floating-toy-3.svg"
          alt=""
          class="toy-3 absolute left-1/4 -top-1/2"
        />
        <img
          src="/img/floating-toy-4.svg"
          alt=""
          class="toy-4 absolute left-1/3 -top-1/2"
        />
        <img
          src="/img/floating-toy-5.svg"
          alt=""
          class="toy-5 absolute left-1/2 -top-1/2"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class PageBanner extends Vue {
  mounted() {
    gsap.from(".toy-1", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
    });
    gsap.from(".toy-2", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 1.5,
    });
    gsap.from(".toy-3", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 2.5,
    });
    gsap.from(".toy-4", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 3.5,
    });
    gsap.from(".toy-5", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 4.5,
    });
  }
}
</script>

<style lang="scss" scoped>
.banner-bg {
  background: url("/img/clouds-bg.png") center / cover no-repeat fixed;
}
</style>
