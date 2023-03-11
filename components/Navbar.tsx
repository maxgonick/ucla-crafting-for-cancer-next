import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image'

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='/'>About Us</Link>
          <Link href='/tutorials'>Beanie Tutorial</Link>
          <div>Forms</div>
          <button><Link href='/'>Contact Us</Link></button>
      </nav>
    </div>
  );
};

export default Navbar;
