import React, {useState} from "react";
import './NavBar';
import './NavBarStyles.css';
// import {FaBars, FaTimes} from "react-icons/fa";
// import {useRef} from "react";

function NavBar() {
    const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    // Icon Toggler
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className="nav">
      <a href="/#" className="nav-brand">
        Lentera Fajar Indonesia
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Tentang Kami
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Artikel Sekolah
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Guru Sekolah
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Kegiatan Sekolah
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;