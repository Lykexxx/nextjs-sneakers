"use client";
import React from "react";
import cl from "./profile.module.scss";
import Image from "next/image";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSneakers } from "@/store";

const Profile = () => {
  const data = useSneakers((state) => state.data);
  let haveData = data.filter((item) => item.sales);

  const router = useRouter();

  return (
    <>
      <div className={cl.container}>
        <div className={cl.title}>
          <div onClick={() => router.back()}>
            <BsArrowLeftSquareFill cursor={"pointer"} size={27} />
          </div>
          <h1>Профиль</h1>
        </div>
        <div className={cl.sneakers}>
          {haveData.map((item) =>
            item.sales === true ? (
              <div key={item.id} className={cl.cart}>
                <Image width={133} height={112} src={item.img} />
                <p className={cl.cart_name}>{item.name}</p>

                <div className={cl.cart_price}>
                  <span>
                    <p className={cl.cart_price}>Цена:</p>
                    <b>{item.price.toLocaleString("ru-RU")} руб.</b>
                  </span>
                </div>
              </div>
            ) : undefined
          )}
        </div>
        {!haveData.length && 
          <div className={cl.none}>
            <Image
              src={`${process.env.basePath}/img/sadFavorite.png`}
              width={70}
              height={70}
            />
            <h2>Профиль пустой :( </h2>
            <span>Вы еще не делали покупок в нашем магазине...</span>
          </div>
        }
      </div>
    </>
  );
};

export default Profile;
