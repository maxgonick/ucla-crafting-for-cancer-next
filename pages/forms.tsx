import Navbar from "@/components/Navbar";
import { Lexend } from "next/font/google";
import styles from "@/styles/Forms.module.css";
import Link from "next/link";

const lexend = Lexend({
    subsets: ["latin"],
    weight: "400",
  });

const Forms = () => {
    const signIn = 'Use this form to sign in for general meetings!';
    const checkOut = 'Use this form whenever checking out any supplies (hooks, yarn)!';

    return ( 
        <div className={lexend.className}>
            <Navbar />
            <div className={styles.title}>
                <h1>Forms</h1>
            </div>
            <div className={styles.form1}>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <h2>Sign-in Forms 2022-23</h2>
                    <div style={{ whiteSpace: "pre-wrap"}}>{signIn}</div>
                </Link>  
            </div>
            <div className={styles.form2}>
                <Link href="/">
                    <h2>Supply Checkout Form</h2>
                    <div style={{ whiteSpace: "pre-wrap"}}>{checkOut}</div>
                </Link>
            </div>
        </div>
     );
}
 
export default Forms;