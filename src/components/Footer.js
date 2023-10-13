import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <button className="footer-link-button">Feedback</button>
        <span className="footer-link-separator">|</span>
        <button className="footer-link-button">Free Consulting</button>
        <span className="footer-link-separator">|</span>
        <button className="footer-link-button">Investor Readiness Test</button>
        <span className="footer-link-separator">|</span>
        <button className="footer-link-button">Invite us to Join</button>
        <span className="footer-link-separator">|</span>
        <button className="footer-link-button">Contact</button>
      </div>
      <p className="footer-follow">Follow us</p>
      <div className="footer-images">
        <img src="image1.png" alt="Image 1" />
        <img src="image2.png" alt="Image 2" />
        <img src="image3.png" alt="Image 3" />
      </div>
      <p className="footer-text">&copy; 2023 Global Carbon Warriors. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
