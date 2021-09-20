<template>
  <section id="products" class="relative product-bg -mt-2 h-full 2xl:mb-20 xl:-mb-14 md:mb-16">
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
      class="pointer-events-none"
      style="z-index: 100"
    >
      <div class="absolute w-full top-0 pointer-events-none">
        <img
          src="/img/temple-2.png"
          alt=""
          class="xl:block hidden w-full h-full pointer-events-none"
        />
        <img
          src="/img/temple-3.png"
          alt=""
          class="xl:block hidden w-full h-full pointer-events-none 2xl:-mt-52"
        />
        <img
          src="/img/temple-lg.png"
          alt=""
          class="xl:hidden lg:block hidden w-full h-full pointer-events-none"
        />
        <img
          src="/img/temple-tab.png"
          alt=""
          class="lg:hidden md:block hidden w-full h-full pointer-events-none"
        />
        <img
          src="/img/temple-mob.png"
          alt=""
          class="md:hidden block w-full h-full pointer-events-none"
        />
      </div>
    </div>
    <div>
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
        <img
          src="/img/toys-label.svg"
          alt=""
          class="absolute left-1/2 right-1/2 transform -translate-x-1/2"
        />
        <img
          src="/img/product-castle-pillar.svg"
          alt=""
          class="absolute right-0 lg:block hidden mt-6"
        />
        <div
          class="absolute right-28 pointer-events-auto lg:block hidden"
          style="top: 770px"
        >
          <CartDropdownComponent />
        </div>
      </div>
      <div
        :class="positionClass"
        class="md:hidden flex w-full justify-center"
        style="z-index: 100"
      >
        <img src="/img/toys-label-mob.svg" alt="" class="absolute -mt-5" />
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
          pb-72
          sticky
          lg:pt-40
          md:pt-52
          pt-40
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
    this.$store.dispatch("updateCart", item);
  };
  public positionClass: string = "sticky";
  public pillarClass: string = "sticky top-0";

  mounted() {
    window.addEventListener("scroll", () => {
      // @ts-ignore
      if (document.scrollingElement.scrollTop > 3300) {
        this.positionClass =
          "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-96 w-full h-screen";
        this.pillarClass =
          "absolute 2xl:bottom-72 xl:bottom-60 lg:bottom-64 bottom-72 w-full h-full";
      } else {
        this.positionClass = "sticky top-0";
        this.pillarClass = "sticky top-0";
      }
    });
  }
}
</script>

<style scoped lang="scss">
.product-bg {
  background: url("/img/clouds.jpg") center / cover no-repeat fixed;
  background-position-y: 0;
}
</style>
