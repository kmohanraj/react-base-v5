import { useState } from "react";
import "../assets/styles/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <Link className="logo" to='/'>MySite</Link>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Dashboard</Link>
        <Link to="/branches">Branches</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/users">Users</Link>
        <Link to="#">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
