import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/layout.module.scss";
import { useRouter } from "next/router";

function Layouts({ children }) {
  const router = useRouter();

  const [searchterm, setSearchterm] = useState("");
  const modifier = { ...children };
  modifier.props = { ...modifier.props, search: searchterm };

  return (
    <div className={styles.layout}>
      {router.pathname !== "/_error" ? (
        <header style={{ zIndex: 200 }}>
          <Header searchterm={searchterm} setSearchterm={setSearchterm} />
        </header>
      ) : (
        ""
      )}
      <main className={styles.layout_main}>{modifier}</main>
    </div>
  );
}

export default Layouts;
