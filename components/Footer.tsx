import React from "react";
import { SiGroupme, SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import blackLogo from "@/public/black-logo.png";
import styles from "../styles/Footer.module.css";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <div className={styles.icons}>
        <Image src={blackLogo} alt="logo" height={65} />
        <div className={styles.socials}>
          <SiGroupme size={35} />
          <SiInstagram size={35} />
          <MdEmail size={35} />
        </div>
      </div>
      <div className={styles.credit}>
        Made with ❤️ by Maxwell Gonick with Next.js
      </div>
    </div>
  );
};

export default Footer;
