import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18des.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%206.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20ex%207.webp"
];

const layoutImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18laydes.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp"
];

const interiorImages = [
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/18/18%20in%206.webp"
];

function Strombreaker18inside() {
  return (
    <UniversalCaravanGallery
      modelName="Stormbreaker 18'6"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Strombreaker18inside;