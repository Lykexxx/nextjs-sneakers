"use client";
import React, { useEffect } from "react";
import cl from "../favorite/favorite.module.scss";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";
import { useSneakers } from "@/store";
import { useRouter } from "next/navigation";

const Basket = () => {
  const toggleLike = useSneakers((state) => state.toggleLike);
  const toggleBasket = useSneakers((state) => state.toggleBasket);
  const data = useSneakers((state) => state.data);
  let count = useSneakers((state) => state.count);
  let haveBasket = data.filter((item) => item.inBasket);
  let arrBasket = haveBasket.map((item) => item.price);
  count = arrBasket.reduce((acc, value) => acc + parseInt(value), 0);

  const router = useRouter();

  const handlerSales = (array, sum) => {
    let haveSales = array.forEach(item => (item.sales = true))
    data.forEach(item => (item.inBasket = false))
    sum = 0;
    console.log(sum);
  }
  

  return (
    <>
      <div className={cl.container}>
        <div className={cl.title}>
          <div onClick={() => router.back()}>
            <BsArrowLeftSquareFill cursor={"pointer"} size={27} />
          </div>
          <h1>Корзина</h1>
        </div>
        <div className={cl.sneakers}>
          {haveBasket.map((item) =>
            item.inBasket ? (
              <div key={item.id} className={cl.cart}>
                <Image width={133} height={112} src={item.img} />
                <p className={cl.cart_name}>{item.name}</p>

                <div className={cl.cart_price}>
                  <span>
                    <p className={cl.cart_price}>Цена:</p>
                    <b>{item.price.toLocaleString("ru-RU")} руб.</b>
                  </span>
                  <FaHeart
                    className={cl.like}
                    style={
                      item.like && { color: "red", transform: "scale(1.15)" }
                    }
                    onClick={() => toggleLike(item.id)}
                  />
                  <FaCheckSquare
                    onClick={() => toggleBasket(item.id)}
                    style={
                      item.inBasket && {
                        color: "#68ff84",
                        transform: "scale(1.15)",
                      }
                    }
                    size={25}
                    color="#d3d3d3"
                    cursor={"pointer"}
                  />
                </div>
              </div>
            ) : undefined
          )}
        </div>
        {haveBasket.length ? (
          <div className={cl.sale}>
            <b>Сумма: {count.toLocaleString("ru-RU")} руб.</b>
            <button onClick={() => handlerSales(haveBasket, count)}>Оплатить</button>
          </div>
        ) : undefined}
        {!haveBasket.length && 
          <div className={cl.none}>
            <Image
              src={`${process.env.basePath}/img/sadFavorite.png`}
              width={70}
              height={70}
            />
            <h2>В корзине пусто :( </h2>
            <span>Попробуйте добавить кроссовки в корзину</span>
          </div>
        }
      </div>
    </>
  );
};

export default Basket;
