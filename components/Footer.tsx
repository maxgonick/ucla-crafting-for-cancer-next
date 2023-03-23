import React from "react";
import { SiGroupme, SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import blackLogo from "@/public/black-logo.png";
import styles from "../styles/Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.icons}>
        <Image src={blackLogo} alt="logo" height={65} />
        <SiGroupme size={30} />
        <SiInstagram size={30} />
        <MdEmail size={30} />
      </div>
      <div className={styles.credit}>
        Made with ❤️ by Maxwell Gonick with Next.js
      </div>
    </div>
  );
};

export default Footer;
