import Button from "./button";
import rectangleOne from "../assets/images/rectangleOne.png";
import rectangleTwo from "../assets/images/rectangleTwo.png";

export default function Hero() {
  return (
    <section id="hero">
      <span className="desktop-only">
        <img src={rectangleTwo} alt="Retangulo um tela inicial" />
      </span>
      <img src={rectangleOne} alt="Retangulo dois tela inicial" />
      <div className="container content">
        <p className="desktop-only">Bem-Vindo</p>
        <h1>"Chega de esperar sem saber! Com o BusDriver, descubra horários e localizações de ônibus em tempo real!"</h1>
        <p>"Planeje sua viagem com o BusDriver. Baixe agora!"</p>
        <div className="flex gap-1">
          <span><Button text="Cadastre-se" /></span>
          <span className="desktop-only"><Button text="Veja mais" secondary /></span>
        </div>
      </div>
    </section>
  );
}
