import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import { handleContactClick } from '../../utils/contact';
import '../Tutorial/Tutorial.css';

function Privacy() {
  return (
    <div className="tutorial-page">
      <div className="tutorial-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          How we handle your data
        </motion.p>
      </div>

      <main className="tutorial-content">
        <section className="tutorial-section">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At KahootGPT, we respect your privacy and are committed to protecting it. This Privacy Policy applies to our Chrome extension and describes how we collect, use, and disclose information when you use our extension.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Data Collection and Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            When you sign in to KahootGPT, we collect your email address to create and manage your account. We do not track your browsing activities or collect any personal information beyond what is necessary for the service to function.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Email Communications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            We use your email address to send transactional emails necessary for the service, such as sign-in verification links. We may also send occasional service-related communications, such as important updates or changes to the extension. We will not send marketing or promotional emails without your explicit consent.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Third-party Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            KahootGPT uses third-party payment processing services like Stripe to process payment transactions for our paid plans. These services may collect and store data from you in accordance with their own privacy policies. We do not have access to, nor do we control, the information that these third-party services may collect from you.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Data Storage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Your email address and account information are stored securely on our servers. KahootGPT may also store configuration choices on your local computer to enhance your user experience. Local configuration data is not shared with any third-party services.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Changes to this Policy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            We may update this Privacy Policy from time to time, and the latest version will be posted on our website. We encourage you to review this policy periodically to stay informed of any changes.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Quick access to third-party resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Stripe Privacy Policy: <a href="https://stripe.com/en-ca/legal/privacy-center" target="_blank" rel="noopener noreferrer">https://stripe.com/en-ca/legal/privacy-center</a><br />
            Stripe Terms of Service: <a href="https://stripe.com/en-ca/legal/end-users" target="_blank" rel="noopener noreferrer">https://stripe.com/en-ca/legal/end-users</a>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield size={24} /> Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            If you have any questions or concerns about this Privacy Policy, please contact us at <a onClick={handleContactClick}>&#x69;&#x74;&#x73;&#x6D;&#x61;&#x72;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x40;&#x70;&#x72;&#x6F;&#x74;&#x6F;&#x6E;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</a>.
          </motion.p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Privacy;
