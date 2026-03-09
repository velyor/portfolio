import React, { useRef, useEffect, useState } from 'react';
import styles from "./about.module.scss";

import { motion } from "framer-motion";


{/* =====import component===== */}
import { GlareCard } from "./CardStudy/cardStudy";
import Skills from "./Skills/skill";

import AboutStats from "./info2/card1";


import { GraduationCap, Workflow, Sparkles } from "lucide-react";


const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


{/* =========//Animazioni//========= */}
const [open, setOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (

<section>

  <div className={styles.containerAbout}>
{/*<h1 className={styles.h1About}>LEARN MORE <br />ABOUT ME</h1>*/}
<motion.h1
  className={styles.h1About}
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
  LEARN MORE <br /> ABOUT ME
</motion.h1>

</div>

    <section className={styles.aboutSection} >

     
       
 {/* === LEFT SIDE === */}
      <div className={styles.aboutLeft}>

        

        <p  className={styles.aboutIntro}>
           Sviluppatore Front-End specializzato nella creazione di interfacce web ad alte prestazioni, 
           con un focus particolare sull'architettura del codice e l'ottimizzazione dell'esperienza 
           utente.
        </p>

      

  <div  className={styles.aboutDetails}>
    <p><strong>Sviluppo Interfacce & UX</strong> - Realizzo prodotti digitali responsive e intuituivi, 
    curando ogni dettaglio visivo e tecnico per garantire funzionalità e velocità. </p>

    <p><strong>Codice & Stack Moderno</strong> - Costruisco basi solide e manutenibili utilizzando React 
    e TypeScript, assicurando che ogni progetto sia scalabile e pronto a crescere.</p>

    <p><strong>Metodo & Consulenza </strong> - Trasformo idee in soluzioni reali attraverso un’analisi 
    tecnica approfondita e una collaborazione costante orientata agli obiettivi.</p>
  </div>






        <div className={styles.buttonRow}>


          

<div className={styles.buttonsWrapper}>
  <motion.button
    className={styles.btnPrimary}
    initial={{ y: 40, opacity: 0 }}       
    whileInView={{ y: 0, opacity: 1 }}    
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
   
    onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
  >
    Contattami
  </motion.button>

  <motion.button
    className={styles.btnSecondary}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
 
    onClick={() => document.getElementById("project").scrollIntoView({ behavior: "smooth" })}
  >
    Progetti
  </motion.button>
</div>



        </div>
        {/*<hr className={styles.Divider} />*/}

      </div>

      {/* === RIGHT SIDE === */}
      <div className={styles.aboutRight} >


<AboutStats />

      </div>



















      {/* === InfoStudy === */}
      <div className='cards-wrapper-1'>
       
    <section className={styles.heroRoot}>
      <div className={styles.heroContainer}>
        
        {/*<p className={styles.heroSubtle}>
          Ogni corso e progetto contribuisce a trasformare lo studio in competenze concrete.
        </p>*/}

        <div className={styles.heroDivider}>


<div className={styles.studyStatem}>

 <h2 className={styles.statementTitle}>Education</h2>

  <p className={styles.statementSubtitle}>
    STUDIES · SKILLS · CERTIFICATIONS
  </p>

  <div className={styles.statementDivider}></div>
</div>



        </div>

       {/* === STUDY / CARDS === */}
        <div className="cards-wrapper" >
          <GlareCard>
            <h2>Sviluppo Pagine Web</h2>
            <h3>Dicembre 2023 - Giugno 2024</h3>
            {/*<p>Formazione intensiva su sviluppo web moderno, con focus su Front-End, HTML, CSS, 
              JavaScript e best practice per pagine web responsive e funzionali.</p>*/}
            <button className="open-modal-btn" onClick={() => { setSelectedCard("web"); setOpen(true); }}>Certificato di specializzazione</button>


          </GlareCard>

          <GlareCard>
            <h2>Cisco Networking Essentials</h2>
            <h3>Settembre 2024 - Giugno 2025</h3>
            {/*<p>Formazione pratica su reti, gestione PC e periferiche, con introduzione alla sicurezza e 
              alla configurazione di stampanti, completata con certificazione Cisco.</p>*/}
            <button className="open-modal-btn" onClick={() => { setSelectedCard("cisco"); setOpen(true); }}>
  Certificato
</button>


          </GlareCard>

          <GlareCard>
            <button className="open-modal-btn" onClick={() => { setSelectedCard("inCorso"); setOpen(true); }}>In corso...</button>

          </GlareCard>

{open && (
  <div className="modal-overlay" onClick={() => setOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

   {/* ForteChance */}   
{selectedCard === "web" && (
  <>
    <h2>Sviluppo Pagine Web</h2>

    <div className="modal-scroll">
      <section>
        <h3>Panoramica</h3>
        <p>
          Corso svolto presso <strong>Forte Chance</strong> (Dicembre 2023 – Giugno 2024),
          con qualifica di <strong>Tecnico per la Produzione di Pagine Web</strong>.
          Un percorso intensivo focalizzato sullo sviluppo Front-End moderno,
          la progettazione dell’esperienza utente e la creazione di interfacce responsive.
        </p>
      </section>

      <section>
        <h3>Competenze Acquisite</h3>
        <ul>
          <li>HTML5 semantico e accessibilità</li>
          <li>CSS3, SASS, responsive design</li>
          <li>JavaScript moderno (ES6+)</li>
          <li>Introduzione a React e componenti</li>
          <li>UI/UX fundamentals e micro‑interazioni</li>
          <li>Git e GitHub workflow</li>
          <li>Ottimizzazione performance</li>
        </ul>
      </section>

      <section>
        <h3>Progetti Realizzati</h3>
        <ul>
          <li>Landing page responsive</li>
          <li>Dashboard con componenti UI</li>
          <li>Portfolio personale</li>
        </ul>
      </section>

      <section>
        <h3>Certificazione</h3>
        <p>
          Conseguimento del <strong>Certificato di Specializzazione</strong>
          come Tecnico per la Produzione di Pagine Web.
        </p>
      </section>
    </div>
  </>
)}

{/* CISCO */}
      {selectedCard === "cisco" && (
        <>
          <h2>Cisco Networking Essentials</h2>

<div className="modal-scroll">
  <section>
    <h3>Panoramica</h3>
    <p>
      Percorso formativo svolto presso il mio istituto tecnico (Settembre 2024 – Giugno 2025),
      focalizzato sui fondamenti delle reti informatiche e sulle tecnologie Cisco.
      Un modulo orientato alla comprensione dell’infrastruttura di rete, della configurazione
      dei dispositivi e delle basi del troubleshooting.
    </p>
  </section>

  <section>
    <h3>Competenze Acquisite</h3>
    <ul>
      <li>Modello OSI e TCP/IP</li>
      <li>Subnetting, indirizzamento IPv4 e IPv6</li>
      <li>Configurazione base di router e switch Cisco</li>
      <li>VLAN, trunking e segmentazione della rete</li>
      <li>Routing statico e concetti introduttivi di routing dinamico</li>
      <li>Diagnostica e troubleshooting di rete</li>
      <li>Sicurezza di base e best practice</li>
    </ul>
  </section>

  <section>
    <h3>Attività Pratiche</h3>
    <ul>
      <li>Simulazioni su Cisco Packet Tracer</li>
      <li>Configurazione di topologie di rete</li>
      <li>Analisi del traffico e verifica della connettività</li>
      <li>Implementazione di VLAN e routing di base</li>
    </ul>
  </section>

  <section>
    <h3>Certificazione</h3>
    <p>
      Conseguimento del <strong>Certificato Cisco Networking Essentials</strong>,
      attestante le competenze fondamentali nella progettazione, configurazione
      e gestione di reti informatiche.
    </p>
  </section>
</div>

        </>
      )}

      {selectedCard === "inCorso" && (
        <>
          <h2>In corso...</h2>
          
        </>
      )}

      <button className="close-modal-btn" onClick={() => setOpen(false)}>
        Chiudi
      </button>
    </div>
  </div>
)}



        </div>



<div className={styles.containerInfo}>
  <p className={styles.pInfo}>Investo costantemente nella mia formazione per offrire soluzioni digitali solide, curate e 
    realmente utili. Unisco metodo, design e sviluppo per trasformare esigenze complesse in interfacce 
    chiare, performanti e facili da usare. Il mio obiettivo è creare risultati concreti.</p>


<div className={styles.statement}>
  <div className={styles.cards}>

    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <GraduationCap size={18} />
      </div>
      <h3 className={styles.title}>Studio</h3>
      <p className={styles.meta}>Formazione continua</p>
    </div>

    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <Workflow size={18} />
      </div>
      <h3 className={styles.title}>Metodo</h3>
      <p className={styles.meta}>Approccio strutturato</p>
    </div>

    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <Sparkles size={18} />
      </div>
      <h3 className={styles.title}>Risultato</h3>
      <p className={styles.meta}>Qualità concreta</p>
    </div>

  </div>
</div>

</div>



        {/*<div className={styles.cardsRow}>
          <article className={styles.card}>
            <div className={styles.cardIcon} aria-hidden>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="8" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="7" y="4" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Teorico</h3>
            <p className={styles.cardDesc}>Concetti fondamentali e avanzati.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon} aria-hidden>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 10.5v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8.25h.01"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Pratico</h3>
            <p className={styles.cardDesc}>Competenze applicate su progetti reali.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon} aria-hidden>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Certificato</h3>
            <p className={styles.cardDesc}>Competenze validate con certificazioni.</p>
          </article>
        </div>*/}



      </div>
    </section>

</div>


 {/*<Skills />*/}

    </section>
    </section>
    
  );
};

export default About;
