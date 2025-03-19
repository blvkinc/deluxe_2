import React, { useState, useEffect, useRef } from "react";
import "./CaravanGallery.css";

const CaravanGallery = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const galleryRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;
      
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, activeSection, activeImage]);

  // Handle swipe gestures
  useEffect(() => {
    const element = isFullscreen ? document.querySelector('.fullscreen-carousel') : galleryRef.current;
    
    if (!element) return;
    
    const onTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };
    
    const onTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      
      if (isLeftSwipe) {
        nextImage();
      } else if (isRightSwipe) {
        prevImage();
      }
    };
    
    element.addEventListener('touchstart', onTouchStart);
    element.addEventListener('touchmove', onTouchMove);
    element.addEventListener('touchend', onTouchEnd);
    
    return () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }, [touchStart, touchEnd, isFullscreen, activeSection, activeImage]);

  // Auto-scroll thumbnails to keep active thumbnail visible
  useEffect(() => {
    if (thumbnailsRef.current && !isTransitioning) {
      const activeThumb = thumbnailsRef.current.querySelector(".thumbnail.active");
      if (activeThumb) {
        thumbnailsRef.current.scrollTo({
          left: activeThumb.offsetLeft - thumbnailsRef.current.clientWidth / 2 + activeThumb.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }, [activeImage, activeSection, isTransitioning]);

  // Auto-play slideshow
  useEffect(() => {
    let slideInterval;
    
    // Only auto-play when not in fullscreen and not user-interacting
    if (!isFullscreen && !isTransitioning) {
      slideInterval = setInterval(() => {
        nextImage();
      }, 5000);
    }
    
    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isFullscreen, isTransitioning, activeSection, activeImage]);

  const openFullscreen = (sectionIndex, imageIndex) => {
    setActiveSection(sectionIndex);
    setActiveImage(imageIndex);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when fullscreen
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const nextImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const currentSectionImages = sections[activeSection].images;
    
    if (activeImage < currentSectionImages.length - 1) {
      setActiveImage(activeImage + 1);
    } else if (activeSection < sections.length - 1) {
      // Move to next section
      setActiveSection(activeSection + 1);
      setActiveImage(0);
    } else {
      // Wrap to first section
      setActiveSection(0);
      setActiveImage(0);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    } else if (activeSection > 0) {
      // Move to previous section
      setActiveSection(activeSection - 1);
      setActiveImage(sections[activeSection - 1].images.length - 1);
    } else {
      // Wrap to last section, last image
      setActiveSection(sections.length - 1);
      setActiveImage(sections[sections.length - 1].images.length - 1);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const changeSection = (index) => {
    if (activeSection !== index) {
      setIsTransitioning(true);
      setActiveSection(index);
      setActiveImage(0);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  return (
    <div className="caravan-gallery" ref={galleryRef}>
      {/* Section Tabs */}
      <div className="gallery-tabs">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`gallery-tab ${activeSection === index ? "active" : ""}`}
            onClick={() => changeSection(index)}
          >
            {section.name}
          </button>
        ))}
      </div>
      
      {/* Main Gallery View */}
      <div className="gallery-main">
        <div className="gallery-showcase">
          {sections[activeSection].images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${activeImage === index ? "active" : ""}`}
              onClick={() => openFullscreen(activeSection, index)}
            >
              <img src={image} alt={`${sections[activeSection].name} ${index + 1}`} />
              <div className="gallery-item-overlay">
                <span>Click to enlarge</span>
              </div>
            </div>
          ))}
          
          <div className="gallery-progress">
            <div className="progress-indicator">
              {activeImage + 1} / {sections[activeSection].images.length}
            </div>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="gallery-thumbnails" ref={thumbnailsRef}>
          {sections[activeSection].images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${activeImage === index ? "active" : ""}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button className="gallery-nav prev" onClick={prevImage} aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="gallery-nav next" onClick={nextImage} aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Description Section */}
      {sections[activeSection].description && (
        <div className="gallery-description">
          <p>{sections[activeSection].description}</p>
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="gallery-fullscreen">
          <div className="fullscreen-content">
            <button className="fullscreen-close" onClick={closeFullscreen} aria-label="Close fullscreen">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="fullscreen-carousel" ref={carouselRef}>
              <img
                src={sections[activeSection].images[activeImage]}
                alt={`${sections[activeSection].name} ${activeImage + 1}`}
                className="fullscreen-image"
              />
            </div>
            
            <div className="fullscreen-info">
              <div className="fullscreen-title">
                {sections[activeSection].name} - Image {activeImage + 1} of {sections[activeSection].images.length}
              </div>
              {sections[activeSection].description && (
                <div className="fullscreen-description">
                  {sections[activeSection].description}
                </div>
              )}
            </div>
            
            <button className="fullscreen-nav prev" onClick={prevImage} aria-label="Previous image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="fullscreen-nav next" onClick={nextImage} aria-label="Next image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            
            {/* Fullscreen thumbnails */}
            <div className="fullscreen-thumbnails">
              {sections[activeSection].images.map((image, index) => (
                <div
                  key={index}
                  className={`fullscreen-thumbnail ${activeImage === index ? "active" : ""}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaravanGallery; 