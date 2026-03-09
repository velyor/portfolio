import React from "react";
import {ContactForm} from "./contactForm";
import styles from "./ContactSection.module.scss";

import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (

    <section className={styles.container1}>


<div className={styles.projectInfo}>

       {/*<h2 className={styles.projectTitle1}>Contact</h2>*/}
              <motion.h1
  className={styles.projectTitle1}
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
  CONTACT
</motion.h1>

</div>


    <section className={styles.container2}>

   <div className={styles.rightCol}>
  <h2 className={styles.contactTitle}>Get in touch</h2>

  <p className={styles.contactParagraph}>
   Per progetti, collaborazioni o opportunità professionali legate al front-end, puoi contattarmi qui. 
   Mi interessa lavorare su interfacce curate, accessibili e ben strutturate, dove l’attenzione al 
   dettaglio e la qualità del codice fanno davvero la differenza. Se pensi che ci possa essere un buon 
   fit, scrivimi.
  </p>

<div className={styles.contactDetails}>
  <a href="mailto:costa.alle111@gmail.com" className={styles.contactLink}>
    costa.alle111@gmail.com
  </a>

  <a href="tel:+393342721529" className={styles.contactLink}>
    +39 334 272 1529
  </a>
</div>


         <div className={styles.linkContact}>

           <a href="https://github.com/velyor" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alexandru-boghian-135929390/" target="_blank" rel="noopener noreferrer">LinkedIn</a>


           </div>


</div>


      {/* Colonna sinistra */}
      <div className={styles.leftCol}>
        <h2 className={styles.h1ContactForm}>Next Step</h2>
        <p className={styles.pContact}>
          Compila il modulo qui sotto, ti risponderò al più presto.
        </p>

        <ContactForm />
      </div>


      </section>
    </section>
  );
};

export default ContactSection;
