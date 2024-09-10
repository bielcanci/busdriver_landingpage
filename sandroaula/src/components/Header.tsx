import { useState } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "./button";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setShowMobileMenu(false);
    document.body.classList.remove('menu-open');
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);
  };

  return (
    <header className="container py-sm">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo BusDriver" width={180} height={80} />

        <div className="desktop-only">
          <ul className="flex gap-1">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('solution')}>Soluções</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Depoimentos</a></li>
            <li><a onClick={() => scrollToSection('pricing')}>Preços</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
          </ul>
        </div>

        <div className="desktop-only">
          <div className="flex items-center">
            <a className="reverse-color ml-lg" href="">Login</a>
            <Button text="Cadastre-se" />
          </div>
        </div>

        <div className="mobile-menu">
          {showMobileMenu ? (
            <div className="mobile-menu-content">
              <div className="container flex">
                <ul>
                  <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                  <li><a onClick={() => scrollToSection('solution')}>Soluções</a></li>
                  <li><a onClick={() => scrollToSection('testimonials')}>Depoimentos</a></li>
                  <li><a onClick={() => scrollToSection('pricing')}>Preços</a></li>
                  <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
                  <li><a className="reverse-color" href="#">Login</a></li>
                </ul>
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                  <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
              </div>
            </div>
          ) : (
            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
              <img src={Menu} alt="ícone menu" width={24} height={24} />
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
