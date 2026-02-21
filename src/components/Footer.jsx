import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Uniabuja Exam Scheduler. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
