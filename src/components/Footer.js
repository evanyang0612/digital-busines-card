import React from "react";
import twitter from "../img/Twitter Icon.png";
import facebook from "../img/Facebook Icon.png";
import instagram from "../img/Instagram Icon.png";
import github from "../img/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="/#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="/#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="/#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/evanyang0612">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}
