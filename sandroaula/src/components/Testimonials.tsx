import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialsProps {
  show: boolean;
}

export default function Testimonials({ show }: TestimonialsProps) {
  return (
    <section id="testimonials" className={`testimonials ${show ? 'show' : ''}`}>
      <div className="container">
        <h2>O que nossos usuários dizem</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <FaQuoteLeft className="quote-icon" />
            <p>"O BusDriver mudou minha rotina de transporte. Agora sei exatamente quando meu ônibus vai chegar!"</p>
            <h4>Maria Silva</h4>
          </div>
          <div className="testimonial-item">
            <FaQuoteLeft className="quote-icon" />
            <p>"Economizo muito tempo com este app. É prático e fácil de usar."</p>
            <h4>João Santos</h4>
          </div>
          <div className="testimonial-item">
            <FaQuoteLeft className="quote-icon" />
            <p>"A compra de tickets pelo app é super conveniente. Recomendo a todos!"</p>
            <h4>Ana Oliveira</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
