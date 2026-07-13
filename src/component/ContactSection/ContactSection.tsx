import React from "react";
import { ContactForm } from "./contactForm";
import styles from "./ContactSection.module.scss";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";


const faderUp = {
  hidden: { opacity: 0, y: 40 },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};


const ContactSection: React.FC = () => {

  return (

    <>
    
      <aside className={styles.about2LeftContent}>
        <span className={styles.aboutNumber}>
          03
        </span>

        <span className={styles.aboutVertical}>
          CONTACT
        </span>
      </aside>



      {/* =========================
         CONTACT GRID LAYOUT
         Struttura principale a colonne
      ========================= */}
      <div className={styles.container2}>


        {/* =========================
           CONTACT INFORMATION
           Informazioni e collegamenti
        ========================= */}
        <motion.div
          className={styles.rightCol}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={faderUp}
        >


          {/* Introduzione della sezione */}
          <header className={styles.textBlock}>

            <h2 className={styles.contactHeading}>
              Let's build something{" "}
              <span className={styles.gradientText}>
                iconic
              </span>.
            </h2>


            <p className={styles.contactDescription}>
              Hai un progetto, un'idea o un'opportunità di collaborazione?
              Scrivimi ora per strutturare insieme una soluzione ad alte performance.
            </p>

          </header>



          {/* =========================
             CONTACT DETAILS
             Informazioni di contatto
          ========================= */}
          <address className={styles.interactiveLinks}>


            {[
              {
                icon: <FiMail />,
                label: "Email",
                value: "alexboghian.employment@gmail.com",
                href: "mailto:alexboghian.employment@gmail.com"
              },

              {
                icon: <FiPhone />,
                label: "Telefono",
                value: "+39 334 272 1529",
                href: "tel:+393342721529"
              },

              {
                icon: <FiMapPin />,
                label: "Posizione",
                value: "Torino, Italia",
                href: null
              }

            ].map((item, index) => {

              const ContentElement = item.href ? "a" : "div";


              return (

                <motion.div
                  key={index}
                  className={styles.interactiveRow}
                  whileHover={{ x: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >

                  <ContentElement
                    href={item.href || undefined}
                    className={styles.rowLink}
                    target={
                      item.href
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                  >

                    <div className={styles.rowMain}>

                      <span className={styles.rowIcon}>
                        {item.icon}
                      </span>


                      <div className={styles.rowDetails}>

                        <span className={styles.rowLabel}>
                          {item.label}
                        </span>

                        <span className={styles.rowValue}>
                          {item.value}
                        </span>

                      </div>

                    </div>


                    {item.href && (

                      <div className={styles.arrowContainer}>

                        <FiArrowRight
                          className={styles.actionArrow}
                        />

                      </div>

                    )}

                  </ContentElement>


                </motion.div>

              );

            })}


          </address>


        </motion.div>




        {/* =========================
           CONTACT FORM
           Area del modulo contatti
        ========================= */}
        <motion.div
          className={styles.leftCol}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={faderUp}
        >

          <div className={styles.formPane}>

            <div className={styles.formContainer}>

              <ContactForm />

            </div>

          </div>

        </motion.div>


      </div>


    </>

  );
};


export default ContactSection;