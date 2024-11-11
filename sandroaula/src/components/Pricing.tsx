import { FaCheck } from "react-icons/fa";
import Button from "./button";
import { FaRegUser, FaStar, FaBuilding } from "react-icons/fa";
interface PricingProps {
  show: boolean;
}

export default function Pricing({ show }: PricingProps) {
  return (
    <section id="pricing" className={`pricing ${show ? "show" : ""}`}>
      <div className="container">
        <h2>Nossos Planos</h2>
        <p className="pricing-intro">
          Escolha o plano que melhor se adapta às suas necessidades
        </p>
        <div className="pricing-grid">
          <div className="pricing-item">
            <FaRegUser className="pricing-icon" />
            <h3>Básico</h3>
            <p className="price">Grátis</p>
            <ul>
              <li>
                <FaCheck /> Localização em tempo real
              </li>
              <li>
                <FaCheck /> Horários atualizados
              </li>
              <li>
                <FaCheck /> Suporte por email
              </li>
            </ul>
            <Button text="Escolher Plano" />
          </div>
          <div className="pricing-item featured">
            <FaStar className="pricing-icon" />
            <h3>Premium</h3>
            <span className="popular-badge">Mais Popular</span>
            <p className="price">R$ 19,99/mês</p>
            <ul>
              <li>
                <FaCheck /> Todos os recursos do plano Básico
              </li>
              <li>
                <FaCheck /> Compra de tickets no app
              </li>
              <li>
                <FaCheck /> Notificações personalizadas
              </li>
              <li>
                <FaCheck /> Suporte prioritário
              </li>
            </ul>
            <Button text="Escolher Plano" />
          </div>
          <div className="pricing-item">
            <FaBuilding className="pricing-icon" />
            <h3>Empresarial</h3>
            <p className="price">Sob consulta</p>
            <ul>
              <li>
                <FaCheck /> Todos os recursos do plano Premium
              </li>
              <li>
                <FaCheck /> API personalizada
              </li>
              <li>
                <FaCheck /> Gerenciamento de frota
              </li>
              <li>
                <FaCheck /> Suporte 24/7
              </li>
            </ul>
            <Button text="Contate-nos" />
          </div>
        </div>
      </div>
    </section>
  );
}
