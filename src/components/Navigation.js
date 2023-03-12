import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const Navigation = () => {
  // Variable link (A revoir : mettre dans un tableau ? )
  const linkAccueil = "/";
  const linkApropos = "/a-propos";
  return (
    <header>
      <nav>
        <h1 className="logo">
          <span>K</span>
          <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5323 35.842V48.4415L36.8732 45.2916V32.6921L31.5323 35.842Z" fill="#FF6060" />
            <path d="M46.2658 20.4633L24.3497 7.67857L12.1945 0.637695L0.22345 21.575L0.407616 41.2153L22.1396 54.0001L24.3497 52.7031V34.1745L34.1106 16.9429L44.0558 22.6867V41.2153L46.2658 39.9184V20.4633Z" fill="#FF6060" />
          </svg>
          <span>sa</span>
        </h1>
        <ul>
          <li>
            <NavLink className="nav_link " to={linkAccueil}>
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink className="nav_link" to={linkApropos}>
              A-propos
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Navigation;
