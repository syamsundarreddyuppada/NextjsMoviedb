import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Search } from "@mui/icons-material";
import styles from "../styles/header.module.scss";
import { deleteCookie, getCookie } from "cookies-next";
import { debounce } from "lodash";

import Link from "next/link";
import { useRouter } from "next/router";

function Header({ searchterm, setSearchterm }) {
  const cookieExists = getCookie("token");
  const [rendered, setRendered] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    router.push("/login");
  };

  const debounceSearch = debounce(function (e) {
    setSearchterm(e.target.value);
  }, 400);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className={styles.header}>
      {cookieExists && rendered ? (
        <Link href={"/"}>
          <Image
            src={logo}
            width={120}
            height={45}
            className={styles.logoImg}
            alt="logo"
            priority
          />
        </Link>
      ) : (
        <Image
          src={logo}
          width={120}
          height={45}
          className={styles.logoImg}
          alt="logo"
          priority
        />
      )}

      {cookieExists && router.route !== "/movies/[id]" && rendered ? (
        <div className={styles.header__right}>
          <input
            type="search"
            name="searchBar"
            className={styles.header__input}
            onChange={(e) => debounceSearch(e)}
          />{" "}
          <Search className={styles.search_icon} />
          <span onClick={handleLogout}>Logout</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
