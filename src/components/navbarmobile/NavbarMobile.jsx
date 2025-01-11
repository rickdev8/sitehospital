import React, { useState } from "react";
import "./navbarmobile.css"; 
import logo from "../../assets/images/logo.png"; 
import { FiAlignJustify } from "react-icons/fi";

const NavbarMobile = () => {
  console.log('mobile')
  // Estado para alternar entre menu aberto/fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container-mobile">
      {/* Logo */}
      <div className="logo-mobile">
        <img src={logo} alt="Logo" />
      </div>

      {/* Ícone do menu */}
      <div className="menu-icon-mobile" onClick={toggleMenu}>
        <FiAlignJustify size={35} color="#174EB9" />
      </div>

      {/* Itens do menu */}
      <div className={`nav-items-mobile ${isMenuOpen ? "show-mobile" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#partners">Partners</a>
        <a href="#facilities">Facilities</a>
        <a href="#comments">Comments</a>
      </div>
    </div>
  );
};

export default NavbarMobile;
