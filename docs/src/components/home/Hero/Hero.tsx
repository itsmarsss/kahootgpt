import { motion } from "framer-motion";
import { Chrome, Globe, Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
    return (
        <header className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.img
                    src="https://kahootgpt.itsmarsss.com/icon-128.png"
                    alt="KahootGPT"
                    className="hero-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    KahootGPT
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    AI-powered Kahoot assistant
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="https://chrome.google.com/webstore/detail/mmnbfkefbancfkmcbfeepiiniggfaobm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-chrome"
                    >
                        <Chrome size={18} />
                        Chrome
                    </a>
                    <a
                        href="https://addons.mozilla.org/firefox/addon/kahootgpt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-firefox"
                    >
                        <Globe size={18} />
                        Firefox
                    </a>
                </motion.div>

                <motion.p
                    className="hero-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Sparkles size={16} />
                    Free to start • 5 queries/week
                </motion.p>
            </motion.div>
        </header>
    );
}

export default Hero;
