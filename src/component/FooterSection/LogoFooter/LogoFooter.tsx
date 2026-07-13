import { motion } from "framer-motion";
import styles from "./LogoFooter.module.scss";

export default function LogoFooter() {
  const titleLetters = ["E", "L", "Y", "O", "R"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { 
        staggerChildren: 0.12 
      }
    }
  };

  const cinematicRingVariants = {
    hidden: { 
      pathLength: 0,
      rotate: -130,
      scale: 0.92,
      opacity: 0
    },
    visible: { 
      pathLength: 1, 
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 3.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const vVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(6px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    }
  };

  const letterVariants = {
    hidden: { x: -25, opacity: 0, filter: "blur(4px)" },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 2.8, 
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div 
      className={styles.quantumBrandContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className={styles.unifiedMonolithText}>
        
        {/* Blocco centrale geometrico ORO: Cerchio + V */}
        <span className={styles.brandMarkCore}>
          <svg className={styles.quantumRingSvg} viewBox="0 0 120 120">
            <defs>
              <linearGradient id="luxuryGold" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#aa771c" />
                <stop offset="35%" stopColor="#fbf5b7" />
                <stop offset="65%" stopColor="#b38728" />
                <stop offset="100%" stopColor="#bf953f" />
              </linearGradient>

              <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <mask id="smoothDissolve">
                <rect width="120" height="120" fill="url(#fadeMask)" />
              </mask>
            </defs>

            <motion.circle
              cx="60"
              cy="60"
              r="52"
              stroke="url(#luxuryGold)"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              mask="url(#smoothDissolve)"
              variants={cinematicRingVariants}
            />
          </svg>

          <motion.span variants={vVariants} className={styles.solidV}>
            V
          </motion.span>
        </span>
        
        {/* Lettere Outline adagiate sulla stessa baseline */}
        {titleLetters.map((letter, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            className={styles.cleanOutlineLetter}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}