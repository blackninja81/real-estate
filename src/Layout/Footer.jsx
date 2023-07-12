import React from "react";
import logo from "../../public/Assets/Logo.png";
import footerStyle from "../styles/Footer.module.scss";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer2 = () => {
  return (
    <div>
      <footer>
        <div className={footerStyle.footer}>
          <div className={footerStyle.socials}>
            <div className={footerStyle.social_row}>
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsYoutube />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className={footerStyle.row}>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className={footerStyle.row}>
            INFERNO Copyright © {new Date().getFullYear() } Inferno - All rights reserved 
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;