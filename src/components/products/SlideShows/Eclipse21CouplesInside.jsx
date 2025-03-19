import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse216.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%201.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%202.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%203.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%204.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%205.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20ex%206.webp"
];

const layoutImages = [
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse216Couplelayout.webp",
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse216Couplelayouttop.webp"
];

const interiorImages = [
  "https://deluxcaravan.com.au/assets/E21C/E21C%20in%201.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20in%202.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20in%203.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20in%204.webp",
  "https://deluxcaravan.com.au/assets/E21C/E21C%20in%205.webp"
];

function Eclipse21CouplesInside() {
  return (
    <UniversalCaravanGallery
      modelName="Eclipse 21'6 Couples"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
    />
  );
}

export default Eclipse21CouplesInside; 