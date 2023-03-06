import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/public/white-logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Image src={whiteLogo} alt="logo" />
        <Link href="/">About Us</Link>
        <Link href="/">Beanie Tutorial</Link>
        <div>Forms</div>
        <button>
          <Link href="/">Join Us</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
