import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./contact.module.scss";


export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_ry0w62d',    // sostituisci con il tuo service ID
      'template_x50789y',   // sostituisci con il tuo template ID
      form.current,
      '2FLkTvJF_eXMYqBCT'     // sostituisci con la tua public key
    )
    .then(
      (result) => {
        console.log('Messaggio inviato', result.text);
        alert('Messaggio inviato!');
        form.current?.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Errore nell\'invio, riprova.');
      }
    );
  };

  return (
<form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Il tuo nome" required />
  <input type="email" name="email" placeholder="La tua email" required />
  <textarea name="message" placeholder="Il tuo messaggio..." rows={5} required />
  <button type="submit">Invia</button>
</form>


  );
}
