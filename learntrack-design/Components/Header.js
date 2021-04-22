import React from 'react'
import MenuIcon from "../Components/Icons/menu"
import Link from "next/link"

function Header() {
    return (
        <nav style={{position:'absolute',width:"100vw",display:'flex',justifyContent:'space-between',padding:'1em 5vw',alignItems:'center'}}>
           <Link href="/"><h1 style={{fontSize:'2rem',fontWeight:800}}>RJ Track</h1></Link>
           <span>
            <MenuIcon />
            </span> 
        </nav>
    )
}

export default Header
