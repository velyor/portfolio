import { useRef } from "react";
import LogoFooter from "./LogoFooter/LogoFooter";
import styles from "./FooterSection.module.scss";

export default function FooterSection() {
  const footerRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "#home", number: "01" },
    { name: "About", href: "#about", number: "02" },
    { name: "Projects", href: "#project", number: "03" },
    { name: "Contact", href: "#contact", number: "04" }
  ];

  return (
    <footer ref={footerRef} className={styles.footer}>
      <nav className={styles.footerNavigation}>
        {menuItems.map((item) => (
          <a key={item.name} href={item.href}>
            <span>{item.number}</span>
            {item.name}
          </a>
        ))}
      </nav>

      {/* Sezione Top ora pulita grazie al componente isolato */}
      <section className={styles.footerTop}>
        <LogoFooter />
      </section>

      {/* STRUTTURA DATI INFERIORE */}
      <section className={styles.footerMiddle}>
        <div className={styles.gridRow}>
          <div className={styles.cell}>
            <span className={styles.tag}>CURRENT AVAILABILITY</span>
            <div className={styles.statusIndicator}>
              <span className={styles.pulse}></span>
              <p>Active for global contracts</p>
            </div>
          </div>
          
          <div className={styles.cell}>
            <span className={styles.tag}>DIRECT INQUIRIES</span>
            <div className={styles.links}>
              <a href="mailto:alexboghian.employment@gmail.com">alexboghian.employment@gmail.com</a>
              <a href="tel:+393342721529">+39 334 2721529</a>
            </div>
          </div>

          <div className={styles.cell}>
            <span className={styles.tag}>INDEX NETWORKS</span>
            <div className={styles.links}>
              <a href="https://github.com/velyor" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/alexandru-boghian-135929390/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Velyor Studio — Turin, Italy.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          UP TO SURFACE ↑
        </button>
      </section>
    </footer>
  );
}