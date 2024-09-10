import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/button";
import "../styles/header.css";
import "../styles/utility.css";
import rectangleOne from "../assets/images/rectangleOne.png";
import rectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/solutions.css";
import { FaBolt, FaBus,  FaClock, FaHourglass, FaMobileAlt } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";


export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowSolutions(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="container py-sm ">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo BusDriver" width={180} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      
      <section id="hero">
        <span className="desktop-only">
          <img src={rectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={rectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Bem-Vindo</p>
          <h1>
          "Chega de esperar sem saber! Com o BusDriver, descubra horários e localizações de ônibus em tempo real!"
          </h1>
          <p>
          "Planeje sua viagem com o BusDriver. Baixe agora!"
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="solution" className={`solutions ${showSolutions ? 'show' : ''}`}>
        <div className="container">
          <h2>Nossas Soluções</h2>
          <p className="solutions-intro">Descubra como podemos tornar sua experiência com transporte público ainda melhor!</p>
          <div className="solutions-grid">
            <div className="solution-item">
              <FaBus className="solution-icon" />
              <h3>Localização em Tempo real</h3>
              <p> Veja a localização exata dos ônibus em sua cidade, para saber exatamente quando e onde eles vão passar.</p>
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
            <Button text="Aproveite Agora" />
          </div>
        </div>
      </section>
    </>
  );
}