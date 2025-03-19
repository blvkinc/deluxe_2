import React from "react";
import "./Xptec.css";
import XpTech from "../products/Specsmenu/XpTech";
import GoToTop from "../functions/GoToTop";

const WarrantyPolicy = React.memo(() => {
  return (
    <div className="xptec-page">
      <div className="xptec-container">
        <div className="xptec-header">
          <h1>XP TECH</h1>
          <h2>Innovative • Timeless • Tough</h2>
        </div>
        
        <div className="xptec-intro">
          <h2>Welcome to the Future of Caravanning</h2>
          
          <p className="tagline">
            A revolutionary composite technology elevating your caravanning experience.
          </p>
          
          <div className="description-block">
            <p>
              Our full composite, XP-TECH is the solution you have been looking for to create a lifetime of memories. 
              Built to withstand the toughest of terrain across Australia with its unique features and upgrades.
            </p>
            
            <p>
              Our XP-TECH offers a range of solutions that your average caravan meranti and aluminium frame constructions can not offer.
            </p>
          </div>

          <p className="section-transition">
            Let's look at some of these technical specifications involved in creating this technology.
          </p>
        </div>

        <div className="xptec-section">
          <div className="image-container">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image1.png"
              alt="CFRT Skin"
              className="feature-image"
            />
          </div>
          <div className="content-container">
            <h2>What is CFRT Skin?</h2>
            <p>
              CFRT skins use the latest thermoplastic properties, laminated by
              multiple layers of continuous fiber-reinforced unidirectional tapes.
              Their toughness is unparalleled, high durability, and has high
              impact damage tolerance.
            </p>
          </div>
        </div>

        <div className="xptec-section reverse">
          <div className="content-container">
            <h2>The Main Advantages of CFRT Skin</h2>
            <ul className="advantages-list">
              <li>Light Weight</li>
              <li>High Strength</li>
              <li>Anti-corrosion</li>
              <li>Electrical Insulation</li>
              <li>Thermal Insulation</li>
            </ul>
          </div>
          <div className="image-container">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image3.png"
              alt="CFRT Skin Advantages"
              className="feature-image"
            />
          </div>
        </div>

        <div className="xptec-section">
          <div className="image-container">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image2.png"
              alt="XPS Foam"
              className="feature-image"
            />
          </div>
          <div className="content-container">
            <h2>XPS Foam</h2>
            <p>
              XPS (extruded polystyrene) is produced using polystyrene resin
              combined with auxiliary materials and polymers. Through a heating,
              catalyzation, and extrusion process, it forms a rigid foam plastic
              board with a uniform, flat surface and a fully closed-cell interior.
              This structure ensures exceptional properties, including low water
              absorption, high compression resistance, low thermal conductivity,
              and superior durability. Lightweight and airtight, XPS is also
              wear-resistant, non-degradable, and built to withstand high
              pressure.
            </p>
          </div>
        </div>

        <div className="xptec-section final-section">
          <div className="content-container full-width">
            <h2>Why Choose Fiberglass Panels for RV Wall Panels?</h2>
            <h3 className="subtitle">IS IT WORTH THE BIG BUCKS?</h3>
            <p>
              XP-TECH panels are advanced sandwich-structured composites,
              combining a fiberglass-reinforced plastic surface with an XPS foam
              core. Unlike aluminum panels, they resist dents due to their high
              surface strength and flexibility. Unlike wooden boards, they are
              moisture-resistant, preventing internal cavity rot for enhanced
              durability.
            </p>
            <h3 className="highlights-title">XP-TECH Highlights:</h3>
            <div className="highlights-container">
              <XpTech />
            </div>
          </div>
        </div>

        <GoToTop />
      </div>
    </div>
  );
});

export default WarrantyPolicy;
