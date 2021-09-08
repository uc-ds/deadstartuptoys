<template>
  <section id="products" class="relative product-bg">
    <div class="relative z-50">
      <div class="sticky top-0 z-50 bg-transparent">
        <img
          src="/img/product-temple.png"
          alt=""
          class="absolute xl:block hidden z-50 w-full"
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
      <div
        class="sticky top-0 w-full flex justify-center -mb-24 2xl:pt-40 lg:pt-20"
        style="z-index: 100"
      >
        <img src="/img/toys-label.svg" alt="" class="absolute" />
      </div>
      <div
        class="
          md:flex
          hidden
          sticky
          top-0
          items-start
          lg:pt-10
          md:pt-20
        "
        style="z-index: 60"
      >
        <img
          src="/img/product-castle-pillar.svg"
          alt=""
          class="absolute md:top-28 2xl:top-36 2xl:pt-10 pt-5"
        />
        <img
          src="/img/product-castle-pillar.svg"
          alt=""
          class="absolute right-0 md:top-28 2xl:top-36 2xl:pt-10 pt-5"
        />
      </div>
      <div
        class="sticky top-2/3 lg:flex hidden xl:pr-24 pt-24 w-full justify-end"
        style="z-index: 62"
      >
        <CartDropdownComponent />
      </div>
      <div
        v-if="$store.state.addedToCart.length !== 0"
        class="lg:hidden flex absolute bottom-0 w-full justify-center"
        style="z-index: 62"
      >
        <CartDropdownComponent />
      </div>
      <div
        class="
          sm:w-full
          w-300px
          mx-auto
          flex flex-wrap
          md:px-0
          sm:px-16
          px-10
          md:pb-0
          pb-36
          relative
          lg:pt-0
          sm:pt-44
          pt-56
        "
        style="z-index: 60"
      >
        <template v-for="toy in deadToys">
          <div :key="toy.id" class="w-full flex justify-center mb-8">
            <ProductCard
              :productFrom="toy.productFrom"
              :productTo="toy.productTo"
              :productName="toy.productName"
              :productImg="toy.productImg"
              :causeOfDeath="toy.causeOfDeath"
              :productPrice="toy.productPrice"
              @onCartClick="updateCart(toy)"
              class="text-center"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IProductCard } from "~/utils/interfaces";

@Component({})
export default class ProductsSection extends Vue {
  // @ts-ignore
  public deadToys: IProductCard[] = this.$store.state.deadToys;

  public updateCart = (item: IProductCard | any) => {
    this.$store.commit("updateCart", item);
  };
}
</script>

<style scoped lang="scss">
.product-bg {
  background: url("/img/clouds.jpg") center / cover no-repeat fixed;
  background-position-y: 0;
}
</style>
