import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/public/white-logo-redone.png";
import { Lexend } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx/";

const lexend = Lexend({
  subsets: ["latin"],
});

type Props = {};

// TODO responsive design!

const Navbar = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width");
  });

  const myTestFunc = () : Boolean => {
    console.log("what")
    return true
  }

  return (
    <div className={lexend.className}>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            src={whiteLogo}
            alt="logo"
            className={styles.logo}
            height={65}
          />
        </Link>
        <div className={styles.menuicon} onClick={toggleMenu}>
          <RxHamburgerMenu onClick={}/>
        </div>
        <div className={styles.right}>
          <Link href="/" className={styles.underline}>
            About Us
          </Link>
          <Link href="/tutorial" className={styles.underline}>
            Beanie Tutorial
          </Link>
          <div className={styles.underline}>Forms</div>
          <Link href="/">
            <button className={styles.button}>Join Us!</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
