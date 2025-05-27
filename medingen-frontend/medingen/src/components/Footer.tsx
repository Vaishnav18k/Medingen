import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import logo from '../assets/logo-pica.png'; // Update with your actual logo path

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Medingen Logo" className="footer-logo" />
          <p className="footer-tagline">Saves you health and wealth</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Website</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/how-it-works">How it works</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Our Policies</h3>
            <ul>
              <li><a href="/privacy">Privacy Policies</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/grievance">Grievance Redressal Policy</a></li>
              <li><a href="/return">Return Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <ul>
              <li><a href="https://instagram.com/medingen" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com/medingen" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://youtube.com/medingen" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://linkedin.com/company/medingen" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">More</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>©2025 Medingen. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;