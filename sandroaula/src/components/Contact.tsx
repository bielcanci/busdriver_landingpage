import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Button from "./button";


interface ContactProps {
  show: boolean;
}

export default function Contact({ show }: ContactProps) {
  return (
    <section id="contact" className={`contact ${show ? 'show' : ''}`}>
      <div className="container">
        <h2>Entre em Contato</h2>
        <p className="contact-intro">Estamos aqui para ajudar. Entre em contato conosco!</p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>contato@busdriver.com</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <h3>Telefone</h3>
              <p>+55 (11) 1234-5678</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Endereço</h3>
              <p>Rua da Inovação, 123 - São Paulo, SP</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu Email" required />
            <textarea placeholder="Sua Mensagem" required></textarea>
            <Button text="Enviar Mensagem" />
          </form>
        </div>
      </div>
    </section>
  );
}
