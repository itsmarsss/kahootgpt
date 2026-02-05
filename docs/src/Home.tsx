import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Chrome,
    Globe,
    Zap,
    FileText,
    MousePointerClick,
    CheckCircle2,
    Github,
    Youtube,
    MessageCircle,
    ChevronUp,
    Star,
    Shield,
    Sparkles,
} from "lucide-react";

function Home() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleContactClick = () => {
        const email = "itsmarzzzzzz@protonmail.com";
        const encodedEmail = encodeURIComponent(email);
        window.location.href = `mailto:${encodedEmail}`;
    };

    return (
        <div className="app">
            {/* Social Links */}
            <div className="social-float">
                <a
                    href="https://www.youtube.com/@itsmarsss"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                >
                    <Youtube size={20} />
                </a>
                <a
                    href="https://github.com/itsmarsss/kahootgpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://discord.gg/K8hgFHWeJQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Discord"
                >
                    <MessageCircle size={20} />
                </a>
            </div>

            {/* Hero Section */}
            <header className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.img
                        src="/logo128.png"
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
                            href="https://chrome.google.com/webstore/detail/kahootgpt-kahoot-%20-chatgp/mmnbfkefbancfkmcbfeepiiniggfaobm"
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

            {/* Warning Banner */}
            <div className="warning-banner">
                <Shield size={20} />
                <div>
                    <div>
                        <strong>Disclaimer:</strong> Not affiliated with Kahoot!
                        AS.
                    </div>
                    <div>Host must enable "Show questions & answers".</div>
                </div>
            </div>

            <main>
                {/* Features Section */}
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
                                title: "Auto-Tap",
                                desc: "Premium feature: automatically clicks the correct answer",
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

                {/* Pricing Section */}
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
                                    <CheckCircle2 size={16} /> +10 bonus for
                                    rating
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
                                    <CheckCircle2 size={16} /> Auto-tap
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

                {/* How to Use */}
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

                {/* FAQ */}
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
                                q: "What's Auto-Tap?",
                                a: "Premium feature that automatically clicks the correct answer. Hands-free gameplay.",
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

                {/* Contributing */}
                <section className="section" id="about">
                    <div className="about-grid">
                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>
                                <Star size={20} /> Contributing
                            </h3>
                            <p>Open source under GNU GPL v3.0</p>
                            <p>PRs welcome!</p>
                            <a
                                href="https://github.com/itsmarsss/kahootgpt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-sm"
                            >
                                <Github size={16} /> View on GitHub
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Legal */}
                <section className="section legal" id="legal">
                    <h3>Privacy & Legal</h3>
                    <p>
                        No data collection. No tracking. Config stored locally.
                    </p>
                    <p>
                        <Link to="/privacy">Privacy Policy</Link> •{" "}
                        <Link to="/terms">Terms of Service</Link> •{" "}
                        <Link to="/license">License (GPL v3.0)</Link>
                    </p>
                    <p>
                        <strong>Contact:</strong>{" "}
                        <a onClick={handleContactClick}>
                            &#105;&#116;&#115;&#109;&#97;&#114;&#122;&#122;&#122;&#122;&#122;&#122;&commat;&#112;&#114;&#111;&#116;&#111;&#110;&#109;&#97;&#105;&#108;&period;&#99;&#111;&#109;
                        </a>
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>KahootGPT v4.0.0 • Not affiliated with Kahoot! AS</p>
                <p>
                    <Link to="/privacy">Privacy</Link> •{" "}
                    <Link to="/terms">Terms</Link> •{" "}
                    <Link to="/license">License</Link> • Made by{" "}
                    <a
                        href="https://github.com/itsmarsss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Marsss
                    </a>
                </p>
            </footer>

            {/* Back to Top */}
            {showBackToTop && (
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
            )}
        </div>
    );
}

export default Home;
