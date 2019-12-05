import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">MYTUBE</Link>
      </h1>
      <p>
        <input />
        <button>
          <span role="img" aria-label="search-icon">
            🔍
          </span>
        </button>
      </p>
    </header>
  );
}
