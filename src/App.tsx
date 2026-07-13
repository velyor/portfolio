import './App.css'
import { useState, useEffect } from "react";

/*===== Section =====*/
import { HomeSection2 } from "./component/HomeSection2/HomeSection2";
import About2 from "./component/AboutSection2/AboutSection2"; 
import ProjectSection from "./component/ProjectSection2/ProjectSection2";
import ContactSection from "./component/ContactSection/ContactSection"; 

import Footer from "./component/FooterSection/FooterSection";
import Navbar from "./component/NavBar/navbarApp"; 

/*===== Component Section =====*/
import Servizi1 from "./component/servizzi/ServiziSection"; 

function App() {

  /* ============  ACTIVE SECTION DETECTION (Rilevamento della sezione attiva)========= */
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "project" | "contact"
  >("home");

  useEffect(() => {

    // seleziona tutte le sezioni con id
    const sections = document.querySelectorAll("section[id]");

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

  }, 
  
  []);

  return (
    <>
<header>
      <Navbar activeSection={activeSection} />
</header>

<main>

  {/*---  HOME SECTION ---*/}
  <section className="container" id="home">
    <HomeSection2 />
  </section>

  {/*---  ABOUT SECTION ---*/}
  <section className="about1" id="about">
    <About2 />

    <Servizi1 />
  </section>

  {/*---  PROJECT SECTION ---*/}
  <section className="project-section" id="project">
    <div className="container_cardP">
      <ProjectSection />
    </div>
  </section>

  {/*---  CONTACT SECTION ---*/}
  <section className="contact-section" id="contact">
    <ContactSection />
  </section>

  
  <Footer />

  </main>

    </>
  );
}

export default App;