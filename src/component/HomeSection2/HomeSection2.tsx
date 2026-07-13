import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GoldLogo from '../GoldLogoSection/GoldLogoSection'; 
import styles from "./HomeSection2.module.scss";

export const HomeSection2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const structureRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracciamo lo scroll specificamente all'interno della sezione "Struttura"
  const { scrollYProgress } = useScroll({
    target: structureRef,
    offset: ["start end", "end start"] // Parte quando la sezione appare in fondo e finisce quando esce in alto
  });

  // Trasformazioni fluide legate allo scroll (funzionano divinamente anche su mobile)
  // Sostituisce il background-attachment fisso simulando una parallasse controllata hardware
  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  return (
    <section id="home" className={styles.home}>

      {/* ========================= HERO / IDENTITÀ PRINCIPALE ========================= */}
      <header className={styles.identitySection}>
        <div className={styles.container}>
          <div className={styles.homeLogoWrapper}>
            <GoldLogo />
          </div>

          <div className={styles.metaProfession}>
            <span className={styles.brandLabel}>FRONT-END DEVELOPER</span>
          </div>

          <div className={styles.titleWrapper}>
            <h1 className={styles.mainTitle}>CENTERED IDENTITY</h1>
          </div>

          <p className={styles.subtitle}>
            Sviluppo interfacce web fluide e reattive,
            curando ogni dettaglio visivo e prestazionale.
          </p>
        </div>

        <div className={`${styles.premiumScroll} ${scrolled ? styles.hidden : ""}`}>
          <div className={styles.scrollTextContainer}>
            {["S", "C", "R", "O", "L", "L"].map((l, i) => (
              <span key={i} className={styles.letter}>{l}</span>
            ))}
          </div>
          <div className={styles.laserLine}></div>
        </div>
      </header>

      {/* ========================= SEZIONE STRUTTURA CON PARALLASSE NATIVA ========================= */}
      <article ref={structureRef} className={styles.structureSection}>
        
        {/* L'immagine si muove dinamicamente basandosi sulla percentuale di scroll */}
        <motion.div 
          className={styles.fixedBg}
          style={{ 
            y: yBg, 
            scale: scaleBg 
          }}
        />

        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.heroText}>STRUTTURA</h2>
            <div className={styles.lineSeparator}></div>
            <p className={styles.quote}>
              Codice pulito, architetture scalabili e
              performance ottimizzate.
            </p>
          </div>
        </div>

      </article>

    </section>
  );
};