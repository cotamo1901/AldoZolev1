// Hero.jsx

import Countdown from "../countdown/Countdown";
import "./Hero.css";
import "./../../styles/global.css"

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="img__container">
        <img src="./img/tao.png" alt="img" className="custom-img" />
        <h3 className="custom-heading ">Desde el 25 de diciembre</h3>
      </div>

      <div className="countdown-container">
        <Countdown />
        <div className="image__flyer"></div>
      </div>
    </section>
  );
};
