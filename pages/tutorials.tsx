import Navbar from "@/components/Navbar";
import styles from "@/styles/Tutorials.module.css";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: "400",
  });

const Tutorial = () => {
    const introText = '\nThis quarter, we are looking for teen-sized beanies!\nCircumference 20 ½" -22" height 9-10"'
    const crochetBasics = "Learn how to crochet with these absolute beginner's tutorials on the very basic stitches. No intros, no talking, just straight to what you need to know!"
    const simpleBeanie = "Crochet a simple beanie for any and all ages, from 0-6 months to adult sizes!"
    const tutorialText = '\n1. Slip knot\n'+
                         '2. Chain 4\n'+
                         '3. Slip stitch into the first stitch\n'+
                         '4. Create ten ½ double crochets into the ring\n'+
                         '5. Pattern: two half double crochets into each stitch (2, 2, 2, ..., 2)\n'+
                         '6. One ½ double, two ½ double alternating between each stitch (1, 2, 1, 2, 1, ..., 2)\n'+
                         '7. 1, 1, 2, 1, 1, 2, 1, 1, ..., 2\n'+
                         '8. 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, ..., 2\n'+
                         '9. 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, ..., 2 (should always end on two ½ double crochets after the last stitch)\n'+
                         '10. Once you have a nice circle, you just ½ double crochet once in every stitch all the way until long enough to be\na beanie (try it on!)\n'+
                         '11. The 7” beanie with a folded edge: this should be about 19 rows of ½ double crochets, for a total of 25 rows\n'+
                         '12. Slip stitch into the next stitch\n'+
                         '13. Tie off and weave in your ends';
    return ( 
        <div className={lexend.className}>
            <Navbar />
            <div className={styles.flat1}>
                <h1>Beanie Tutorials</h1>
                <div style={{ whiteSpace: "pre-wrap"}}>{introText}</div>  
            </div>
            <div className={styles.hov1}>
                <h2>Crochet Basics</h2>
                <div style={{ whiteSpace: "pre-wrap"}}>{crochetBasics}</div> 
            </div> 
            <div className={styles.hov2}>
                <h2>Simple Beanie Patterns</h2>
                <div style={{ whiteSpace: "pre-wrap"}}>{simpleBeanie}</div>  
            </div>
            <div className={styles.flat2}>
                <h1>Teen-sized Beanie Tutorial</h1>
                <div style={{ whiteSpace: "pre-wrap"}}>{tutorialText}</div>  
            </div>
        </div>
     );
}
 
export default Tutorial;
// @refresh reset