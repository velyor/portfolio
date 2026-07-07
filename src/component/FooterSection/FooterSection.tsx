import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GoldLogo from '../GoldLogoSection/GoldLogoSection'; // Import del logo dalla tua nuova cartella
import styles from './FooterSection.module.scss';

export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  const menuItems = [
    { name: 'Home', href: '#home', num: '01' },
    { name: 'About', href: '#about', num: '02' },
    { name: 'Projects', href: '#project', num: '03' },
    { name: 'Contact', href: '#contact', num: '04' }
  ];

  return (
    <div className={styles.perspectiveWrapper} ref={containerRef}>
      
      {/* SEZIONE NAVIGAZIONE IN ALTO A DESTRA */}
      <div className={styles.overlapBelt}>
        <div className={styles.beltStructure}>
          <nav className={styles.rightOverlapMenu}>
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className={styles.menuOverlapLink}>
                <span className={styles.linkIndex}>{item.num}</span>
                <span className={styles.linkName}>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* CORPO DEL FOOTER RIGOROSO */}
      <motion.footer style={{ opacity, y }} className={styles.sobrioFooter}>
        <div className={styles.mainArchitectureGrid}>
          
          {/* COLONNA SINISTRA: TITOLO, CONTATTI E SOCIAL */}
          <div className={styles.leftMainContent}>
            <div className={styles.metaIdentity}>
              <span className={styles.subtitleLabel}>STUDIO</span>
              <h3>Velyor Studio</h3>
              <p className={styles.locationText}>Torino, IT — Available for remote contracts</p>
            </div>
            
            {/* BLOCCO CONTATTI STRUTTURATO */}
            <div className={styles.structuredContactBlock}>
              <div className={styles.contactRow}>
                <span className={styles.rowLabel}>Email</span>
                <a href="mailto:alexboghian.employment@gmail.com" className={styles.interactiveLink}>
                  alexboghian.employment@gmail.com
                </a>
              </div>
              
              <div className={styles.rowDivider}></div>
              
              <div className={styles.contactRow}>
                <span className={styles.rowLabel}>Phone</span>
                <a href="tel:+393342721529" className={styles.interactiveLink}>
                  +39 334 2721529
                </a>
              </div>
            </div>

            {/* SOCIAL TORNATI SOTTO I CONTATTI */}
            <div className={styles.socialRowBlock}>
              <a href="https://github.com/velyor" target="_blank" rel="noreferrer" className={styles.expandingSocialLink}>
                GitHub
                <span className={styles.underlineBeam}></span>
              </a>
              <a href="https://www.linkedin.com/in/alexandru-boghian-135929390/" target="_blank" rel="noreferrer" className={styles.expandingSocialLink}>
                LinkedIn
                <span className={styles.underlineBeam}></span>
              </a>
            </div>
          </div>

          {/* COLONNA DESTRA: STRUTTURA PERFETTAMENTE BILANCIATA AL CENTRO */}
          <div className={styles.rightMainContent}>
            <div className={styles.centeredVisualStack}>
              
              {/* Istanza del componente esterno */}
              <GoldLogo />

              <p className={styles.brandManifesto}>
                Una raccolta dei miei progetti, delle 
                tecnologie che utilizzo e del mio approccio 
                allo sviluppo di esperienze web moderne.
              </p>

            </div>
          </div>

        </div>

        {/* CHIUSURA INFERIORE */}
        <div className={styles.bottomMetaRow}>
          <p>© {new Date().getFullYear()} Velyor Studio. All rights reserved.</p>
          
          {/* BACK TO TOP CON ANIMAZIONE DI ATTENZIONE */}
          <motion.p 
            className={styles.techSpecsLabel} 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            animate={{ 
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
          >
            BACK TO TOP ↑
          </motion.p>
        </div>
      </motion.footer>

    </div>
  );
}