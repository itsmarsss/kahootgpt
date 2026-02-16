import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import "./PricingSection.css";

function PricingSection() {
    return (
        <section className="section" id="pricing">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Pricing
            </motion.h2>
            <div className="pricing-grid">
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0 }}
                    whileHover={{ y: -4 }}
                >
                    <h3>Free</h3>
                    <div className="price">$0</div>
                    <div className="price-period">forever</div>
                    <ul className="pricing-features">
                        <li>
                            <CheckCircle2 size={16} /> 5 queries/week
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> Resets Monday
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> +10 bonus for rating
                        </li>
                    </ul>
                    <a
                        href="https://chrome.google.com/webstore/detail/mmnbfkefbancfkmcbfeepiiniggfaobm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        Get Started
                    </a>
                </motion.div>

                <motion.div
                    className="pricing-card featured"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                >
                    <div className="pricing-badge">Popular</div>
                    <h3>Light</h3>
                    <div className="price">$4.99</div>
                    <div className="price-period">/month</div>
                    <ul className="pricing-features">
                        <li>
                            <CheckCircle2 size={16} /> 100 queries/week
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> All features
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> Weekly reset
                        </li>
                    </ul>
                    <a
                        href="https://buy.stripe.com/eVq5kFfIC8pTelO3jj1ck07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Upgrade
                    </a>
                </motion.div>

                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ y: -4 }}
                >
                    <h3>Monthly</h3>
                    <div className="price">$9.99</div>
                    <div className="price-period">/month</div>
                    <ul className="pricing-features">
                        <li>
                            <CheckCircle2 size={16} /> Unlimited queries
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> Auto-hoist
                        </li>
                        <li>
                            <CheckCircle2 size={16} /> Priority support
                        </li>
                    </ul>
                    <a
                        href="https://buy.stripe.com/6oEeYN3XJ36437idQV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Upgrade
                    </a>
                </motion.div>
            </div>
            <motion.p
                className="section-link"
                style={{
                    marginTop: "var(--spacing-lg)",
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Want to save 25%? Check out our{" "}
                <a
                    href="https://buy.stripe.com/aFafZjbsm5dHgtW2ff1ck06"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    yearly plan ($89.99/year)
                </a>
            </motion.p>
        </section>
    );
}

export default PricingSection;
