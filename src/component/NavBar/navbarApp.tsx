"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../navbar/navbar.css";

type NavbarProps = {
  activeSection: "home" | "about" | "project" | "contact";
};

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [time, setTime] = useState("");

  // Gestione dell'orologio live
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sectionData = [
    { id: "home", number: "00", label: "Home" },
    { id: "about", number: "01", label: "About" },
    { id: "project", number: "02", label: "Project" },
    { id: "contact", number: "03", label: "Contact" },
  ];

  const current = sectionData.find(s => s.id === activeSection) || sectionData[0];

  // Varianti per l'espansione circolare dal punto del menu (in alto a destra)
  const circleOverlayVariants = {
    closed: { 
      clipPath: "circle(0% at 94% 40px)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
    },
    open: { 
      clipPath: "circle(150% at 94% 40px)",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <>
      {/* NAVBAR AD ALTO IMPATTO (Ancorata ai bordi, senza spazi) */}
      <nav className="navbar-fixed-full">
        
        {/* MECCANISMO CONTATORE MODERNO (LEFT) */}
        <div className="nav-counter-modern">
          <div className="digit-slider">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.number}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="current-index"
              >
                {current.number}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <div className="counter-divider"></div>
          
          <div className="label-slider">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.4 }}
                className="current-label"
              >
                {current.label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* HAMBURGER CON EFFETTO ALLARGAMENTO RIGA SU HOVER (RIGHT) */}
        <button 
          className={`luxury-burger-trigger ${isOpen ? "is-active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="burger-text">{isOpen ? "CHIUDI" : "MENU"}</span>
          <div className="burger-lines-wrap">
            <span className="burger-line line-top"></span>
            <span className="burger-line line-bottom"></span>
          </div>
        </button>
      </nav>

      {/* OVERLAY CON REVEAL CIRCOLARE DAL MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="wow-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={circleOverlayVariants}
          >
            <div className="wow-menu-grid">
              
              {/* PANNELLO DI SINISTRA: LIVE TIME & DIRECT LINK */}
              <div className="wow-panel-left">
                <div className="editorial-info-block">
                  <span className="info-tag">Local Time</span>
                  <div className="advanced-clock-wrap">
                    <span className="clock-digits">{time}</span>
                    <span className="clock-tz">CET</span>
                  </div>
                </div>

                <div className="editorial-info-block">
                  <span className="info-tag">Direct Line</span>
                  <a href="mailto:tuamail@esempio.com" className="direct-mail-link">
                    tuamail@esempio.com
                  </a>
                  <p className="reply-text">Per nuove opportunità e richieste di collaborazione.</p>
                </div>
              </div>

              {/* PANNELLO DI DESTRA: NAVIGAZIONE PRINCIPALE */}
              <nav className="wow-panel-right">
                {sectionData.map((item, index) => (
                  <div
                    key={item.id}
                    className="wow-link-container"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`wow-nav-link ${activeSection === item.id ? "wow-active" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="wow-link-meta">
                        <span className="wow-link-num">{item.number}</span>
                      </div>
                      <h2 className="wow-link-title">{item.label}</h2>
                    </a>
                    
                    <div className={`wow-hover-bg ${hoveredIndex === index ? "active-bg" : ""}`} />
                  </div>
                ))}
              </nav>

            </div>

            <div className="wow-menu-footer">
              <span>DESIGN & DIRECTION</span>
              <span>©2026 EDITION</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}