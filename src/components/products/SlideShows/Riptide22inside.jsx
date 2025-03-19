import React from "react";
import UniversalCaravanGallery from "./UniversalCaravanGallery";

const exteriorImages = [
  "https://deluxcaravan.com.au/assets/Rip22/Riptide%20header-min.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%201.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%202.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%203.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%204.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%205.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20ex%206.webp"
];

const layoutImages = [
  "https://deluxcaravan.com.au/assets/Product%20renders/Riptide22layout.webp",
  "https://deluxcaravan.com.au/assets/Product%20renders/Riptide22layouttop.webp",
  "https://deluxcaravan.com.au/assets/Product%20renders/Riptide22layout.webp",
  "https://deluxcaravan.com.au/assets/Product%20renders/Riptide22layouttop.webp"
];

const interiorImages = [
  "https://deluxcaravan.com.au/assets/Rip22/R22%20in%201.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20in%202.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20in%203.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20in%204.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20in%205.webp"
];

// Additional features section
const featuresImages = [
  "https://deluxcaravan.com.au/assets/Rip22/R22%20features%201.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20features%202.webp",
  "https://deluxcaravan.com.au/assets/Rip22/R22%20features%203.webp"
];

const additionalSections = [
  {
    name: "Features",
    images: featuresImages,
    description: "Explore the premium features of the Riptide 22, including innovative technology, high-quality finishes, and versatile living solutions."
  }
];

function Riptide22inside() {
  return (
    <UniversalCaravanGallery
      modelName="Riptide 22"
      exteriorImages={exteriorImages}
      layoutImages={layoutImages}
      interiorImages={interiorImages}
      additionalSections={additionalSections}
    />
  );
}

export default Riptide22inside; 