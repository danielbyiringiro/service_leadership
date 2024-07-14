import React from 'react';
import './Footer.css';
import './Home.css';
import UniGhanaLogo from '../assets/unighana.png'
import FacebookLogo from '../assets/facebook_icon.png'
import WhatsappLogo from '../assets/whatsapp_icon.png'
import YoutubeLogo from '../assets/youtube_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Join our newsletter</h2>
        <p>We'll send you a nice letter once per week. No spam.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="company-info">
          <div className="logo">UniGhana</div>
          <p>Design amazing digital experiences that create more happy in the world.</p>
        </div>
        <div className="footer-links">
          <div className="column">
            <h3>Product</h3>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">Solutions <span className="new">New</span></a>
            <a href="#">Tutorials</a>
            <a href="#">Pricing</a>
            <a href="#">Releases</a>
          </div>
          <div className="column">
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">News</a>
            <a href="#">Media kit</a>
            <a href="#">Contact</a>
          </div>
          <div className="column">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">Events</a>
            <a href="#">Help centre</a>
            <a href="#">Tutorials</a>
            <a href="#">Support</a>
          </div>
          <div className="column">
            <h3>Social</h3>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Whatsapp</a>
            <a href="#">Youtube</a>
            <a href="#">Dribbble</a>
          </div>
          <div className="column">
            <h3>Legal</h3>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Licenses</a>
            <a href="#">Settings</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 UniGhana. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-angellist"></i></a>
          <a href="#"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
