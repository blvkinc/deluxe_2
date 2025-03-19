import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%201.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%202.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%203.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%204.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%205.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%206.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%207.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%208.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%209.webp"
];

const layoutImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp"
];

const interiorImages = [
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204.webp",
  "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205.webp"
];

function Eclipse21inside() {
  return (
    <UniversalCaravanGallery
      modelName="Eclipse 21'6"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Eclipse21inside; 