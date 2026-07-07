import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiAlertCircle, FiCheckCircle, FiLoader, FiCpu } from "react-icons/fi";

// Animazioni di transizione orizzontale tra le schede
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)"
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  })
};

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  // ==========================================
  // STATI DEI DATI DEL FORM
  // ==========================================
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // ==========================================
  // STATI DI INTERFACCIA E ANIMAZIONI SHAKE
  // ==========================================
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakeName, setShakeName] = useState(false);
  const [shakeMessage, setShakeMessage] = useState(false);
  const [shakePrivacy, setShakePrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validazione real-time dell'email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.trim()) {
      setIsEmailInvalid(false);
      return;
    }
    setIsEmailInvalid(!emailRegex.test(value));
  };

  // Funzione ausiliaria per calcolare la qualità dell'input (UX Feature)
  const getMessageAnalysis = () => {
    const len = message.length;
    if (len === 0) return { label: "In attesa", color: "#48484a" };
    if (len < 20) return { label: "Troppo corto", color: "#ff453a" };
    if (len < 100) return { label: "Idea Chiara", color: "#bf953f" };
    return { label: "Ottimo livello di dettaglio", color: "#30d158" };
  };

  // ==========================================
  // LOGICA DEL PULSANTE CONTINUA (SCHEDA 1)
  // ==========================================
  const handleNextStep = () => {
    let hasError = false;

    if (!name.trim()) {
      setShakeName(true);
      setTimeout(() => setShakeName(false), 400);
      hasError = true;
    }

    if (!email.trim() || !emailRegex.test(email)) {
      setIsEmailInvalid(true);
      setShakeEmail(true);
      setTimeout(() => setShakeEmail(false), 400);
      hasError = true;
    }

    // SPOSTATO QUI: Il controllo della privacy ora blocca lo step 1
    if (!privacyAccepted) {
      setShakePrivacy(true);
      setTimeout(() => setShakePrivacy(false), 400);
      hasError = true;
    }

    if (hasError) return;

    setDirection(1);
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setDirection(-1);
    setCurrentStep(1);
  };

  // ==========================================
  // LOGICA DI INVIO DEFINITIVA (SCHEDA 2)
  // ==========================================
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (!message.trim() || message.length < 5) {
      setShakeMessage(true);
      setTimeout(() => setShakeMessage(false), 400);
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "052a4a46-3420-438c-81e5-27fff847a4d9");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("privacy", privacyAccepted ? "Accettata (GDPR)" : "No");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setPrivacyAccepted(false);
        setIsEmailInvalid(false);
        setCurrentStep(1);
        form.current?.reset();
      } else {
        alert(`Errore Server: ${data.message || "Impossibile inviare."}`);
      }
    } catch (error) {
      console.error(error);
      alert("Errore di rete nell'invio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const analysis = getMessageAnalysis();

  return (
    <div className={styles.wizardContainer}>
      
      {/* Barra di progresso superiore */}
      {!isSuccess && (
        <div className={styles.progressTrack}>
          <div className={`${styles.progressBar} ${currentStep === 2 ? styles.halfFull : ""}`}></div>
          <span className={styles.stepCounter}>0{currentStep} / 02</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <form ref={form} className={styles.contactForm} onSubmit={sendEmail} noValidate>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              
              {/* ==========================================
                  SCHEDA 1: DATI PERSONALI + PRIVACY SPOSTATA
                  ========================================== */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={styles.stepWrapper}
                >
                  <div className={styles.stepHeader}>
                    <h3>Raccontami di te</h3>
                    <p>Inserisci i tuoi dati di contatto fondamentali per iniziare.</p>
                  </div>

                  <div className={`${styles.inputField} ${shakeName ? styles.shake : ""}`}>
                    <input
                      type="text"
                      placeholder=" "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label>Il tuo nome e cognome</label>
                    <span className={styles.focusLine}></span>
                  </div>

                  <div className={`${styles.inputField} ${isEmailInvalid ? styles.hasError : ""} ${shakeEmail ? styles.shake : ""}`}>
                    <input
                      type="email"
                      placeholder=" "
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <label>Il tuo indirizzo email</label>
                    <span className={styles.focusLine}></span>
                    
                    <AnimatePresence>
                      {isEmailInvalid && (
                        <motion.span className={styles.errorMessage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <FiAlertCircle /> Email non valida
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Accettazione Privacy integrata qui */}
                  <div className={`${styles.privacyContainer} ${shakePrivacy ? styles.privacyAlert : ""} ${shakePrivacy ? styles.shake : ""}`}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      />
                      <span className={styles.customCheckbox}></span>
                      <span className={styles.privacyText}>
                        Accetto il trattamento dei dati personali secondo la normativa sulla privacy (GDPR).
                      </span>
                    </label>
                  </div>

                  <div className={styles.actionsRow}>
                    <button type="button" className={styles.premiumSubmit} onClick={handleNextStep}>
                      <span className={styles.btnText}>Continua</span>
                      <div className={styles.iconCircle}><FiArrowRight /></div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ==========================================
                  SCHEDA 2: TERMINALE MESSAGGIO (CYBER-HUD)
                  ========================================== */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={styles.stepWrapper}
                >
                  <div className={styles.stepHeader}>
                    <h3>Qual è la tua idea?</h3>
                    <p>Scrivi i dettagli del progetto o le tue richieste di collaborazione.</p>
                  </div>

                  {/* Nuova Interfaccia Messaggio in stile HUD */}
                  <div className={`${styles.cyberMessageConsole} ${shakeMessage ? styles.shake : ""}`}>
                    <div className={styles.consoleHeader}>
                      <div className={styles.badgeNode}>
                        <FiCpu className={styles.nodeIcon} />
                        <span>DATA_STREAM</span>
                      </div>
                      <span className={styles.analysisLabel} style={{ color: analysis.color }}>
                        {analysis.label}
                      </span>
                    </div>

                    <textarea
                      placeholder="// Inserisci qui una descrizione della tua idea visiva o software..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />

                    <div className={styles.consoleFooter}>
                      <div className={styles.liveTrackBar}>
                        <div 
                          className={styles.fillTrack} 
                          style={{ width: `${Math.min(message.length / 2, 100)}%` }}
                        ></div>
                      </div>
                      <span className={styles.counterText}>{message.length} CHARS</span>
                    </div>
                  </div>

                  <div className={styles.actionsRow}>
                    <button type="button" className={styles.backBtn} onClick={handlePrevStep}>
                      <FiArrowLeft /> Torna indietro
                    </button>
                    
                    <button type="submit" className={styles.futuristicSubmit} disabled={isSubmitting}>
                      <span className={styles.btnText}>
                        {isSubmitting ? "Lancio in corso" : "Invia Progetto"}
                      </span>
                      <div className={styles.iconWrapper}>
                        {isSubmitting ? (
                          <FiLoader className={styles.spinnerIcon} />
                        ) : (
                          <FiArrowRight className={styles.arrowIcon} />
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </form>
        ) : (
          /* ==========================================
              SCHERMATA DI SUCCESSO FINALE
              ========================================== */
          <motion.div 
            className={styles.successBlock}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          >
            <div className={styles.successIcon}><FiCheckCircle /></div>
            <h3>Trasmissione Completata</h3>
            <p>Il tuo messaggio ha superato l'atmosfera. Ti risponderò entro le prossime 24 ore.</p>
            <button onClick={() => setIsSuccess(false)} className={styles.resetBtn}>
              Invia un'altra richiesta
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}