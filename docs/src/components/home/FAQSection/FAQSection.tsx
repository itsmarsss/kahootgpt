import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="section" id="faq">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                FAQ
            </motion.h2>
            <div className="faq-grid">
                {[
                    {
                        q: "Do I need an API key?",
                        a: "Nope. v4.0 runs through our backend. No setup needed.",
                    },
                    {
                        q: "How does the free tier work?",
                        a: "You get 5 queries every week. Resets Monday at midnight. Leave a 5-star rating for +10 bonus.",
                    },
                    {
                        q: "Can I cancel anytime?",
                        a: "Yes. Cancel anytime, keep access until end of billing period.",
                    },
                    {
                        q: "Does it work with private Kahoots?",
                        a: 'Yes, if the host enables "Show questions & answers".',
                    },
                    {
                        q: "What's Auto-Hoist?",
                        a: "Premium feature that automatically hoists the correct answer. Hands-free gameplay with an auto-clicker.",
                    },
                    {
                        q: "What happens if I run out of queries?",
                        a: "You can use your own OpenAI API key (settings icon in popup), wait for the weekly Monday reset, leave a 5-star review for +10 bonus, or upgrade to a premium plan.",
                    },
                ].map((faq, i) => (
                    <motion.div
                        key={i}
                        className="faq-item"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                        <motion.div
                            className="faq-summary"
                            onClick={() => toggleFaq(i)}
                            whileHover={{ color: "var(--color-brand)" }}
                        >
                            {faq.q}
                            <motion.span
                                animate={{
                                    rotate: openFaq === i ? 45 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                style={{ display: "inline-block" }}
                            >
                                +
                            </motion.span>
                        </motion.div>
                        <AnimatePresence>
                            {openFaq === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <motion.p
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: 0.1,
                                        }}
                                    >
                                        {faq.a}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default FAQSection;
