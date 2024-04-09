import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import cl from "./page.module.scss";
import React from "react";
import Sneakers from "@/components/Sneakers/Sneakers";

const Page = () => {
  return (
    <main className={cl.main}>
      <div className={cl.prev}>
        <Image height={300} width={960} src="img/prev.png" alt="prev" />
      </div>
      <div className={cl.title}>
        <h1>Все кроссовки</h1>
        <div className={cl.search}>
          <SlMagnifier />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <Sneakers />
    </main>
  );
};

export default Page;
