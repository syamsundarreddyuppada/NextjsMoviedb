import Image from "next/image";
import React from "react";
import logo from "../assets/images/logo.svg";
import { Search } from "@mui/icons-material";
import styles from "../styles/header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <Link href={"/"} >
        <Image src={logo} width={120} height={45} alt="logo" />
      </Link>
      <div className={styles.header__right}>
        <input
          type="search"
          name="searchBar"
          className={styles.header__input}
        />{" "}
        <Search className={styles.search_icon} />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Header;
