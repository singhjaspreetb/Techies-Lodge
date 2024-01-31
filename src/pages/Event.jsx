import HeroSection from "../components/Events/Herosection";
import styles from "../style";
import CTA from "../components"
function Event() {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-black-800">
                <div className={`${styles.boxWidth}`}>
                    <HeroSection />
                </div>
            </div>

            {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <CTA />
                </div>
            </div> */}
        </div >
    );
}

export default Event;