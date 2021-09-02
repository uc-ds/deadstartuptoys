import { IProductCard } from "~/utils/interfaces";

export const state = () => ({
  deadToys: [
    {
      id: 1,
      productFrom: "2016",
      productTo: "2017",
      productName: "logo-1.svg",
      productImg: "toy-1.png",
      causeOfDeath: "Mockery and non-functionality",
      productPrice: 59.99,
      miniName: "juicero",
    },
    {
      id: 2,
      productFrom: "2007",
      productTo: "2014",
      productName: "logo-2.svg",
      productImg: "toy-2.png",
      causeOfDeath: "Hubris, “Design Thinking” and tech optimism",
      productPrice: 59.99,
      miniName: "laptop",
    },
    {
      id: 3,
      productFrom: "2016",
      productTo: "2018",
      productName: "logo-3.svg",
      productImg: "toy-3.png",
      causeOfDeath: "Non-existence and fraud",
      productPrice: 59.99,
      miniName: "minilab",
    },
    {
      id: 4,
      productFrom: "2017",
      productTo: "2019",
      productName: "logo-4.svg",
      productImg: "toy-4.png",
      causeOfDeath: "Price and non-functionality",
      productPrice: 59.99,
      miniName: "Jibo Robot",
    },
    {
      id: 5,
      productFrom: "2014",
      productTo: "2019",
      productName: "logo-5.svg",
      productImg: "toy-5.png",
      causeOfDeath: "Non-delivery and the Oregon Dept. Of Justice",
      productPrice: 59.99,
      miniName: "cooler",
    },
  ],
  addedToCart: [],
});

export const mutations = {
  updateCart(state: any, item: IProductCard) {
    state.addedToCart.push(item);
  },
  removeItem(state: any, item: number) {
    state.addedToCart.splice(item, 1);
  },
};
