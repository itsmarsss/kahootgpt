import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import './Tutorial.css';

function License() {
  const handleContactClick = () => {
    const email = 'itsmarzzzzzz@protonmail.com';
    const encodedEmail = encodeURIComponent(email);
    window.location.href = `mailto:${encodedEmail}`;
  };

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
          License
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          GNU General Public License v3.0
        </motion.p>
      </div>

      <main className="tutorial-content">
        <section className="tutorial-section">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FileText size={24} /> GNU GPL v3.0
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            KahootGPT is open source software licensed under the GNU General Public License version 3.0.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> What This Means
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The GPL v3.0 is a free, copyleft license for software and other kinds of works. It guarantees end users the freedom to:
          </motion.p>
          <motion.ul
            style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <li>Run the software for any purpose</li>
            <li>Study how the software works and modify it</li>
            <li>Redistribute copies of the software</li>
            <li>Distribute copies of your modified versions to others</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> Key Terms
          </motion.h2>
          <motion.ul
            style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <li><strong>No Warranty:</strong> This software is provided "as is" without warranty of any kind</li>
            <li><strong>Copyleft:</strong> Any derivative work must also be licensed under GPL v3.0</li>
            <li><strong>Source Code:</strong> Source code must be made available when distributing the software</li>
            <li><strong>Patent Protection:</strong> Contributors grant patent licenses to all users</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> Full License Text
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The complete GNU General Public License v3.0 text can be viewed on GitHub:
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="https://github.com/itsmarsss/kahootgpt/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <FileText size={16} /> View Full License on GitHub
            </a>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> Copyright
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Copyright © 2024 KahootGPT Contributors
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FileText size={24} /> Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            If you have any questions about this license, please contact us at <a onClick={handleContactClick}>&#x69;&#x74;&#x73;&#x6D;&#x61;&#x72;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x40;&#x70;&#x72;&#x6F;&#x74;&#x6F;&#x6E;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</a>.
          </motion.p>
        </section>
      </main>
    </div>
  );
}

export default License;
