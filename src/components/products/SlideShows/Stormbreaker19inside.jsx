import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19des.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%206.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%207.webp"
];

const layoutImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB19%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19laydes.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB19%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB19%20Layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp"
];

const interiorImages = [
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%201.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%202.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%203.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%204.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%205.webp", 
  "https://deluxcaravan.b-cdn.net/assets/19/19%20in%206.webp"
];

function Strombreaker19inside() {
  return (
    <UniversalCaravanGallery
      modelName="Stormbreaker 19'6"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Strombreaker19inside;
