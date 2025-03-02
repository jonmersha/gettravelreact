import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css'; // Importing external CSS for better management

// Sample links for social media, registrations, and subscriptions
const footerLinks = {
  socialMedia: [
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
  ],
  registrations: [
    { name: 'Sign Up', url: '/signup' },
    { name: 'Login', url: '/login' },
  ],
  subscriptions: [
    { name: 'Newsletter', url: '/newsletter' },
    { name: 'Offers & Deals', url: '/offers' },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section: Logo and Company Name */}
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h2>getethioTravel</h2>
        </div>

        {/* Right Section: Description of Travel and Tours in Ethiopia */}
        <div className="footer-right">
          <h3>Explore the beauty of Ethiopia</h3>
          <p>
            Experience the rich history, diverse landscapes, and unique culture of Ethiopia. From the
            stunning highlands to the historic sites, Ethiopia offers an unforgettable travel experience.
            Discover ancient civilizations, breathtaking views, and warm hospitality on a journey like no
            other.
          </p>
        </div>
      </div>

      {/* Links Section (Social Media, Registrations, Subscriptions) */}
      <div className="footer-links">
        {/* Social Media Links */}
        <div className="footer-links-column">
          <h4>Follow Us</h4>
          <ul>
            {footerLinks.socialMedia.map((link, index) => (
              <li key={index}>
                <a href={link.url} aria-label={`Follow us on ${link.name}`} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Registrations Links */}
        <div className="footer-links-column">
          <h4>Register</h4>
          <ul>
            {footerLinks.registrations.map((link, index) => (
              <li key={index}>
                <a href={link.url} aria-label={`Go to ${link.name}`} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscriptions Links */}
        <div className="footer-links-column">
          <h4>Subscribe</h4>
          <ul>
            {footerLinks.subscriptions.map((link, index) => (
              <li key={index}>
                <a href={link.url} aria-label={`Subscribe to ${link.name}`} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 TravelEthiopia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
