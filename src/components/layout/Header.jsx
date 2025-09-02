"use client";

import { useState } from "react";
import "../../styles/components/Header.css";

const dropdowns = [
  { label: "", items: ["Historia", "Misión", "Visión"] },
  /*{ label: "ES", items: ["EN"] }, Íconos dinámicos */,
  { label: "Menu", items: ["Email", "Teléfono", "Ubicación"] },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-bar">
            <div className="logo">
              <img src="/assets/icons/LOGO ESCUELA.png" alt="Uni" />
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Que necesitas..." />
            </div>

            <div className="header-buttons">
              {dropdowns.map((dropdown, idx) => (
                <div className="dropdown" key={dropdown.label}>
                  <button
                    className="dropdown-btn"
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  >
                    {dropdown.label}
                    {dropdown.label === "Menu" ? (
                      // Menú hamburguesa/cruz
                      <span className="menu-icon">
                        {openDropdown === idx ? (
                          <svg width="22" height="20" viewBox="0 0 22 22">
                            <line x1="4" y1="4" x2="18" y2="18" stroke="#333" strokeWidth="2"/>
                            <line x1="18" y1="4" x2="4" y2="18" stroke="#333" strokeWidth="2"/>
                          </svg>
                        ) : (
                          <svg width="22" height="22" viewBox="0 0 22 22">
                            <rect y="5" width="22" height="2" rx="1" fill="#333"/>
                            <rect y="10" width="22" height="2" rx="1" fill="#333"/>
                            <rect y="15" width="22" height="2" rx="1" fill="#333"/>
                          </svg>
                        )}
                      </span>
                    ) : (
                      // Flechas dinámicas para "u" y "ES"
                      <span className="icon-with-arrow">
                        {/* Icono de usuario solo para "u" */}
                        {dropdown.label === "" && (
                          <span className="user-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                            </svg>
                          </span>
                        )}
            
                        <span className="arrow-icon">
                          {openDropdown === idx ? (
                            <svg width="16" height="16" viewBox="0 0 16 16">
                              <polyline points="4,10 8,6 12,10" fill="none" stroke="#333" strokeWidth="2"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16">
                              <polyline points="4,6 8,10 12,6" fill="none" stroke="#333" strokeWidth="2"/>
                            </svg>
                          )}
                        </span>
                      </span>
                    )}
                  </button>

                  {/* Menú vertical solo para "ES" */}
                  {openDropdown === idx && idx === 1 && (
                    <div className="dropdown-menu-vertical">
                      {dropdown.items.map(item => (
                        <a href="#" key={item} className="dropdown-item-vertical">{item}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Menú horizontal para los otros botones */}
          {openDropdown !== null && openDropdown !== 1 && (
            <div className="dropdown-menu-horizontal">
              {dropdowns[openDropdown].items.map(item => (
                <a href="#" key={item} className="dropdown-item-horizontal">{item}</a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
