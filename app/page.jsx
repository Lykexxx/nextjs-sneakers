"use client";
import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import cl from "./page.module.scss";
import React, { useState } from "react";
import Sneakers from "@/components/Sneakers/Sneakers";
import { useSneakers } from "@/store";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSneakers();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts =
    searchQuery.trim() !== ""
      ? data.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <main className={cl.main}>
      <div className={cl.prev}>
        <img
          fill
          src={`${process.env.basePath}/img/prev.png`}
          alt="prev"
        />
      </div>
      <div className={cl.title}>
        <h1>Все кроссовки</h1>
        <div className={cl.search}>
          <SlMagnifier />
          <input
            value={searchQuery}
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Поиск..."
          />
          <div
            className={`${cl.searchResults} ${
              filteredProducts.length > 0 ? `${cl.searchResultsShow}` : ""
            }`}
          >
            <ul className={cl.ul}>
              {filteredProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Sneakers />
    </main>
  );
};

export default Page;
