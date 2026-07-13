import "./AboutSection2.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Info from "./info/info";

export default function AboutSection2() {

  const fullText = `Sviluppatore front-end specializzato nella creazione di interfacce moderne, pulite e performanti.
Lavoro con un approccio chiaro e strutturato: definisco ciò che serve, progetto componenti solidi e
trasformo idee in soluzioni affidabili, veloci e semplici da usare.`;

  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);


  useEffect(() => {
    if (!startTyping) return;

    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(typing);
      }

    }, 35);

    return () => clearInterval(typing);

  }, [startTyping]);


  return (

    <div className="about2">

      {/* =========================
         LEFT SIDE
         Etichetta laterale della sezione
      ========================= */}
      <motion.aside
        className="about2-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
      >

        <div className="about2-left-content">
          <span className="about-number">01</span>
          <span className="about-vertical">ABOUT</span>
        </div>

      </motion.aside>


      {/* =========================
         RIGHT CONTENT
         Contenuto principale About
      ========================= */}
      <div className="about2-right">


        {/* =========================
           INTRODUCTION
           Titolo e descrizione personale
        ========================= */}
        <motion.header
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setStartTyping(true)}
        >

          <h2 className="titleAbout">
            About Me
          </h2>

          <p>
            {text}
          </p>

        </motion.header>



        {/* =========================
           IMAGE AREA
           Elemento visivo della sezione
        ========================= */}
        <motion.figure
          className="about-image"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />



        {/* =========================
           EXTRA INFORMATION
           Competenze e informazioni aggiuntive
        ========================= */}
        <div className="about-details">

          <Info />

        </div>


      </div>

    </div>

  );
}