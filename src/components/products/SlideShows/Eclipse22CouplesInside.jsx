import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse22.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%201.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%202.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%203.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%204.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%205.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20ex%206.webp"
];

const layoutImages = [
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse22Couplelayout.webp",
  "https://deluxcaravan.com.au/assets/Product%20renders/Eclipse22Couplelayouttop.webp"
];

const interiorImages = [
  "https://deluxcaravan.com.au/assets/E22C/E22C%20in%201.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20in%202.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20in%203.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20in%204.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20in%205.webp"
];

// Additional features section
const featuresImages = [
  "https://deluxcaravan.com.au/assets/E22C/E22C%20features%201.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20features%202.webp",
  "https://deluxcaravan.com.au/assets/E22C/E22C%20features%203.webp"
];

const additionalSections = [
  {
    name: "Features",
    images: featuresImages,
    description: "Explore the exclusive features of the Eclipse 22 Couples, designed for comfort and convenience during your travels."
  }
];

function Eclipse22CouplesInside() {
  return (
    <UniversalCaravanGallery
      modelName="Eclipse 22 Couples"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
      additionalSections={additionalSections}
    />
  );
}

export default Eclipse22CouplesInside; 