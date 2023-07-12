"use client";
import Image from "next/image";
import { useState } from "react";
import Navstyle from "../styles/Nav.module.scss"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { NavLinks } from "../constants/Constants";
import logo from "../../public/Assets/Logo.png";
import Link from "next/link.js";

const Navbar1 = () => {
  //   const { theme, toggleTheme } = useContext();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === Navstyle.nav__menu) {      
      setActive(`${Navstyle.nav__menu} ${Navstyle.nav__active}`);
    } else setActive(Navstyle.nav__menu);

    // Icon Toggler
    if (icon === Navstyle.nav__toggler) {
      setIcon(`{${Navstyle.nav__toggler} ${Navstyle.toggle}}`);
    } else setIcon(Navstyle.nav__toggler);
  };
  return (
    <>
      <nav className={Navstyle.nav}>
        <a href="#" className={Navstyle.nav__brand}>
          <Image src={logo} height={100} width={250} alt="logo-image" />
        </a>
        <ul className={active}>
          <li className={Navstyle.nav__item}>
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className={Navstyle.nav__link}
              >
                {link.title}
              </Link>
            ))}
          </li>

          {/* <div className={Navstyle.pin}> */}
            <div className={Navstyle.socials}>
              <a href="" className={Navstyle.icon}>
                <i>
                  <AiFillFacebook />
                </i>
              </a>
              <a href="" className={Navstyle.icon}>
                <i className="fab fa-twitter">
                  <AiFillTwitterSquare />
                </i>
              </a>
              <a href="" className={Navstyle.icon}>
                <i className="fab fa-instagram">
                  <AiFillInstagram />
                </i>
              </a>
            </div>
          {/* </div> */}
        </ul>
        
        <div onClick={navToggle} className={Navstyle.nav__toggler}>
          <div className={Navstyle.line1}></div>
          <div className={Navstyle.line2}></div>
          <div className={Navstyle.line3}></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;