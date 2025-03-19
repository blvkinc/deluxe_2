import React from "react";
import "./HomeComponent.css";

const Partners = () => {
  return (
    <section className="partners-section">
      <h1 className="partners-heading">Our Premium Partners</h1>
      <div className="slider">
        <div className="slide-track">
          {/* First set of logos */}
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/2022_bmpro-logo-hp.webp" alt="BMPRO" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/Enerdrive-logo.webp" alt="Enerdrive" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/logo.webp" alt="Logo" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/dometic.webp" alt="Dometic" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/cruisemaster.webp" alt="Cruisemaster" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/atrv-min.webp" alt="ATRV" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/camec-min.webp" alt="Camec" />
          </div>
          
          {/* Duplicate logos for smooth infinite loop */}
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/2022_bmpro-logo-hp.webp" alt="BMPRO" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/Enerdrive-logo.webp" alt="Enerdrive" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/logo.webp" alt="Logo" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/dometic.webp" alt="Dometic" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/cruisemaster.webp" alt="Cruisemaster" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/atrv-min.webp" alt="ATRV" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/camec-min.webp" alt="Camec" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Partners);
