import React, {useState} from "react";
import './NavBar';
import './NavBarStyles.css';
// import {FaBars, FaTimes} from "react-icons/fa";
// import {useRef} from "react";

function NavBar() {
    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/#" className="nav__brand">
        Lentera Fajar Indonesia
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Tentang Kami
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Artikel
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Guru
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
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