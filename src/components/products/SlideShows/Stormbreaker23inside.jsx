import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23des.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%206.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%207.webp"
];

const layoutImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB23%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23laydes.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB23%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB23%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp"
];

const interiorImages = [
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/23/23%20in%206.webp"
];

function Strombreaker23inside() {
  return (
    <UniversalCaravanGallery
      modelName="Stormbreaker 23'11"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Strombreaker23inside;
