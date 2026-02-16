import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import { handleContactClick } from '../../utils/contact';
import '../Tutorial/Tutorial.css';

function Terms() {
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
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Terms and conditions for using KahootGPT
        </motion.p>
      </div>

      <main className="tutorial-content">
        <section className="tutorial-section">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            By using KahootGPT, you agree to the following terms and conditions:
          </motion.p>

          <motion.ol
            style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>KahootGPT is provided "as is" without any warranty of any kind, express or implied. We are not responsible for any damages that may arise from the use of the extension.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>You are solely responsible for your use of KahootGPT and for any content that you generate or access through the extension.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>You agree to use KahootGPT only for lawful purposes and in compliance with all applicable laws and regulations.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>We reserve the right to modify or discontinue KahootGPT at any time, without notice.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>We reserve the right to update these terms of service at any time, without notice. Your continued use of KahootGPT after any such changes will constitute your acceptance of the new terms.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>By signing in, you consent to the collection of your email address and agree to receive transactional emails (such as sign-in links) and service-related communications. Third-party services used by KahootGPT, such as Stripe, may collect additional data. Please refer to our <Link to="/privacy">Privacy Policy</Link> and their respective privacy policies for more information.</p>
            </li>
            <li style={{ marginBottom: 'var(--spacing-md)' }}>
              <p>By using KahootGPT, you agree to indemnify and hold us harmless from any claims, damages, or expenses arising out of your use of the extension.</p>
            </li>
          </motion.ol>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            If you have any questions or concerns about this Terms of Service, please contact us at <a onClick={handleContactClick}>&#x69;&#x74;&#x73;&#x6D;&#x61;&#x72;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x40;&#x70;&#x72;&#x6F;&#x74;&#x6F;&#x6E;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</a>.
          </motion.p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
