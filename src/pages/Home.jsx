import styles from "../style"
import { CTA, Hero } from "../components";

const Home = () => (
    <div>


        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <CTA />
            </div>
        </div>
    </div>
);

export default Home;
