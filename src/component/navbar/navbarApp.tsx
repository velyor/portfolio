"use client";
import  { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbarMenu";



import "../navbar/navbar.css";



export default function Navbar() {

  
  const [active, setActive] = useState<string | null>(null);

  

  return (



    
    <Menu setActive={setActive}>
      {/*
      <MenuItem item="Servizi" active={active} setActive={setActive}>
      <div className="servizi-link">
        <HoveredLink href="#">Sviluppo Web</HoveredLink>
        <HoveredLink href="#">SEO</HoveredLink>
        <HoveredLink href="#">Consulenza</HoveredLink>
        </div>
      </MenuItem>*/}

<section className="section-navbar">

  

  <section className="section-navbar2">

<MenuItem 
  className="menuH" 
  item="Prossima..." 
  active={active} 
  setActive={setActive}
>
  <div className="cards-container">
    <div className="dev-card">
      <span className="dev-icon">🚧</span>
      <h3 className="dev-title">Prossimamente...</h3>
    </div>
  </div>
</MenuItem>


  <div>
    <p className="p-navbar">Velyor</p>
  </div>

  {/*<MenuItem item="Progetti" active={active} setActive={setActive}>
  <div className="cards-container">
   <ProductItem
      title="Progetto 2"
      description="In fase di sviluppo"
      href="#"
      src={imgDante}
    />
 
    <ProductItem
      title="Progetto 2"
      description="In fase di sviluppo"
      href="#"
      src={imgDante}
    />

       <ProductItem
      title="Progetto 2"
      description="In fase di sviluppo"
      href="#"
      src={imgDante}
    />
 

    <ProductItem
      title="Progetto 2"
      description="In fase di sviluppo"
      href="#"
      src={imgDante}
    />
 
 
  </div>
</MenuItem>*/}


    {/*<MenuItem item="Servizzi" active={active} setActive={setActive}>
    
      <div className="contact-link">
        <HoveredLink href="#about">About</HoveredLink>
        <HoveredLink href="#project">Project</HoveredLink>
        <HoveredLink href="#contact">Contact</HoveredLink>
        </div>
      </MenuItem>*/}

      <MenuItem className="menuH" item="Portfolio"  active={active} setActive={setActive} >
    
      <div className="contact-link">
        <HoveredLink href="#home">Home</HoveredLink>
        <HoveredLink href="#about">About</HoveredLink>
        <HoveredLink href="#project">Project</HoveredLink>
        <HoveredLink href="#contact">Contact</HoveredLink>
        </div>
      </MenuItem>
      </section>



      
      </section>
    </Menu>
  );
}
