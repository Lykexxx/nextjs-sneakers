"use client";
import React from "react";
import cl from "./favorite.module.scss";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";
import { useSneakers } from "@/store";
import { useRouter } from "next/navigation"

const Favorite = () => {
  const toggleLike = useSneakers((state) => state.toggleLike);
  const toggleBasket = useSneakers((state) => state.toggleBasket);
  const data = useSneakers((state) => state.data);
  let haveData = data.filter(item => item.like)

  const router = useRouter()

  return (
    <>
      <div className={cl.container}>
        <div className={cl.title}>
          <div onClick={() => router.back()}>
            <BsArrowLeftSquareFill cursor={"pointer"} size={27} />
          </div>
          <h1>Избранные</h1>
        </div>
        <div className={cl.sneakers}>
          {haveData.map((item) =>
            item.like === true ? (
              <div key={item.id} className={cl.cart}>
                <Image width={133} height={112} src={item.img} />
                <p className={cl.cart_name}>{item.name}</p>

                <div className={cl.cart_price}>
                  <span>
                    <p className={cl.cart_price}>Цена:</p>
                    <b>{item.price}</b>
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
            ) : (
              undefined
            )
          )}
        </div>
        {!haveData.length && 
          <div className={cl.none}>
            <Image
              src={`${process.env.basePath}/img/sadFavorite.png`}
              width={70}
              height={70}
            />
            <h2>В избранном пусто :( </h2>
            <span>Вы еще не добавляли наших кроссовок в Избранное...</span>
          </div>
        }
      </div>
    </>
  );
};

export default Favorite;
