"use client"
import Image from "next/image";
import Link from "next/link";
import { IoIosBasket } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

import cl from "./styles.module.scss";
import { useSneakers } from "@/store";

const Header = () => {

  let count = useSneakers((state) => state.count);
  const data = useSneakers((state) => state.data);
  // count = data.filter(item => item.inBasket).map(item => item.price).reduce((acc, value) => acc + parseInt(value), 0)
  // let haveBasket = data.filter(item => item.inBasket)
  // let arrBasket = haveBasket.map(item => item.price)
  // arrBasket.reduce((acc, value) => acc + parseInt(value), 0)

  return (
    <>
      <header>
        <Link href={"/"}>
          <div className={cl.header_left}>
            <Image width={40} height={40} src={`${process.env.basePath}/img/logo.png`} alt="logo"/>
            <div className="name">
              <h3>REACT SNEAKERS</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <nav>
          <ul className={cl.list}>
            <li>
              <Link href={"/basket"}>
                <IoIosBasket size={18} /> <p>{count ? (count.toLocaleString("ru-RU") + " руб.") : 'Корзина'}</p>
              </Link>
            </li>
            <li>
              <Link href={"/favorite"}>
                <CiHeart size={18} /> Избранное
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <FaUser size={18} /> Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
