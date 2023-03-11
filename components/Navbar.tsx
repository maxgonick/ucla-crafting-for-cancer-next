import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/public/white-logo-redone.png";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

// TODO responsive design!

const Navbar = (props: Props) => {
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
        <div className={styles.right}>
          <Link href="/" className={styles.underline}>
            About Us
          </Link>
          <Link href="/" className={styles.underline}>
            Beanie Tutorial
          </Link>
          <div className={styles.underline}>Forms</div>
          <Link href="/" className={styles.links}>
            <button className={styles.button}>Join Us!</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
