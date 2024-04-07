import Image from "next/image";
import Link from "next/link";
import { IoIosBasket } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import cl from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <Link href={"/"}>
          <div className={cl.header_left}>
            <Image width={40} height={40} src="./img/logo.png" alt="logo"/>
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
                <IoIosBasket size={18} /> 1205 руб.
              </Link>
            </li>
            <li>
              <Link href={"/favorite"}>
                <CiHeart size={18} /> Закладки
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
