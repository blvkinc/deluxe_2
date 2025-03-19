import React from "react";
import CaravanGallery from "./CaravanGallery";

// Universal Caravan Gallery component that works with all caravan models
const UniversalCaravanGallery = ({
  modelName,
  exteriorImages = [],
  layoutImages = [],
  interiorImages = [],
  additionalSections = []
}) => {
  // Construct default sections based on standard caravan imagery
  const defaultSections = [
    {
      name: "Exterior",
      images: exteriorImages,
      description: `Explore the premium exterior of the ${modelName} caravan, featuring robust construction, sleek design and innovative features for all your adventures.`
    },
    {
      name: "Layout",
      images: layoutImages,
      description: `Discover the intelligent layout design of the ${modelName}, offering spacious living areas with efficient space utilization.`
    },
    {
      name: "Interior",
      images: interiorImages,
      description: `Step inside the luxurious ${modelName} featuring premium fixtures, comfortable living spaces, and all the modern amenities for a memorable journey.`
    }
  ];

  // Filter out sections with no images
  const validDefaultSections = defaultSections.filter(
    section => section.images && section.images.length > 0
  );

  // Combine default sections with any additional custom sections
  const allSections = [...validDefaultSections, ...additionalSections].filter(
    section => section.images && section.images.length > 0
  );

  return <CaravanGallery sections={allSections} />;
};

export default UniversalCaravanGallery; 