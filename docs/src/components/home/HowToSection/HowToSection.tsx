import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HowToSection.css";

function HowToSection() {
    return (
        <section className="section" id="how-to">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                How to Use
            </motion.h2>
            <div className="steps">
                {[
                    {
                        title: "Install the extension",
                        desc: "Download from Chrome Web Store or Firefox Add-ons",
                    },
                    {
                        title: "Join a Kahoot game",
                        desc: "Go to kahoot.it and enter your game PIN",
                    },
                    {
                        title: 'Click "Attach to Game"',
                        desc: "Open the extension popup and attach to your game",
                    },
                    {
                        title: "Get AI-generated answers",
                        desc: "Watch as answers are highlighted automatically",
                    },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        className="step"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <div className="step-number">{i + 1}</div>
                        <div className="step-content">
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.p
                className="section-link"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link to="/tutorial">Full tutorial →</Link>
            </motion.p>
        </section>
    );
}

export default HowToSection;
