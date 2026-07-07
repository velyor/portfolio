import React, { useState, useEffect } from "react";
import GoldLogo from '../GoldLogoSection/GoldLogoSection'; 
import styles from "./HomeSection2.module.scss";

export const HomeSection2 = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <section className={styles.home}>

      {/* SEZIONE SUPERIORE: IDENTITY */}
      <div className={styles.identitySection}>
        <div className={styles.container}>
          <div className={styles.homeLogoWrapper}>
            <GoldLogo />
          </div>
          
          <div className={styles.metaProfession}>
            <span className={styles.brandLabel}>FRONT-END DEVELOPER</span>
          </div>
          
          <div className={styles.titleWrapper}>
            <h2 className={styles.mainTitle}>CENTERED IDENTITY</h2>
          </div>
          
          <p className={styles.subtitle}>
            Sviluppo interfacce web fluide e reattive, curando ogni dettaglio visivo e prestazionale.
          </p>
        </div>

        <div className={`${styles.premiumScroll} ${scrolled ? styles.hidden : ""}`}>
          <div className={styles.scrollTextContainer}>
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>C</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>L</span>
            <span className={styles.letter}>L</span>
          </div>
          <div className={styles.laserLine}></div>
        </div>
      </div>

      {/* SEZIONE INFERIORE: STRUTTURA */}
      <div className={styles.structureSection}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.heroText}>STRUTTURA</h2>
            <div className={styles.lineSeparator}></div>
            <p className={styles.quote}>
              Codice pulito, architetture scalabili e performance ottimizzate.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};