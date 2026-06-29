import { useState } from "react";
import styles from "./info.module.scss";

const sections = [
  { 
    title: "EDUCATION", 
    tag: "ACADEMIC // BACKGROUND",
    text: "Percorso formativo orientato allo sviluppo web moderno, con competenze solide in programmazione front-end e progettazione di interfacce. Unisco precisione tecnica e attenzione al dettaglio per creare soluzioni affidabili e curate." 
  },
  { 
    title: "SPECIALIZATION", 
    tag: "CORE // ARCHITECTURE",
    text: "Specializzato nello sviluppo front-end moderno, con esperienza in React, Vite, Next.js e JavaScript avanzato. Progetto interfacce veloci, stabili e coerenti, basate su strutture modulari e facilmente mantenibili." 
  },
  { 
    title: "FOCUS", 
    tag: "UX // INTERACTION",
    text: "Focus sulla creazione di interfacce moderne, chiare e performanti, pensate per valorizzare il prodotto. Ogni scelta è orientata alla qualità dell'interazione e alla semplicità d'uso." 
  },
  { 
    title: "SKILLS", 
    tag: "TECH // STACK",
    text: "Competenze focalizzate su sviluppo front-end, performance, modularità e cura del dettaglio. Stack utilizzato: HTML5, CSS3, JavaScript, React, Vite, Next.js, SCSS Modules e Component Integration." 
  }
];

export default function Info() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth <= 768) {
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      
      {/* SIDEBAR NAVIGATION */}
      <div className={styles.sidebar}>
        <div className={styles.line}>
          <div 
            className={styles.progressFiller} 
            style={{ 
              transform: `translateY(${activeIndex * 100}%)`,
              height: `${100 / sections.length}%` 
            }}
          />
        </div>

        {sections.map((section, i) => (
          <button
            key={i}
            className={`${styles.navItem} ${activeIndex === i ? styles.activeNav : ""}`}
            onClick={() => handleNavClick(i)}
          >
            <span className={styles.navNumber}>0{i + 1}</span>
            <span className={styles.navTitle}>{section.title}</span>
          </button>
        ))}
      </div>

      {/* DESKTOP CONTAINER */}
      <div className={styles.desktopContainer}>
        <div className={styles.slide}>
          <span className={styles.slideIndex}>/ 0{activeIndex + 1}</span>
          <h2>{sections[activeIndex].title}</h2>
          <p>{sections[activeIndex].text}</p>
        </div>
      </div>

      {/* SCHEDA SOVRAPPOSTA LUXURY DARK */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.drawerVisible : ""}`} onClick={() => setIsDrawerOpen(false)}>
        <div className={styles.drawerContent} onClick={(e) => e.stopPropagation()}>
          
          <div className={styles.drawerInnerBody}>
            {/* Header ultra-minimalista */}
            <div className={styles.metaHeader}>
              <span className={styles.specTag}>{sections[activeIndex].tag}</span>
              <span className={styles.slideIndex}>[ 0{activeIndex + 1} ]</span>
            </div>

            <h2>{sections[activeIndex].title}</h2>
            
            <div className={styles.diagonalLine} />

            <p>{sections[activeIndex].text}</p>
          </div>
          
          {/* INTERFACCIA DI CHIUSURA DESTRUTTURATA ED ELEGANTE */}
          <div className={styles.actionFooter}>
            <button className={styles.premiumCloseBtn} onClick={() => setIsDrawerOpen(false)}>
              <span className={styles.btnText}>DISMISS</span>
              <span className={styles.btnCross}>✕</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}