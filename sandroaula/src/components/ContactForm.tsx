import { useState } from "react";
import { sendEmail } from "../services/emailService";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const welcomeMessage = `

    Mensagem do usuário: "${message}"

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
        userMessage: message,
      });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Entre em contato</h2>
        <p>
          Adoraríamos ouvir sua opinião. Entre em contato conosco através dos
          canais abaixo:
        </p>

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
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Digite seu e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Sua mensagem (opcional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "success" && (
          <p className="success-message">
            Mensagem enviada com sucesso! Verifique seu e-mail.
          </p>
        )}

        {status === "error" && (
          <p className="error-message">
            Falha ao enviar mensagem. Por favor, tente novamente.
          </p>
        )}
      </form>
    </div>
  );
};
