"use client"

import { useState } from "react"
import "../../styles/components/Header.css"

const dropdowns = [
  { label: "", items: ["Email", "Teléfono", "Ubicación"] },
  { label: "Menu", items: ["Historia", "Misión", "Visión"] },
]

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setOpenDropdown(null)
  }

  const handleDropdownToggle = (idx) => {
    // Si la pantalla es móvil y se hace clic en "Menu" (ahora es el índice 1)
    if (window.innerWidth <= 768 && idx === 1) {
      handleMobileMenuToggle()
    } else {
      setOpenDropdown(openDropdown === idx ? null : idx)
    }
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-bar">
            <div className="logo">
              <img src="/assets/icons/LOGO ESCUELA.png" alt="Uni" />
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Consulta aquí..." />
            </div>

            <div className="header-buttons">
              {dropdowns.map((dropdown, idx) => (
                <div className="dropdown" key={idx}>
                  <button className="dropdown-btn" onClick={() => handleDropdownToggle(idx)}>
                    {dropdown.label === "Menu" ? (
                      <span className="menu-icon">
                        {openDropdown === idx || isSidebarOpen ? (
                          <svg width="22" height="20" viewBox="0 0 22 22">
                            <line x1="4" y1="4" x2="18" y2="18" stroke="#333" strokeWidth="2" />
                            <line x1="18" y1="4" x2="4" y2="18" stroke="#333" strokeWidth="2" />
                          </svg>
                        ) : (
                          <svg width="22" height="22" viewBox="0 0 22 22">
                            <rect y="5" width="22" height="2" rx="1" fill="#333" />
                            <rect y="10" width="22" height="2" rx="1" fill="#333" />
                            <rect y="15" width="22" height="2" rx="1" fill="#333" />
                          </svg>
                        )}
                      </span>
                    ) : (
                      <span className="icon-with-arrow">
                        {dropdown.label === "" && (
                          <span className="user-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                            </svg>
                          </span>
                        )}
                        {dropdown.label}
                        <span className="arrow-icon">
                          {openDropdown === idx ? (
                            <svg width="16" height="16" viewBox="0 0 16 16">
                              <polyline points="4,10 8,6 12,10" fill="none" stroke="#333" strokeWidth="2" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16">
                              <polyline points="4,6 8,10 12,6" fill="none" stroke="#333" strokeWidth="2" />
                            </svg>
                          )}
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {openDropdown === 0 && (
            <div className="dropdown-menu-horizontal user-dropdown-menu">
              {dropdowns[0].items.map((item) => (
                <a href="#" key={item} className="dropdown-item-horizontal">
                  {item}
                </a>
              ))}
            </div>
          )}

          {openDropdown === 1 && (
            <div className="dropdown-menu-horizontal desktop-only">
              {dropdowns[1].items.map((item) => (
                <a href="#" key={item} className="dropdown-item-horizontal">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="back-button" onClick={() => setIsSidebarOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver</span>
          </button>
        </div>
        <div className="sidebar-content">
          {dropdowns[1].items.map((item) => (
            <a href="#" key={item} className="sidebar-item" onClick={() => setIsSidebarOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header