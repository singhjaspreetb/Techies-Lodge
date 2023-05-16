import HeroSection from "../components/Events/Herosection";
import styles from "../style";
function Event() {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-black-800">
                <div className={`${styles.boxWidth}`}>
                    <HeroSection />
                </div>
            </div>
        </>
    );
}

export default Event;