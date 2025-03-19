import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse22.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%201.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%202.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%203.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%204.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%205.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%206.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20ex%207.webp"
];

const layoutImages = [
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse22layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse22layouttop.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse22layout.webp",
  "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse22layouttop.webp"
];

const interiorImages = [
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20in%201.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20in%202.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20in%203.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20in%204.webp",
  "https://deluxcaravan.b-cdn.net/assets/E22/E22%20in%205.webp"
];

function Eclipse22inside() {
  return (
    <UniversalCaravanGallery
      modelName="Eclipse 22"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Eclipse22inside; 