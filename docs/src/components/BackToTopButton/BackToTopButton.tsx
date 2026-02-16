import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import "./BackToTopButton.css";

function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showBackToTop) return null;

    return (
        <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <ChevronUp size={24} />
        </motion.button>
    );
}

export default BackToTopButton;
