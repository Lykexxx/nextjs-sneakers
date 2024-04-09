import Image from "next/image";
import data from "@/data/data";
import React from "react";
import cl from "./styles.module.scss";
import { CiSquarePlus } from "react-icons/ci";


const Sneakers = () => {
  return (

    

    <div className={cl.container}>
      {data.map((item) => (
        <div className={cl.cart}>
          <Image width={133} height={112} src={item.img} />
          <p className={cl.cart_name}>{item.name}</p>

          <div className={cl.cart_price}>
            <span>
              <p className={cl.cart_price}>Цена:</p>
              <b>{item.price}</b>
            </span>
            <CiSquarePlus size={32} color="#d3d3d3" cursor={"pointer"}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sneakers;
