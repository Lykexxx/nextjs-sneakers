import { create } from "zustand";

export const useSneakers = create((set) => ({
  data: [
    {
      id: 1,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: `${process.env.basePath}/img/1.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 2,
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      img: `${process.env.basePath}/img/2.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 3,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: `${process.env.basePath}/img/3.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 4,
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 12999,
      img: `${process.env.basePath}/img/4.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 5,
      name: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      img: `${process.env.basePath}/img/5.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 6,
      name: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      img: `${process.env.basePath}/img/6.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 7,
      name: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      img: `${process.env.basePath}/img/7.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 8,
      name: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      img: `${process.env.basePath}/img/8.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 9,
      name: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 13999,
      img: `${process.env.basePath}/img/9.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 10,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      img: `${process.env.basePath}/img/10.png`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 11,
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      img: `${process.env.basePath}/img/11.png`,
      like: false,
      inBasket: false,
      sales: false,
    },
    {
      id: 12,
      name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      price: 11299,
      img: `${process.env.basePath}/img/12.jpg`,
      like: false,
      inBasket: false,
      sales: false,
    },
  ],
  count: 0,
  toggleLike: (id) => {
    set((state) => ({
      data: state.data.map((item) =>
        id === item.id ? { ...item, like: !item.like } : item
      ),
    }));
  },
  toggleBasket: (id) => {
    set((state) => {
      const product = state.data.find((p) => p.id === id);
      if (product) {
        product.inBasket === false ? true : false
        if (product.inBasket) {
          state.count += product.price;
        }
      }
      return { data: [...state.data], count: state.count };
    })
  },
  checkout: () => {
    set((state) => ({
      ...state,
      data: state.data.map(product => ({
        ...product,
        sales: product.inBasket ? true : product.sales,
        inBasket: false, // Если товар был добавлен в корзину, помечаем его как находящийся в корзине
      })).filter(product => !product.inBasket),
      count: 0,
    }));
    alert('Оплата прошла успешно.')
  },
}));
