<template>
  <section id="products" class="relative product-bg">
    <div class="relative z-50">
      <div
        class="sticky top-0 pointer-events-none"
        style="z-index: 100"
      >
        <img
          src="/img/product-temple.png"
          alt=""
          class="absolute xl:block hidden z-50 w-full h-screen"
        />
        <img
          src="/img/product-temple-tab.png"
          alt=""
          class="absolute xl:hidden md:block hidden z-50 w-full h-screen"
        />
        <img
          src="/img/product-temple-mob.png"
          alt=""
          class="absolute md:hidden block z-50 w-full h-screen"
        />
      </div>
      <div
        class="
          md:flex
          hidden
          sticky
          top-0
          items-start
        "
        style="z-index: 100 !important"
      >
        <img
          src="/img/product-castle-pillar.svg"
          alt=""
          class="absolute mt-4"
        />
        <img
          src="/img/toys-label.svg"
          alt=""
          class="absolute left-1/2 right-1/2 transform -translate-x-1/2"
        />
        <img
          src="/img/product-castle-pillar.svg"
          alt=""
          class="absolute right-0 mt-4"
        />
      </div>
      <div
        class="sticky top-2/3 lg:block hidden pt-24 w-300px ml-auto mr-32"
        style="z-index: 100"
      >
        <CartDropdownComponent />
      </div>
      <div
        class="md:hidden flex sticky top-0 w-full justify-center"
        style="z-index: 100"
      >
        <img src="/img/toys-label.svg" alt="" class="absolute" />
      </div>
      <div
        v-if="$store.state.addedToCart.length !== 0"
        class="lg:hidden flex absolute bottom-0 w-full justify-center"
        style="z-index: 100"
      >
        <CartDropdownComponent />
      </div>
      <div
        class="
          md:w-full
          sm:w-600px
          w-300px
          mx-auto
          flex flex-wrap
          md:px-0
          sm:px-16
          px-10
          pb-36
          sticky
          xl:pt-0
          lg:pt-20
          md:pt-52
          pt-32
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
