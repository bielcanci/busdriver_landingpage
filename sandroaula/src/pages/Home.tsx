import { useState, useEffect } from "react";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Solutions from "../components/Solutions.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Pricing from "../components/Pricing.tsx";
import { ContactForm } from "../components/ContactForm.tsx";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/ContactForm.css";
import  "../styles/Footer.css";
import Footer from "../components/Footer.tsx";

export default function Home() {
  const [showSections, setShowSections] = useState({
    solutions: false,
    testimonials: false,
    pricing: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowSections({
        solutions: scrollPosition > 300,
        testimonials: scrollPosition > 600,
        pricing: scrollPosition > 900,
        contact: scrollPosition > 1200,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Solutions show={showSections.solutions} />
      <Testimonials show={showSections.testimonials} />
      <Pricing show={showSections.pricing} />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer show={true} />
    </>
  );
}
