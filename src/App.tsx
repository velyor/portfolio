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
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "project" | "contact"
  >("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
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
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      <main>
        {/* Rimossa la section duplicata: HomeSection2 gestisce già il suo tag section con id="home" */}
        <HomeSection2 />

        {/*--- ABOUT SECTION ---*/}
        <section className="about1" id="about">
          <About2 />
          <Servizi1 />
        </section>

        {/*--- PROJECT SECTION ---*/}
        <section className="project-section" id="project">
          <div className="container_cardP">
            <ProjectSection />
          </div>
        </section>

        {/*--- CONTACT SECTION ---*/}
        <section className="contact-section" id="contact">
          <div className="container_contact"> {/* Consigliato un wrapper interno protettivo */}
            <ContactSection />
          </div>
        </section>
      </main>

      {/* IL FOOTER ORA È FUORI DAL MAIN: Struttura semantica corretta al 100% */}
      <Footer />
    </>
  );
}

export default App;