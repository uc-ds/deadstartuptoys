<template>
  <section class="relative md:pb-0 pb-40">
    <img src="/img/temple-topbar.png" alt="" class="w-full xl:block hidden" />
    <img
      src="/img/temple-topbar-lg.png"
      alt=""
      class="w-full xl:hidden lg:block hidden"
    />
    <img
      src="/img/temple-topbar-tab.png"
      alt=""
      class="w-full lg:hidden md:block hidden -mb-2"
    />
    <img
      src="/img/temple-topbar-mob.png"
      alt=""
      class="w-full md:hidden block -mb-2"
    />
    <div
      :class="positionClass"
      class="pointer-events-none max-h-screen"
      style="z-index: 100"
    >
      <div class="absolute w-full top-0">
        <img
          src="/img/temple-2.png"
          alt=""
          class="xl:block hidden w-full h-full"
        />
        <img
          src="/img/temple-3.png"
          alt=""
          class="xl:block hidden w-full h-full -mt-20"
        />
        <img
          src="/img/temple-lg.png"
          alt=""
          class="xl:hidden lg:block hidden w-full h-full"
        />
        <img
          src="/img/temple-tab.png"
          alt=""
          class="lg:hidden md:block hidden w-full h-full"
        />
        <img
          src="/img/temple-mob.png"
          alt=""
          class="md:hidden block w-full h-full"
        />
      </div>
    </div>
    <div class="absolute top-4 lg:right-20 right-0" style="z-index: 150">
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
    <div class="absolute top-4 lg:left-20 left-0" style="z-index: 150">
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
    <div
      :class="pillarClass"
      class="md:block hidden max-h-screen w-full pointer-events-none"
      style="z-index: 110 !important"
    >
      <img
        src="/img/product-castle-pillar.svg"
        alt=""
        class="absolute lg:block hidden mt-6"
      />
      <div
        class="absolute right-28 pointer-events-auto lg:block hidden"
        style="top: 620px"
      >
        <CartDropdownComponent />
      </div>
      <img
        src="/img/back-img.svg"
        alt=""
        @click="goBack"
        class="
          absolute
          left-1/2
          right-1/2
          transform
          -translate-x-1/2
          pointer-events-auto
          cursor-pointer
        "
      />
      <img
        src="/img/product-castle-pillar.svg"
        alt=""
        class="absolute right-0 lg:block hidden mt-6"
      />
    </div>
    <div
      v-if="$store.state.addedToCart.length !== 0"
      class="lg:hidden flex absolute bottom-0 w-full justify-center"
      `
      style="z-index: 62"
    >
      <CartDropdownComponent />
    </div>
    <div :class="positionClass" class="md:hidden block" style="z-index: 110">
      <img
        src="/img/back-img.svg"
        alt=""
        @click="goBack"
        class="
          absolute
          left-1/2
          right-1/2
          transform
          -translate-x-1/2
          pointer-events-auto
          cursor-pointer
        "
      />
    </div>
    <div
      id="product"
      class="flex flex-wrap relative 2xl:pb-20 lg:pb-56 md:pb-52 pb-20 pt-40"
      style="z-index: 60"
    >
      <div class="w-full lg:px-0 md:px-6 px-10">
        <div
          class="
            md:w-360px
            w-full
            product-bg
            mx-auto
            flex flex-wrap
            rounded-t-full
            py-10
          "
        >
          <div class="w-full flex justify-center items-center space-x-3">
            <p class="text-sm text-black opacity-50">2016</p>
            <img src="/img/death-icon.svg" alt="" />
            <p class="text-sm text-black opacity-50">2017</p>
          </div>
          <div class="w-full flex justify-center my-5">
            <img src="/img/toy-logos/logo-1.svg" alt="" />
          </div>
          <div class="w-full flex justify-center">
            <img src="/img/toys/toy-1.png" alt="" />
          </div>
        </div>
      </div>
      <div
        class="md:w-360px w-full lg:px-6 md:px-6 px-10 mx-auto flex flex-wrap"
      >
        <div class="w-full -mt-8">
          <button
            class="
              btn-gradient
              outline-none
              focus:outline-none
              items-center
              h-16
              rounded-full
              text-center text-white text-xl
              w-full
            "
            @click="addToCart"
          >
            Add to cart <span class="opacity-50 ml-2">$59.99</span>
          </button>
        </div>
        <div class="w-full flex md:flex-nowrap flex-wrap my-4 md:space-x-4">
          <div class="md:w-1/2 w-full">
            <fieldset
              class="
                border border-black-light
                rounded-20px
                text-center
                h-100px
                flex
                items-center
                justify-center
              "
            >
              <legend class="uppercase text-black opacity-50 px-2 text-sm">
                toy specs
              </legend>
              <p class="text-black opacity-90 text-sm">
                Weight: 122g <br />
                Size: 52x52x89mm Material: PVC
              </p>
            </fieldset>
          </div>
          <div class="md:w-1/2 w-full md:my-0 my-5">
            <fieldset
              class="
                border border-black-light
                rounded-20px
                text-center
                h-100px
                flex
                items-center
                justify-center
              "
            >
              <legend class="uppercase text-black opacity-50 px-2 text-sm">
                startup specs
              </legend>
              <p class="text-black opacity-90 text-sm">
                Lifespan: 1 year <br />
                Funding: $120M <br />
                Units shipped: ~2-3k <br />
                Retail Price: $200
              </p>
            </fieldset>
          </div>
        </div>
        <div class="w-full">
          <img src="/img/product-image.png" alt="" />
          <img src="/img/product-image-2.png" alt="" class="my-6" />
        </div>
        <div class="w-full">
          <p class="text-center text-sm text-black opacity-50 uppercase mb-4">
            the story
          </p>
          <p class="text-xl text-black opacity-90">
            Juicero was a company that made a device that was marketed as a
            fruit and vegetable juicer but was revealed to extrat juice from
            pre-processed packets.
            <br />
            <br />
          </p>
          <p class="text-black opacity-90">
            The $400 Wi-Fi-connected juicer, billed by company founder Doug
            Evans as "The first at home cold-pressed juicing system," promised
            conveniece. Wellnes, A world where a glass of fresh juice in the
            morning didn't require you to squeeze pulpy citrus between your bare
            hands like monkey. <br />
            <br />
            It was as simple as pulling out a "produce pack" (a sachet of
            prechopped fruits and vegetables), securing it between the juicero's
            flat squeezing plates and pressing a button to get instant
            cold-pressed juice.
          </p>
        </div>
        <div class="w-full my-6">
          <img src="/img/product-image-3.png" alt="" />
        </div>
        <div class="w-full">
          <p class="text-black opacity-90">
            I'm not saying we have to stop innovating or cut the tech out of our
            lives. But I also didn't ask for the perfect storm we've somehow
            woken up in: a Silicon Valley amalgam of tech-bro babysitting,
            post-Goop wellness and the internet-of-spinach. <br />
            <br />
            Let me live a simple life. Let me get back to nature. <br />
            Let me squeeze fruit with my damn, dirt ape-hands.
          </p>
        </div>
        <div class="w-full mt-6">
          <button
            class="
              btn-gradient
              outline-none
              focus:outline-none
              items-center
              h-16
              rounded-full
              text-center text-white text-xl
              w-full
              mb-3
            "
            @click="addToCart"
          >
            Add to cart <span class="opacity-50 ml-2">$59.99</span>
          </button>
          <button
            class="
              btn-gradient-secondary
              outline-none
              focus:outline-none
              items-center
              h-16
              rounded-full
              text-center text-xl
              w-full
              text-secondary
            "
            @click="goBack"
          >
            <span class="opacity-50">Back to overview</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      positionClass: "sticky",
      pillarClass: "sticky top-0",
    };
  },
  mounted() {
    // @ts-ignore
    if (document.scrollingElement.scrollTop > 1530) {
      // @ts-ignore
      this.positionClass =
        "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
      // @ts-ignore
      this.pillarClass =
        "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
    } else {
      // @ts-ignore
      this.positionClass = "sticky top-0";
      // @ts-ignore
      this.pillarClass = "sticky top-0";
    }
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1500) {
        // @ts-ignore
        if (document.scrollingElement.scrollTop > 1400) {
          // @ts-ignore
          this.positionClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
          // @ts-ignore
          this.pillarClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
        } else {
          // @ts-ignore
          this.positionClass = "sticky top-0";
          // @ts-ignore
          this.pillarClass = "sticky top-0";
        }
      } else if (window.innerWidth > 600) {
        // @ts-ignore
        if (document.scrollingElement.scrollTop > 1570) {
          // @ts-ignore
          this.positionClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
          // @ts-ignore
          this.pillarClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
        } else {
          // @ts-ignore
          this.positionClass = "sticky top-0";
          // @ts-ignore
          this.pillarClass = "sticky top-0";
        }
      } else {
        // @ts-ignore
        if (document.scrollingElement.scrollTop > 1700) {
          // @ts-ignore
          this.positionClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
          // @ts-ignore
          this.pillarClass =
            "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-60 w-full h-full";
        } else {
          // @ts-ignore
          this.positionClass = "sticky top-0";
          // @ts-ignore
          this.pillarClass = "sticky top-0";
        }
      }
    });
  },
  methods: {
    goBack() {
      // @ts-ignore
      this.$router.push("/");
    },
    addToCart() {
      let item = {
        id: 1,
        productFrom: "2016",
        productTo: "2017",
        productName: "logo-1.svg",
        productImg: "toy-1.png",
        causeOfDeath: "Mockery and non-functionality",
        productPrice: 59.99,
        miniName: "juicero",
      };
      // @ts-ignore
      this.$store.dispatch("updateCart", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-bg {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 48.95%),
    url("/img/item-bg.png") center / cover no-repeat;
}
</style>
