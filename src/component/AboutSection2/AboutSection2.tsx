import "./AboutSection2.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Info from "./info/info"; 

export default function AboutSection2() {

  const fullText = `
Sviluppatore front‑end specializzato nella creazione di interfacce moderne, pulite e performanti. 
Lavoro con un approccio chiaro e strutturato: definisco ciò che serve, progetto componenti solidi e 
trasformo idee in soluzioni affidabili, veloci e semplici da usare. 
`;

  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(typing);
    }, 35);

    return () => clearInterval(typing);
  }, [startTyping]);

  return (
    <section className="about2">

      <motion.div
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
        
      </motion.div>

      <div className="about2-right">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setStartTyping(true)}
        >
          <h1 className="titleAbout">About Me</h1>
          <p>{text}</p>
        </motion.div>


        <motion.div
          className="about-image"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />



        <div className="about-details">

          {/*<motion.div
            className="detail"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="line"></div>
            <div>
              <span>Education</span>
              <p>Percorso formativo focalizzato su sviluppo web, programmazione e architetture moderne del front‑end.</p>
            </div>
          </motion.div>


          <motion.div
            className="detail"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .2 }}
            viewport={{ once: true }}
          >
            <div className="line"></div>
            <div>
              <span>Specialization</span>
              <p>Sviluppo front‑end con React, Vite, Next.js, JavaScript e interfacce moderne orientate alla qualità e alla stabilità.</p>
            </div>
          </motion.div>


          <motion.div
            className="detail"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .4 }}
            viewport={{ once: true }}
          >
            <div className="line"></div>
            <div>
              <span>Focus</span>
              <p>Progettare interfacce moderne, performanti e chiare, con particolare attenzione all’esperienza d’uso e alla struttura del prodotto.</p>
            </div>
          </motion.div>

        <motion.div
            className="detail"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .4 }}
            viewport={{ once: true }}
          >
            <div className="line"></div>
            <div>
              <span>Skills</span>
              <p>HTML 5, CSS 3, JavaScript, React, Vite, Next.js, Media Queri, <br /> Module.SCSS, Component Integration</p>
            </div>
        </motion.div>*/}

        </div>
        
        < Info />


      </div>

    </section>
  );
}