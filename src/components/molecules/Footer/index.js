import React from "react";
import { Link } from "react-router-dom";
import { ICInstagram, ICYouTube, LogoGenerusKoding } from "../../../assets";
import "./footer.scss";

const Icon = ({ img, link }) => {
  return (
    <div className="icon-wrapper">
      <Link to={{ pathname: link }} target="_blank">
        <img className="icon-medsos" src={img} alt="icon" />
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoGenerusKoding} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon
            img={ICInstagram}
            link="https://www.instagram.com/generuskoding"
          />
          <Icon img={ICYouTube} link="https://www.youtube.com/@generuskoding" />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
