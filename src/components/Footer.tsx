import React from 'react';

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
    <footer style={{ backgroundColor: '#222', color: 'white', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Left Section: Logo and Company Name */}
        <div style={{ flex: '1', marginRight: '20px', textAlign: 'left' }}>
          <img
            src="https://via.placeholder.com/150" // Replace with your logo URL
            alt="Company Logo"
            style={{ width: '150px', marginBottom: '10px' }}
          />
          <h2>TravelEthiopia</h2>
        </div>

        {/* Right Section: Description of Travel and Tours in Ethiopia */}
        <div style={{ flex: '2', marginRight: '20px', textAlign: 'right' }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '30px' }}>
        {/* Social Media Links */}
        <div style={{ flex: '1', marginBottom: '20px' }}>
          <h4>Follow Us</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {footerLinks.socialMedia.map((link, index) => (
              <li key={index}>
                <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Registrations Links */}
        <div style={{ flex: '1', marginBottom: '20px' }}>
          <h4>Register</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {footerLinks.registrations.map((link, index) => (
              <li key={index}>
                <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscriptions Links */}
        <div style={{ flex: '1', marginBottom: '20px' }}>
          <h4>Subscribe</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {footerLinks.subscriptions.map((link, index) => (
              <li key={index}>
                <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9em' }}>
        <p>&copy; 2025 TravelEthiopia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
