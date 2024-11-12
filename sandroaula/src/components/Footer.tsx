import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>BusDriver</h3>
          <p>Tornando o transporte público mais fácil para todos.</p>
        </div>
        
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#solutions">Soluções</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contatos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Conecte-se conosco</h4>
          <div className="social-links">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 BusDriver. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
