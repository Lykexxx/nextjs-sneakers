"use client";
import Image from "next/image";
import React from "react";
import cl from "./styles.module.scss";
import { FaHeart } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useSneakers } from "@/store";

const Sneakers = () => {
  const toggleLike = useSneakers((state) => state?.toggleLike);
  const toggleBasket = useSneakers((state) => state?.toggleBasket);
  const data = useSneakers((state) => state?.data);

  return (
    <div className={cl.container}>
      {data?.map((item) => (
        <div key={item.id} className={cl.cart}>
          <Image width={133} height={112} src={item.img} />
          <p className={cl.cart_name}>{item.name}</p>

          <div className={cl.cart_price}>
            <span>
              <p className={cl.cart_price}>Цена:</p>
              <b>{item.price.toLocaleString('ru-RU')} руб.</b>
            </span>
            <FaHeart className={cl.like}
              style={item.like && {color: "red", transform: "scale(1.15)"}}
              onClick={() => toggleLike(item.id)}
            />
            <FaCheckSquare
              onClick={() => toggleBasket(item.id)}
              style={item.inBasket && {color: "#68ff84", transform: "scale(1.15)"}}
              size={25}
              color="#d3d3d3"
              cursor={"pointer"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sneakers;
