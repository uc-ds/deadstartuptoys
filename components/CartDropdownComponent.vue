<template>
  <div
    class="w-300px h-full relative inline-block cool-transition"
    :class="toggleMenu ? '' : 'overflow-hidden'"
  >
    <img src="/img/cart.png" alt="" class="ml-auto relative z-50 -mb-4"/>
    <button
      class="relative w-full flex h-20 items-center z-40"
      @click="toggleMenu = !toggleMenu"
    >
      <img src="/img/dropdown-img.png" alt="" class="absolute w-full h-full" />
      <div class="relative z-20 flex justify-center w-full space-x-4">
        <img src="/img/cart-heading.png" alt="" />
        <div class="indicator-bg w-7 h-7 flex items-center justify-center">
          <span class="text-xl filter drop-shadow-text-dense text-shadow">{{
            $store.state.addedToCart.length
          }}</span>
        </div>
      </div>
    </button>
    <div
      :class="toggleMenu ? 'block' : 'hidden'"
      class="
        bg-white
        shadow-main
        border border-black-light
        rounded-t-xl
        w-260px
        mx-auto
        py-3
        px-4
        cool-transition
        absolute
        bottom-20
        left-1/2
        right-1/2
        -translate-x-1/2
      "
    >
      <div class="flex flex-wrap">
        <template v-for="(item, index) in addedItems">
          <div
            :key="index"
            class="
              w-full
              flex
              justify-between
              items-center
              border-b-2
              pr-2
              py-4
            "
          >
            <div class="flex items-center">
              <img :src="`/img/toys/${item.productImg}`" alt="" class="w-12" />
              <p class="text-black opacity-80 text-sm ml-2">
                {{ item.miniName }}
              </p>
            </div>
            <div class="flex items-center">
              <p class="text-black opacity-80 mr-2 text-sm">
                {{ "$" + item.productPrice }}
              </p>
              <button
                class="bg-transparent outline-none focus:outline-none"
                @click="delItem(index)"
              >
                <img src="/img/cross-icon.svg" alt="" />
              </button>
            </div>
          </div>
        </template>
        <div class="w-full py-4">
          <p class="text-sm text-blue text-center mb-4">
            Total amount: {{ "$" + totalAmount }}
          </p>
          <button
            class="
              btn-gradient
              text-white
              outline-none
              focus:outline-none
              w-full
              h-11
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IProductCard } from "~/utils/interfaces";

@Component({})
export default class CartDropdownComponent extends Vue {
  public addedItems: IProductCard[] = this.$store.state.addedToCart;
  public totalAmount: string = "";
  public toggleMenu: boolean = false;

  public mounted() {
    let amountInTotal: any = 0;
    this.addedItems.forEach((item: IProductCard) => {
      amountInTotal += item.productPrice;
    });

    this.totalAmount = amountInTotal;
  }
  public updated() {
    let amountInTotal: any = 0;
    this.addedItems.forEach((item: IProductCard) => {
      amountInTotal += item.productPrice;
    });

    this.totalAmount = amountInTotal;
  }

  public delItem = (item: string) => {
    this.$store.commit("removeItem", item);
  };
}
</script>

<style scoped lang="scss">
.indicator-bg {
  background: url("/img/indicator-bg.png");
}
</style>
