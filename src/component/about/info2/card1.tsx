import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./card2.css";

import imgLeft from "@/imm.portfolio/img.1.jpg";
import imgRight from "@/imm.portfolio/img.3.jpg";

/* ===================== */
/* Typing Effect */
/* ===================== */

const TypingText: React.FC<{ text: string; speed?: number; start?: boolean }> = ({
  text,
  speed = 35,
  start = false,
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return <p className="hero-paragraph">{displayed}</p>;
};

/* ===================== */
/* Animation Variants */
/* ===================== */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ===================== */
/* Component */
/* ===================== */

const AboutStats: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <motion.section
      className="about-hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setStartTyping(true)}
    >
      {/* Titolo principale */}
      <motion.span className="hero-title" variants={fadeUp}>
        EX · FUNDAMENTIS · FORMA
      </motion.span>

      <div className="hero-images-container">
        {/* SINISTRA */}
        <motion.figure className="img-left" variants={slideLeft}>
          <motion.span
            className="img-title"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            Aeterna et Moderna
          </motion.span>

          <img src={imgLeft} alt="Design architettonico sinistro" />
        </motion.figure>

        {/* DESTRA */}
        <motion.figure className="img-right" variants={slideRight}>
          <img src={imgRight} alt="Design architettonico destro" />
        </motion.figure>
      </div>

      {/* Testo */}
      <motion.div className="hero-text-container" variants={fadeUp}>
        <TypingText
          text="Struttura, coerenza e usabilità guidano ogni mia scelta progettuale."
          start={startTyping}
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutStats;