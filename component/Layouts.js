import React from 'react'
import Header from './Header'
import styles from "../styles/layout.module.scss"

function Layouts({children}) {
  return (
    <div className={styles.layout}>
        <header style={{zIndex:200}}>
            <Header />
        </header>
        <main className={styles.layout_main}>
            {children}
        </main>
    </div>
  )
}

export default Layouts