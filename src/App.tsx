import './App.css'

{/* ---Section--- */}
import HomeSection from "./component/HomeSection/homeSection"; 
import About from "./component/AboutSection/AboutSection"; 
import ProjectSection from "./component/ProjectSection/ProjectSection";
import ContactSection from "./component/ContactSection/ContactSection"; 

{/* ---Import Component--- */}
import Navbar from "./component/NavBar/navbarApp"; 


function App() {
  
  return (
    <div>
  
  

{/* ---HOME SECTION--- */}
<div className="container" id='home'>

  <div >
    <Navbar />
  </div>

  <HomeSection />
</div>


{/* ---ABOUT SECTION--- */}
<div className="about" id='about'>
  <About />
</div>


{/* ---PROJECT SECTION--- */}
<div className='project-section' id='project'>
  <div className='container_cardP'>
    <ProjectSection />
  </div>
</div>


{/* ---CONTACT SECTION--- */}
<div className="contact-section" id='contact'>
  <ContactSection />
</div>


{/* ---FOOTER--- */}
<footer className="footer">
  <div className="footer-container">

    
    <div className="footer-section">
      <h2 className="footer-logo">Velyor</h2>
      <p className="footer-description">Frontend developer con focus su interfacce performanti e accessibili.
Realizzo progetti web per consolidare competenze e trasformare idee in esperienze digitali concrete.</p>
    </div>

    
    <div className="footer-section">
      <h3 className="footer-title">Navigazione</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    


    
    <div className="footer-section">
      <h3 className="footer-title">Contatti</h3>
      <p>Email: costa.alle111@gmail.com</p>
      <p>Cellulare: +393342721529</p>
    </div>

  </div>

  
  <div className="footer-bottom">
    © <span id="year"></span> Velyor. Tutti i diritti riservati.
  </div>
</footer>

<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
    </div>
  );
}

export default App;

