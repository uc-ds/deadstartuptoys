<template>
  <div
    class="
      min-h-580px
      h-full
      md:w-400px
      w-full
      rounded-t-full rounded-b-20px
      flex flex-wrap
      overflow-hidden
    "
  >
    <div
      class="w-full rounded-t-full item-bg flex flex-wrap items-start pt-8 px-4"
    >
      <div class="w-full flex justify-center items-center space-x-3">
        <p class="text-sm text-black opacity-50">{{ productFrom }}</p>
        <img src="/img/death-icon.svg" alt="" />
        <p class="text-sm text-black opacity-50">{{ productTo }}</p>
      </div>
      <div class="w-full flex justify-center my-5">
        <img :src="`/img/toy-logos/${productName}`" alt="" />
      </div>
      <div class="w-full flex justify-center">
        <img :src="`/img/toys/${productImg}`" alt="" />
      </div>
    </div>
    <div class="w-full bg-white rounded-b-20px px-4 pt-5 flex flex-wrap">
      <div class="w-full">
        <fieldset class="border pb-3 pt-2 rounded-20px">
          <legend class="text-sm text-black opacity-50 px-4">
            Cause Of Death
          </legend>
          <p class="md:text-xl text-lg">{{ causeOfDeath }}</p>
        </fieldset>
      </div>
      <div
        class="
          mb-3
          w-full
          flex
          md:flex-nowrap
          flex-wrap
          justify-between
          items-center
          md:space-x-2
        "
      >
        <button
          class="
            md:my-0
            my-2
            outline-none
            focus:outline-none
            btn-gradient
            px-8
            rounded-full
            text-white
            md:text-xl
            text-lg
            flex
            items-center
            md:w-auto
            w-full
            justify-center
            h-16
            truncate
          "
          @click="clickCart"
        >
          Add to cart
          <span class="opacity-50 ml-2">{{ productPrice }}</span>
        </button>
        <button
          class="
            outline-none
            focus:outline-none
            btn-gradient-secondary
            px-10
            border border-secondary
            text-secondary
            opacity-50
            flex
            items-center
            rounded-full
            md:w-auto
            w-full
            justify-center
            h-16
          "
        >
          Story
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductCard",
  props: {
    productFrom: String,
    productTo: String,
    productName: String,
    productImg: String,
    causeOfDeath: String,
    productPrice: Number,
  },
  methods: {
    clickCart() {
      // @ts-ignore
      this.$emit("onCartClick");
    },
  },
};
</script>

<style scoped lang="scss">
.item-bg {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 48.95%),
    url("/img/item-bg.png") center / cover no-repeat;
}
</style>
