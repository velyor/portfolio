import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiAlertCircle } from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.1,
    },
  }),
};

const shakeVariants = {
  error: {
    x: [0, -6, 6, -6, 6, 0],
    transition: { duration: 0.4 },
  },
};

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakePrivacy, setShakePrivacy] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);

    if (!value.trim()) {
      setIsEmailInvalid(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailInvalid(!emailRegex.test(value));
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form non trovato");
      return;
    }

    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Controllo email
    if (!email.trim() || !emailRegex.test(email)) {
      setIsEmailInvalid(true);
      setShakeEmail(true);

      setTimeout(() => {
        setShakeEmail(false);
      }, 400);

      hasError = true;
    }

    // Controllo privacy
    if (!privacyAccepted) {
      setShakePrivacy(true);

      setTimeout(() => {
        setShakePrivacy(false);
      }, 400);

      hasError = true;
    }

    if (hasError) return;

    try {
      const result = await emailjs.sendForm(
        "service_ry0w62d",
        "template_x50789y",
        form.current,
        "2FLkTvJF_eXMYqBCT"
      );

      console.log("Email inviata:", result.text);

      alert("Messaggio inviato!");

      // Reset campi
      setName("");
      setEmail("");
      setMessage("");
      setPrivacyAccepted(false);
      setIsEmailInvalid(false);

      form.current.reset();
    } catch (error) {
      console.error("Errore EmailJS:", error);
      alert("Errore nell'invio del messaggio.");
    }
  };

  return (
    <form
      ref={form}
      className={styles.contactForm}
      onSubmit={sendEmail}
    >
      {/* NOME */}
      <motion.div
        className={styles.inputField}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        custom={0}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="name">Il tuo nome</label>

        <span className={styles.focusLine}></span>
      </motion.div>

      {/* EMAIL */}
      <motion.div
        className={`${styles.inputField} ${
          isEmailInvalid ? styles.hasError : ""
        }`}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        custom={1}
        viewport={{ once: true }}
        animate={shakeEmail ? "error" : undefined}
      >
        {shakeEmail && (
          <motion.div
            variants={shakeVariants}
            animate="error"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="email">La tua email</label>

            <span className={styles.focusLine}></span>
          </motion.div>
        )}

        {!shakeEmail && (
          <>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="email">La tua email</label>

            <span className={styles.focusLine}></span>
          </>
        )}

        <AnimatePresence>
          {isEmailInvalid && (
            <motion.span
              className={styles.errorMessage}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              <FiAlertCircle />
              Inserisci un indirizzo email valido
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MESSAGGIO */}
      <motion.div
        className={`${styles.inputField} ${styles.textareaField}`}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        custom={2}
        viewport={{ once: true }}
      >
        <textarea
          name="message"
          id="message"
          placeholder=" "
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <label htmlFor="message">
          Il tuo messaggio...
        </label>

        <span className={styles.focusLine}></span>
      </motion.div>

      {/* PRIVACY */}
      <motion.div
        className={`${styles.privacyContainer} ${
          shakePrivacy ? styles.privacyAlert : ""
        }`}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        custom={3}
        viewport={{ once: true }}
      >
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) =>
              setPrivacyAccepted(e.target.checked)
            }
          />

          <span className={styles.customCheckbox}></span>

          <span className={styles.privacyText}>
            Accetto il trattamento dei dati personali
            secondo la normativa sulla privacy.
          </span>
        </label>
      </motion.div>

      {/* BOTTONE */}
      <motion.div
        className={styles.submitSection}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        custom={4}
        viewport={{ once: true }}
      >
        <button
          type="submit"
          className={styles.premiumSubmit}
        >
          <span className={styles.btnText}>
            Invia la richiesta
          </span>

          <div className={styles.iconCircle}>
            <FiArrowRight className={styles.btnIcon} />
          </div>
        </button>
      </motion.div>
    </form>
  );
}