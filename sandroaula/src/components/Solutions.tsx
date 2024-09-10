import { FaBolt, FaBus, FaClock, FaHourglass, FaMobileAlt } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import Button from "./button";

interface SolutionsProps {
  show: boolean;
}

export default function Solutions({ show }: SolutionsProps) {
  return (
    <section id="solution" className={`solutions ${show ? 'show' : ''}`}>
      <div className="container">
        <h2>Nossas Soluções</h2>
        <p className="solutions-intro">Descubra como podemos tornar sua experiência com transporte público ainda melhor!</p>
        <div className="solutions-grid">
          <div className="solution-item">
            <FaBus className="solution-icon" />
            <h3>Localização em Tempo real</h3>
            <p>Veja a localização exata dos ônibus em sua cidade, para saber exatamente quando e onde eles vão passar.</p>
          </div>
          <div className="solution-item">
            <FaClock className="solution-icon" />
            <h3>Horários Atualizados</h3>
            <p>Consulte os horários de chegada e saída dos ônibus para planejar sua viagem com precisão e evitar longas esperas.</p>
          </div>
          <div className="solution-item">
            <FaTicket className="solution-icon" />
            <h3>Compra de Tickets Facilitada</h3>
            <p>Compre seus tickets diretamente pelo app, sem precisar enfrentar filas.</p>
          </div>
          <div className="solution-item">
            <FaMobileAlt className="solution-icon" />
            <h3>Informações Precisas</h3>
            <p>Receba informações detalhadas sobre itinerários e paradas.</p>
          </div>
          <div className="solution-item">
            <FaBolt className="solution-icon" />
            <h3>Rapidez e Praticidade</h3>
            <p>Tenha acesso rápido e fácil a todas as informações essenciais para sua viagem.</p>
          </div>
          <div className="solution-item">
            <FaHourglass className="solution-icon" />
            <h3>Economia de Tempo</h3>
            <p>Planeje sua rota de forma eficiente e evite esperas desnecessárias.</p>
          </div>
        </div>
        <div className="solutions-cta">
          <Button text="Experimente Agora" />
        </div>
      </div>
    </section>
  );
}
