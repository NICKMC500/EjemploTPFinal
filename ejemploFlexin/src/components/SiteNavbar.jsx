import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoflexin from "../assets/images/logo/logoflexin.jpg";

export default function SiteNavbar() {

  // Efecto de scroll: cambia color del navbar al bajar
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm slide-down reveal">
      <div className="container">
        {/* Marca */}
        <NavLink className="navbar-brand" to="/">
          <img
          src={logoflexin}
          alt="Logo Flexin"
          height="40"
          className="d-inline-block align-text-top rounded-circle me-2"
          />
        </NavLink>

        {/* Botón hamburguesa (responsive) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navFlexin"
          aria-controls="navFlexin"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navFlexin">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ecologia">Ecología</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
