// Hero.jsx

import Countdown from "../countdown/Countdown";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div>
        <img src="../../../public/img/tao.png" alt="img" className="custom-img" />
        <h3 className="custom-heading">
          desde el 25 de diciembre
        </h3>
      </div>

      <div className="countdown-container">
        <div>
          <Countdown />
        </div>
        <div>
          {/* Otro contenido */}
        </div>
      </div>
    </section>
  );
};
