import React, { useEffect, useRef, useState } from "react";
import "./homeSection.css";



const Home: React.FC = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const animate = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      duration = 1200
    ) => {
      let start = 0;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animate(setProjects, 3);
    animate(setYears, 2);
    animate(setSkills, 18);
  }, [startCount]);

  return (
    <div className="home-container">
      

      
      <div className="main-wrapper-columns">
        <div className="left-column">



<div className="container-des">
          <div className="main-container">
            <div className="left-section">
            <p className="p-right">UI/UX <br /> Development</p>
            </div>
            <div className="right-section">
                <p className="p-left">
                <strong   style={{fontFamily: "'Playfair Display', serif", fontSize: "20px",  }}> Alex B.</strong>
                <br />
                Front-end &  Performance
              </p>
            </div>
          </div>
<p className="p-homedescription">Specializzato nella creazione di esperienze utente fluide e intuitive attraverso lo sviluppo Front-End. 
  Trasformo concept grafici in applicazioni web funzionali e accessibili.</p>
</div>




 <div className="buttons">
              <button className="btn-primary">
  <a href="#project">I miei progetti</a>
</button>

<button className="btn-secondary">
  <a href="#about">Chi sono?</a>
</button>

            </div>
          <div className="button-row" ref={statsRef}>
           
           <div className="link-home">

           <a href="https://github.com/velyor" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alexandru-boghian-135929390/" target="_blank" rel="noopener noreferrer">LinkedIn</a>


           </div>

            {/* NUMERI */}
            <div className="stats">
              <div className="stat">
                <span className="number">{projects}</span>
                <span className="label">Progetti</span>
              </div>
              <div className="stat">
                <span className="number">{years}</span>
                <span className="label">Esperienza</span>
              </div>
              <div className="stat">
                <span className="number">{skills}</span>
                <span className="label">Skills</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column"></div>
      </div>
    </div>
  );
};

export default Home;

