import { FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

interface TestimonialsProps {
  show: boolean;
}

const testimonialData = [
  {
    quote: "O BusDriver mudou minha rotina de transporte. Agora sei exatamente quando meu ônibus vai chegar!",
    author: "Maria Silva"
  },
  {
    quote: "Economizo muito tempo com este app. É prático e fácil de usar.",
    author: "João Santos"
  },
  {
    quote: "A compra de tickets pelo app é super conveniente. Recomendo a todos!",
    author: "Ana Oliveira"
  },
  {
    quote: "Interface intuitiva e alertas precisos. Nunca mais perdi meu ônibus!",
    author: "Pedro Costa"
  },
  {
    quote: "O melhor app de transporte que já usei. As notificações em tempo real são muito úteis.",
    author: "Clara Mendes"
  }
];

export default function Testimonials({ show }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className={`testimonials ${show ? 'show' : ''}`}>
      <div className="container">
      <center><h2>O que nossos usuários dizem</h2></center>
        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.quote}</p>
                <h4>{testimonial.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
