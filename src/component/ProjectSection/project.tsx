import styles from "./project.module.scss";

import img1 from './screenshot/screen-DCommedia.png';
import img2 from './screenshot/Screenshot-Inkly.png';
import img3 from './img/logo.png';

{/* ===SCREENSHOT=== */}
import screen1 from './screenshot/Screenshot-Inkly.png';
import screen2 from './screenshot/Screenshot-Portfolio.png';

import { motion } from "framer-motion";

import ProjectCarousel from "./visivElement/Carosel";

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>

<div className={styles.projectInfo}>

       {/*<h2 className={styles.projectTitle1}>PROJECT</h2>*/}

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
  PROJECT
</motion.h1>


{/*<p className={styles.projectPara}>Selected work focused on quality, structure and performance.
</p>*/}
</div>

    <section className={styles.projectSection3}>

        
  < ProjectCarousel/>


<div className={styles.projectContainer1}>
 


      
   

      <div className= {styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={img3} alt="Divina Commedia" />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Divina Commedia</h3>

            <p className={styles.projectDescription}>
              Sito dedicato alla Divina Commedia 
            </p>

            <a
              href="https://hexion00.github.io/divinacommedia/"
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vai al progetto
            </a>
          </div>
        </div>

        {/* In futuro puoi duplicare questa card qui sotto */}
      </div>

      <div className= {styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={img3} alt="Inkly" />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Inkly</h3>

            <p className={styles.projectDescription}>
              Nuovo progetto in sviluppo
            </p>

            <a 
              href="https://velyor.github.io/inkly/"
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vai al progetto
            </a>
          </div>
        </div>

        {/* In futuro puoi duplicare questa card qui sotto */}
      </div>

      
      <div className= {styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={img3} alt="Divina Commedia" />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Project</h3>

            <p className={styles.projectDescription}>
              Nuovo progetto in sviluppo
            </p>

            <a 
              href="https://example.com"
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prossimamente
            </a>
          </div>
        </div>

        {/* In futuro puoi duplicare questa card qui sotto */}
      </div>

      
      
      <div className= {styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={img3} alt="Divina Commedia" />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Project</h3>

            <p className={styles.projectDescription}>
              Nuovo progetto in sviluppo
            </p>

            <a 
              href="https://example.com"
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prossimamente
            </a>
          </div>
        </div>

        {/* In futuro puoi duplicare questa card qui sotto */}
      </div>       

      

      <div className= {styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={img3} alt="Divina Commedia" />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Project</h3>

            <p className={styles.projectDescription}>
              Nuovo progetto in sviluppo
            </p>

            <a 
              href="https://example.com"
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prossimamente
            </a>
          </div>
        </div>

        {/* In futuro puoi duplicare questa card qui sotto */}
      </div>


</div>


    </section>
    </section>
  );
};

export default ProjectSection;
