import React from 'react'
import styles from "../styles/Header.module.css"
import Link from 'next/link'
function Header() {
    return (
        <nav className={styles.navbar__container}>
           <h1>Places.js</h1> 
           <Link href="http://rudhrajoshi.com">@rudrajoshi</Link>
        </nav>
    )
}

export default Header
