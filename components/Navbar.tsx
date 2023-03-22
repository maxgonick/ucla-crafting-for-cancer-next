import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/public/white-logo-redone.png";
import { Lexend } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx/";
import { debug } from "console";

const lexend = Lexend({
  subsets: ["latin"],
});

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState<Number>();
  const toggleMenu = (): void => {
    setOpen(!isOpen);
  };
  // const navbarRef = useRef<HTMLDivElement>(null);

  // const getHeight = (): void => {
  //   if (navbarRef) {
  //     const newHeight = navbarRef.current?.offsetHeight;
  //     console.log(newHeight);
  //     setHeight(newHeight);
  //   }
  // };

  // useEffect(() => {
  //   console.log("ran!");
  //   getHeight();
  // }, [isOpen]);
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
          <RxHamburgerMenu />
        </div>
        <div className={isOpen ? styles.mobileright : styles.right}>
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
