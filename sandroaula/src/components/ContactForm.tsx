import { useState } from "react";
import { sendEmail } from "../services/emailService";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const welcomeMessage = `
   Bem-vindo ao BusDriver!

    Obrigado pelo seu interesse em nossas soluções de transporte. Estamos entusiasmados por ter você a bordo.

    Aqui estão alguns recursos principais que você vai adorar:
    - Rastreamento de ônibus em tempo real
    - Planejamento inteligente de rotas
    - Atualizações de programação ao vivo
    - Bilheteira móvel

    Comece hoje e transforme seu deslocamento diário!

    Atenciosamente,
    A equipe BusDriver
    `;

    try {
      await sendEmail({
        toMail: email,
        content: welcomeMessage,
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Entre em contato</h2>
        <p>Adoraríamos ouvir sua opinião. Veja como você pode entrar em contato conosco...</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Rua 123, Parque Verde, Cidade 12345</span>
          </div>
          
          <div className="contact-item">
            <FaPhone />
            <span>+55 (45) 9 9999-9999</span>
          </div>
          
          <div className="contact-item">
            <FaEnvelope />
            <span>contact@busdriver.com</span>
          </div>
        </div>

        <div className="social-links">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">
          Digite seu e-mail para receber mais informações:
          </label>
          <input
            type="email"  
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Obtenha informações"}
        </button>

        {status === "success" && (
          <p className="success-message">
            Verifique seu e-mail para mais informações!
          </p>
        )}

        {status === "error" && (
          <p className="error-message">Falha ao enviar e-mail. Por favor, tente novamente.</p>
        )}
      </form>
    </div>
  );
};
