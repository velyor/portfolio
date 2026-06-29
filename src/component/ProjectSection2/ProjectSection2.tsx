import React, { useState } from "react";
import styles from "./ProjectSection2.module.scss";

// Import immagine locale
import project1 from "./img.project/jay-horton-lQcdgPjYNRQ-unsplash.jpg";

const projectsData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: i === 0 ? "Divina Commedia" : i === 1 ? "Inkly" : `Project 0${i + 1}`,
  tag: "INTERFACE // DEV",
  image: project1,
  description: i === 0 
    ? "Sito dedicato alla Divina Commedia di Dante Alighieri." 
    : i === 1 
    ? "Dashboard con grafici e dati in tempo reale." 
    : "Prossimamente..."
}));

const tabs = [
  { id: "progetti", label: "PROGETTI" },
  { id: "componenti", label: "COMPONENTI" },
  { id: "mockup", label: "MOCKUP" }
];

export default function SectionProject2() {
  const [activeTab, setActiveTab] = useState("progetti");

  return (
    <section className={styles.sectionProject2}>
      
      {/* Sfondo Astratto Ambientale */}
      <div className={styles.ambientBackground}>
        <div className={styles.movingOrb} />
        <div className={styles.linesGrid} />
      </div>

      {/* Intestazione Originale */}
      <div className={styles.about2LeftContent}>
        <span className={styles.aboutNumber}>02</span>
        <span className={styles.aboutVertical}>PROJECT</span>
      </div>

      {/* Menu Moderno Scritto con Riga Continua */}
      <nav className={styles.menuProjectFullWidth}>
        <div className={styles.menuContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabLink} ${activeTab === tab.id ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Area dei Contenuti */}
      <div className={styles.contentWrapper}>
        {activeTab === "progetti" ? (
          <div className={styles.scrollableContentContainer}>
            <div className={styles.projectGrid3Pillars}>
              {projectsData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={styles.compactCard}
                  style={{ animationDelay: `${(index % 3) * 0.08}s` }}
                >
                  <div className={styles.imageFrame}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className={styles.cardFooterInfo}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag}>{item.tag}</span>
                      <span className={styles.cardNumber}>/ 0{index + 1}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    <a href="#0" className={styles.visitLink} onClick={(e) => e.preventDefault()}>
                      <span className={styles.linkText}>
                        Dettagli
                        <span className={styles.underline} />
                      </span>
                      <span className={styles.arrow}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.inProgressWrapper}>
            <div className={styles.inProgressCard}>
              <span className={styles.progressStatus}>STATUS // WORK IN PROGRESS</span>
              <h3>COMING SOON</h3>
              <div className={styles.miniLine} />
              <p>
                L'architettura dei moduli per la sezione {activeTab} è attualmente in fase di sviluppo e ottimizzazione.
              </p>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}