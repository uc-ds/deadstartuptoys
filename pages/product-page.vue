<template>
  <section class="relative">
    <div class="sticky top-0 z-50 bg-transparent">
      <img
        src="/img/product-temple.png"
        alt=""
        class="absolute xl:block hidden z-50"
      />
      <img
        src="/img/product-temple-tab.png"
        alt=""
        class="absolute xl:hidden md:block hidden z-50"
      />
      <img
        src="/img/product-temple-mob.png"
        alt=""
        class="absolute md:hidden block z-50 w-full"
      />
    </div>
    <div class="fixed top-4 right-0" style="z-index: 62">
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

    <div class="fixed top-4 left-0" style="z-index: 62">
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
      class="sticky top-3/4 w-full lg:flex hidden justify-end xl:pr-10"
      style="z-index: 70"
    >
      <CartDropdownComponent />
    </div>
    <div
      class="fixed top-0 z-50 w-full flex justify-center"
      style="z-index: 62"
    >
      <button
        class="bg-transparent outline-none focus:outline-none"
        @click="goBack"
      >
        <img src="/img/back-img.svg" alt="" />
      </button>
    </div>
    <div class="flex flex-wrap 2xl:pt-60 pt-36 relative" style="z-index: 60">
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
        class="
          md:w-360px
          w-full
          lg:px-0
          md:px-6
          px-10
          mx-auto
          -mt-8
          flex flex-wrap
        "
      >
        <div class="w-full">
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
        <div class="w-full flex my-4 space-x-4">
          <div class="w-1/2">
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
          <div class="w-1/2">
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

<script>
export default {
  methods: {
    goBack() {
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

      this.$store.commit("updateCart", item);
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
