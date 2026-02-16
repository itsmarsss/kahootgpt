import { motion } from "framer-motion";
import { Zap, CheckCircle2, FileText, MousePointerClick } from "lucide-react";
import "./FeaturesSection.css";

function FeaturesSection() {
    return (
        <section className="section" id="features">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Features
            </motion.h2>
            <div className="features-grid">
                {[
                    {
                        icon: Zap,
                        title: "AI Answers",
                        desc: "Get instant AI-powered answer suggestions for any Kahoot question",
                    },
                    {
                        icon: CheckCircle2,
                        title: "Auto-Highlight",
                        desc: "Automatically highlights the best answer on the game screen",
                    },
                    {
                        icon: FileText,
                        title: "File Upload",
                        desc: "Upload study materials for context-aware answers",
                    },
                    {
                        icon: MousePointerClick,
                        title: "Auto-Hoist",
                        desc: "Premium feature: automatically hoists the correct answer",
                    },
                ].map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                    >
                        <div className="feature-icon">
                            <feature.icon />
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;
