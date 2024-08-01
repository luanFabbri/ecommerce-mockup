import "./upper-menu.css";
import { useScreenWidth } from "../../utils/screenWidth";
import React, { useState, MouseEvent } from "react";
import { FaShoppingCart, FaCheck, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function UpperMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.className === "overlay") {
      setIsMenuOpen(false);
    }
  };

  const screenWidth = useScreenWidth();

  const handleLogoClick = () => {
    window.location.href = "/"; // Redireciona para a página inicial
  };

  return (
    <div>
      <div className="menu-main" style={{ width: `${screenWidth}px` }}>
        <div className="menu-logo" onClick={handleLogoClick}>
          <div>🏪</div>
          <div
            style={{
              fontSize: 20,
              color: "white",
              paddingBottom: 10,
              fontFamily: "cursive",
            }}
          >
            Combini
          </div>
        </div>
        <div className="searchbar-area">
          <input
            type="text"
            className="search-input"
            placeholder="O que busca?"
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="btn-sandwich" onClick={toggleMenu}>
          <button className="sandwich-icon">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="overlay" onClick={closeMenu}>
          <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-header">
              <p>Bem-vindo, Luan!</p>
            </div>
            <ul className="menu-list">
              {location.pathname !== "/" && (
                <li>
                  <Link to="/" className="menu-button">
                    <FaHome className="menu-icon" />
                    Início
                  </Link>
                </li>
              )}
              {location.pathname !== "/my-products" && (
                <li>
                  <Link to="/my-products" className="menu-button">
                    <FaShoppingCart className="menu-icon" />
                    Meu Produtos
                  </Link>
                </li>
              )}
              {location.pathname !== "/my-categories" && (
                <li>
                  <Link to="/my-categories" className="menu-button">
                    <FaCheck className="menu-icon" />
                    Minhas Categorias
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpperMenu;
