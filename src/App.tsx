import './App.css'
import { useState, useEffect } from "react";

/* =========================
   Sections
========================= */
import { HomeSection2 } from "./component/HomeSection2/HomeSection2";

import About2 from "./component/AboutSection2/AboutSection2"; 
import ProjectSection from "./component/ProjectSection2/ProjectSection2";
import ContactSection from "./component/ContactSection/ContactSection"; 

import Servizi1 from "./component/servizzi/ServiziSection"; 
/* =========================
   Components
========================= */
import Navbar from "./component/NavBar/navbarApp"; 

function App() {

  /* =========================
     GLOBAL STATE
     - tiene traccia della sezione attiva
     - usato dalla Navbar
  ========================= */
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "project" | "contact"
  >("home");

  /* =========================
     INTERSECTION OBSERVER
     - osserva le sezioni nel viewport
     - aggiorna automaticamente activeSection
  ========================= */
  useEffect(() => {

    // seleziona tutte le sezioni con id
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          // se la sezione è visibile nel viewport
          if (entry.isIntersecting) {
            const id = entry.target.id;

            // aggiorna lo stato solo se l'id è valido
            if (
              id === "home" ||
              id === "about" ||
              id === "project" ||
              id === "contact"
            ) {
              setActiveSection(id);
            }
          }

        });

      },
      {
        threshold: 0.3, // 60% della sezione visibile per considerarla attiva
      }
    );

    // inizia a osservare ogni sezione
    sections.forEach((section) => observer.observe(section));

    // cleanup (importante per evitare memory leak)
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (
    <div>

      {/* =========================
         NAVBAR
         - riceve la sezione attiva
         - si aggiorna dinamicamente
      ========================= */}
      <Navbar activeSection={activeSection} />

      {/* =========================
         HOME SECTION
      ========================= */}
      <div className="container" id="home">
        <HomeSection2 />
      </div>



      {/* =========================
         ABOUT SECTION
      ========================= */}
      <div className="about1" id="about">
        <About2 />
      </div>

<Servizi1 />


      {/* =========================
         PROJECT SECTION
      ========================= */}
      <div className="project-section" id="project">
        <div className="container_cardP">
          <ProjectSection />
        </div>
      </div>

      {/* =========================
         CONTACT SECTION
      ========================= */}
      <div className="contact-section" id="contact">
        <ContactSection />
      </div>

      {/* =========================
         FOOTER
      ========================= */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h2 className="footer-logo">Velyor</h2>
            <p className="footer-description">
              Frontend developer con focus su interfacce performanti e accessibili.
              Realizzo progetti web per consolidare competenze e trasformare idee in esperienze digitali concrete.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Navigazione</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contatti</h3>
            <p>Email: costa.alle111@gmail.com</p>
            <p>Cellulare: +393342721529</p>
          </div>

        </div>

        <div className="footer-bottom">
          © Velyor. Tutti i diritti riservati.
        </div>
      </footer>

    </div>
  );
}

export default App;