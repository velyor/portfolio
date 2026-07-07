import './App.css'
import { useState, useEffect } from "react";

/* =========================
   Sections
========================= */
import { HomeSection2 } from "./component/HomeSection2/HomeSection2";

import About2 from "./component/AboutSection2/AboutSection2"; 
import ProjectSection from "./component/ProjectSection2/ProjectSection2";
import ContactSection from "./component/ContactSection/ContactSection"; 

import Footer from "./component/FooterSection/FooterSection";

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
  
      <Footer />
    </div>
  );
}

export default App;