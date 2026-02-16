import SocialFloat from "../../components/SocialFloat/SocialFloat";
import Hero from "../../components/home/Hero/Hero";
import WarningBanner from "../../components/home/WarningBanner/WarningBanner";
import FeaturesSection from "../../components/home/FeaturesSection/FeaturesSection";
import PricingSection from "../../components/home/PricingSection/PricingSection";
import HowToSection from "../../components/home/HowToSection/HowToSection";
import FAQSection from "../../components/home/FAQSection/FAQSection";
import LegalSection from "../../components/home/LegalSection/LegalSection";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import "./Home.css";

function Home() {
    return (
        <div className="app">
            <SocialFloat />
            <Hero />
            <WarningBanner />
            <main>
                <FeaturesSection />
                <PricingSection />
                <HowToSection />
                <FAQSection />
                <LegalSection />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default Home;
