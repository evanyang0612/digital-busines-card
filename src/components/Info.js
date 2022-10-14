import React from "react";
import Photo from "../img/photo.jpg";
import email from "../img/Icon.png";
import linkedin from "../img/Vector.png";

export default function Info() {
  return (
    <div className="info">
      <img className="info-image" src={Photo} alt="info" />
      <h1 className="info-name">Evan Yang</h1>
      <h3 className="info-description">Front end Developer</h3>
      <a className="info-website" href="https://medium.com/@evan_yang">
        evanyang.website
      </a>
      <div className="button-flex">
        <a href="mailto:blacksheet0612@gmail.com">
          <button className="button button-email">
            <img src={email} alt="email" />
            <span className="button-text--email">Email</span>
          </button>
        </a>
        <a href="www.linkedin.com/in/evanyang0612">
          <button className="button button-linkedin">
            <img src={linkedin} alt="linkedin" />
            <span className="button-text--linkedin">Linkedin</span>
          </button>
        </a>
      </div>
    </div>
  );
}
