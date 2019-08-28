import React from "react";
import logo from "../assets/logo.png";
function SearchBox() {
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="Examen Mercadolibre" />
        <form action="/items" method="GET" role="search">
          <input
            type="text"
            aria-label="Ingresá lo que quieras encontrar"
            name="search"
            placeholder="Buscar productos, marcas y más…"
            maxLength="120"
            autoFocus=""
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBox;
