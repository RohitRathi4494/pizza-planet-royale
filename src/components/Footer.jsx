import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="royal-footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col col-brand">
          <div className="footer-logo">Pizza Planet Royale</div>
          <p className="brand-tagline">
            Crafting the finest wood-fired pizzas with stellar ingredients since 2026. 
            Experience the royal taste of the galaxy.
          </p>
        </div>

        {/* How to Order Column */}
        <div className="footer-col">
          <h4>How to Order</h4>
          <ul className="footer-links">
            <li><span className="step-num">1</span> Pick your favorites</li>
            <li><span className="step-num">2</span> Select size & Add to Cart</li>
            <li><span className="step-num">3</span> Submit via WhatsApp</li>
            <li><span className="step-num">4</span> Enjoy your Royal Feast</li>
          </ul>
        </div>

        {/* Policies Column */}
        <div className="footer-col">
          <h4>Our Policies</h4>
          <ul className="footer-links">
            <li>< ShieldCheck size={16} /> Privacy Policy</li>
            <li><ShieldCheck size={16} /> Delivery Terms</li>
            <li><ShieldCheck size={16} /> Refund Policy</li>
            <li><HelpCircle size={16} /> FAQ</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>123 Galaxy St, Deep Space 9</span></li>
            <li><Phone size={18} /> <span>+91 98765 43210</span></li>
            <li><Clock size={18} /> <span>Daily: 11 AM - 11 PM</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Pizza Planet Royale. All Rights Reserved. Crafted for the Elite.</p>
      </div>

      <style>{`
        .royal-footer {
          background: #080202;
          padding: 5rem 5% 2rem;
          border-top: 2px solid var(--accent-color);
          color: var(--text-primary);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-col h4 {
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.8rem;
          font-size: 1rem;
          font-weight: 800;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .brand-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 300px;
        }
        .footer-links, .contact-info {
          list-style: none;
          padding: 0;
        }
        .footer-links li, .contact-info li {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }
        .footer-links li:hover {
          color: var(--text-primary);
          padding-left: 5px;
        }
        .step-num {
          background: var(--primary-color);
          color: white;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          opacity: 0.6;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .royal-footer {
            padding: 3.5rem 6% 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
