import { useEffect, useState } from "react";
import styles from "./carosel.module.scss";

import screen1 from './img.carosel/screen-DCommedia.png';
import screen2 from './img.carosel/Screenshot-Inkly.png';


const slides = [
  {
    image: screen1,
    title: "Divina Commedia",
    description: "Stack: React · Vite · SCSS · HTML5 · Responsive Design · UI Library · CSS Module"
  },
  {
    image: screen2,
    title: "Inkly",
    description: "Stack: React · Vite · SCSS · HTML5 · Responsive Design · CSS Module"
  },
 


];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper}>
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`${styles.image} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.info}>
        <h3>{slides[index].title}</h3>
        <p>{slides[index].description}</p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
