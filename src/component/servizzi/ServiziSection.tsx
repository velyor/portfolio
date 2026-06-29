"use client";

import React, { useState } from 'react';
import styles from './ServiziSection.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Zap, Crown, CheckCircle2, Terminal, Cpu, ShieldCheck } from 'lucide-react';

interface Servizio {
  id: string;
  numero: string;
  titolo: string;
  sottotitolo: string;
  desc: string;
  icon: JSX.Element;
  piano: string;
  dettagli: string;
  features: string[];
  linkWhatsapp: string;
  pianiRate?: { soglia: string; rate: string; dettaglio: string }[];
}

const servizi: Servizio[] = [
  {
    id: "dev",
    numero: "01",
    titolo: "Sviluppo Web High-End",
    sottotitolo: "NEXT.JS ARCHITECTURES",
    desc: "Realizzo la tua presenza online da zero. Un sito moderno, veloce e facile da usare per i tuoi clienti.",
    icon: <Code2 size={18} strokeWidth={1} />,
    piano: "PAGAMENTO FRAZIONATO",
    dettagli: "Per i progetti completi offro la massima flessibilità: la prima rata attiva il lavoro, le successive seguono a cadenza mensile fissa fino al saldo.",
    features: ["Next.js & React Expert", "Design su misura", "SEO Core Web Vitals"],
    linkWhatsapp: "https://wa.me/393342721529?text=Buongiorno.%20Ho%20analizzato%20la%20soluzione%20%22Sviluppo%20Web%20High-End%22%20sul%20suo%20sito%20web%20e%20desidero%20valutare%20l'avvio%20di%20un%20nuovo%20progetto%20sfruttando%20la%20formula%20di%20pagamento%20frazionato.%20%F0%9F%92%BC%E2%9C%A8%20Resto%20in%20attesa%20di%20concordare%20un%20breve%20briefing%20tecnico.%20Un%20cordiale%20saluto.",
    pianiRate: [
      { soglia: "Sotto 1000€", rate: "2 Rate", dettaglio: "Mensili (30% e 70%)" },
      { soglia: "1000€ - 2000€", rate: "3 Rate", dettaglio: "Mensili (33% cad.)" },
      { soglia: "Sopra 2000€", rate: "4 Rate", dettaglio: "Mensili (25% cad.)" }
    ]
  },
  {
    id: "perf",
    numero: "02",
    titolo: "Ritocchi e Performance",
    sottotitolo: "COMPUTATIONAL CLEANUP",
    desc: "Il tuo sito è lento o vuoi cambiare solo una parte? Sistemo il codice e rinfresco il design.",
    icon: <Zap size={18} strokeWidth={1} />,
    piano: "ACCONTO 50%",
    dettagli: "Perfetto per chi ha già un sito ma non è soddisfatto. Metà all'inizio per bloccare la consegna e il restante 50% a lavoro finito.",
    features: ["Ottimizzazione velocità", "Restyling sezioni", "Fix errori tecnici"],
    linkWhatsapp: "https://wa.me/393342721529?text=Buongiorno.%20Desidero%20richiedere%20un'analisi%20strutturale%20per%20il%20servizio%20%22Ritocchi%20e%20Performance%22.%20%F0%9F%9A%80%F0%9F%9B%A0%20La%20finalit%C3%A0%20%C3%A8%20risolvere%20colli%20di%20bottiglia%20su%20un'infrastruttura%20esistente%20e%20ottimizzare%20la%20velocit%C3%A0%20di%20caricamento.%20Un%20cordiale%20saluto."
  },
  {
    id: "vip",
    numero: "03",
    titolo: "Supporto VIP & Gestione",
    sottotitolo: "CLOUD MANAGEMENT",
    desc: "Gestisco io la tecnologia per te. Tu pensa solo al tuo lavoro, ai problemi tecnici ci penso io.",
    icon: <Crown size={18} strokeWidth={1} />,
    piano: "CANONE MENSILE",
    dettagli: "Divento il tuo partner tecnico. Avrai il mio numero WhatsApp diretto per ogni urgenza. Include backup giornalieri e modifiche mensili illimitate.",
    features: ["Assistenza prioritaria", "Backup di sicurezza", "Sito sempre online"],
    linkWhatsapp: "https://wa.me/393342721529?text=Buongiorno.%20Sarei%20interessato%20a%20esternalizzare%20la%20manutenzione%20tecnologica%20tramite%20il%20vostro%20piano%20%22Supporto%20VIP%20%26%20Gestione%22.%20%F0%9F%9B%A1%EF%B8%8F%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%20Richiedo%20maggiori%20informazioni%20circa%20l'attivazione%20della%20partnership%20tecnica%20ricorrente.%20Un%20cordiale%20saluto."
  }
];

export default function ServiziSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        
        {/* HEADER NEUTRO */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Terminal size={11} className={styles.badgeIcon} />
            <span>Capabilities & Infrastructure</span>
          </div>
          <h2 className={styles.mainTitle}>
            Servizi che fanno la <span>differenza</span>
          </h2>
        </div>

        {/* LISTA TIPOGRAFICA MONOCROMATICA */}
        <div 
          className={styles.interactiveList}
          onMouseLeave={() => setActiveId(null)}
        >
          {servizi.map((s) => {
            const isOpen = activeId === s.id;

            return (
              <div 
                key={s.id} 
                className={`${styles.rowWrapper} ${isOpen ? styles.rowOpen : ''}`}
                onMouseEnter={() => setActiveId(s.id)}
              >
                {/* LINEA DI PROGRESSO NEUTRA (BIANCO/GRIGIA) */}
                <div className={styles.topProgressTrack}>
                  {isOpen && (
                    <motion.div 
                      className={styles.progressBarFill}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </div>

                {/* INTERFACCIA RIGA PRINCIPALE */}
                <div className={styles.mainRow}>
                  <div className={styles.leftMetaGroup}>
                    <span className={styles.rowNumber}>{s.numero}</span>
                    <span className={styles.rowSubtitle}>{s.sottotitolo}</span>
                  </div>
                  
                  <h3 className={styles.rowTitle}>{s.titolo}</h3>
                  
                  {/* METADATO MINIMALE STATICO / CINETICO */}
                  <div className={styles.kineticTrigger}>
                    <div className={styles.triggerDot} />
                  </div>
                </div>

                {/* APERTURA CASSETTO CON MIX DI GRIGI E BIANCO */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.drawerOverflow}
                    >
                      <div className={styles.drawerContentInner}>
                        <div className={styles.complexGrid}>
                          
                          {/* COLONNA SINISTRA */}
                          <div className={styles.primaryColumn}>
                            <div className={styles.metaTopRow}>
                              <div className={styles.iconBox}>{s.icon}</div>
                              <span className={styles.paymentBadge}>{s.piano}</span>
                            </div>
                            
                            <p className={styles.mainDesc}>{s.desc}</p>
                            <p className={styles.longDetails}>{s.dettagli}</p>

                            <div className={styles.techStackContainer}>
                              <span className={styles.microLabel}><Cpu size={10} /> SPECIFICHE INTEGRATE:</span>
                              <div className={styles.chipsWrapper}>
                                {s.features.map((feat, i) => (
                                  <span key={i} className={styles.techChip}>{feat}</span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* COLONNA DESTRA */}
                          <div className={styles.secondaryColumn}>
                            
                            {s.pianiRate ? (
                              <div className={styles.rateTableContainer}>
                                <span className={styles.microLabel}><ShieldCheck size={11} /> STRUTTURA COSTI:</span>
                                <div className={styles.rateTable}>
                                  {s.pianiRate.map((p, index) => (
                                    <div key={index} className={styles.tableRow}>
                                      <div className={styles.tableLeft}>
                                        <span className={styles.soglia}>{p.soglia}</span>
                                        <span className={styles.payDetail}>{p.dettaglio}</span>
                                      </div>
                                      <span className={styles.rateCount}>{p.rate}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className={styles.featuresListContainer}>
                                <span className={styles.microLabel}><ShieldCheck size={11} /> GARANZIE:</span>
                                <ul className={styles.displayFeatures}>
                                  {s.features.map((f, index) => (
                                    <li key={index}>
                                      <CheckCircle2 size={13} className={styles.greyCheck} />
                                      {f} — Standard tecnologico ottimizzato.
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {/* PULSANTE AD AMPIEZZA FISSA, MODERNO E DIVERSO */}
                            <div className={styles.buttonWrapper}>
                              <motion.a 
                                href={s.linkWhatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.fixedActionButton}
                                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.8)" }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                <span>Richiedi Piano</span>
                                <span className={styles.arrowIcon}>→</span>
                              </motion.a>
                            </div>

                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.rowBottomLine} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}