import { create } from "zustand";

export const useSneakers = create((set) => ({
  data: [
    {
      id: 1,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "12 999 руб.",
      img: "/img/1.jpg",
      like: false
    },
    {
      id: 2,
      name: "Мужские Кроссовки Nike Air Max 270",
      price: "12 999 руб.",
      img: "/img/2.jpg",
      like: false
    },
    {
      id: 3,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "12 999 руб.",
      img: "/img/3.jpg",
      like: false
    },
    {
      id: 4,
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: "12 999 руб.",
      img: "/img/4.jpg",
      like: false
    },
    {
      id: 5,
      name: "Мужские Кроссовки Under Armour Curry 8",
      price: "15 199 руб.",
      img: "/img/5.jpg",
      like: false
    },
    {
      id: 6,
      name: "Мужские Кроссовки Nike Kyrie 7",
      price: "11 299 руб.",
      img: "/img/6.jpg",
      like: false
    },
    {
      id: 7,
      name: "Мужские Кроссовки Jordan Air Jordan 11",
      price: "10 799 руб.",
      img: "/img/7.jpg",
      like: false
    },
    {
      id: 8,
      name: "Мужские Кроссовки Nike LeBron XVIII",
      price: "16 499 руб.",
      img: "/img/8.jpg",
      like: false
    },
    {
      id: 9,
      name: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: "13 999 руб.",
      img: "/img/9.jpg",
      like: false
    },{
      id: 10,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "8 499 руб.",
      img: "/img/10.png",
      like: false
    },{
      id: 11,
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: "8 999 руб.",
      img: "/img/11.png",
      like: false
    },{
      id: 12,
      name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      price: "11 299 руб.",
      img: "/img/12.jpg",
      like: false
    },
  ],
  count: 0,
  toggleLike: (id) => {set(state => ({
      data: state.data.map(item =>
        id === item.id ? { ...item, like: !item.like } : item
      )
    }));
  },
}));
