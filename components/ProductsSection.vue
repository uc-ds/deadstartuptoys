<template>
  <section id="products" class="relative product-bg">
    <div class="relative z-50">
      <div
        class="sticky top-0 w-full flex justify-center -mb-24"
        style="z-index: 100"
      >
        <img src="/img/toys-label.svg" alt="" />
      </div>
      <div
        class="
          flex flex-wrap
          md:justify-between
          justify-center
          sticky
          z-40
          top-0
          items-start
        "
      >
        <img
          src="/img/product-castle-pillar.png"
          alt=""
          class="md:block hidden"
        />
        <img
          src="/img/product-castle-pillar.png"
          alt=""
          class="md:block hidden"
        />
      </div>
      <div
        class="sticky top-2/3 z-50 w-full lg:flex hidden justify-end xl:pr-10 mt-48"
      >
        <CartDropdownComponent />
      </div>
      <div
        v-if="$store.state.addedToCart.length !== 0"
        class="
          lg:hidden
          flex
          absolute
          bottom-0
          z-50
          w-full
          justify-center
        "
      >
        <CartDropdownComponent />
      </div>
      <div
        class="
          w-full
          flex flex-wrap
          md:px-0
          sm:px-16
          px-10
          md:-mt-96
          mt-32
          md:pb-80
          pb-36
          relative
          z-40
        "
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
  background: url("/img/clouds.jpg") center / cover no-repeat;
  background-position-y: 0;
}

@media only screen and (max-width: 760px) {
  .product-bg {
    background: url("/img/clouds-mob.jpg") center / cover no-repeat !important;
    background-position-y: 0 !important;
  }
}
</style>
