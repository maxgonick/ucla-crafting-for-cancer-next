import React from "react";
import { SiGroupme, SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import blackLogo from "@/public/black-logo.png";
import styles from "../styles/Footer.module.css";
import { group } from "console";
import Link from "next/link";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = (props: Props) => {
  const groupMeLink = (): void => {
    window.open("https://www.google.com");
  };
  const instaLink = (): void => {
    window.open("https://www.instagram.com");
  };
  const emailLink = (): void => {
    window.location.assign("mailto:maxgonick@gmail.com");
  };

  return (
    <div className={props.className}>
      <div className={styles.icons}>
        <Link href="/">
          <Image src={blackLogo} alt="logo" height={65} />
        </Link>
        <div className={styles.socials}>
          <SiGroupme
            size={35}
            role="button"
            tabIndex={0}
            onClick={groupMeLink}
          />
          <SiInstagram
            size={35}
            role="button"
            tabIndex={0}
            onClick={instaLink}
          />
          <MdEmail size={35} role="button" tabIndex={0} onClick={emailLink} />
        </div>
      </div>
      <div className={styles.credit}>
        Made with ❤️ by{" "}
        <a href="https://github.com/maxgonick" className={styles.reset}>
          Maxwell Gonick
        </a>{" "}
        with Next.js
      </div>
    </div>
  );
};

export default Footer;
