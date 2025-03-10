import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.css";
import { gsap } from "gsap";

function VideoLanding() {
  const revealUpAnimation = useMemo(() => {
    return () => {
      gsap.utils.toArray(".revealUp").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              end: "bottom 20%",
              markers: false, // Set this to true for debug markers
            },
          }
        );
      });
    };
  }, []);

  useEffect(() => {
    revealUpAnimation();
    
    // Add slide-in animation for Australian Made banner
    gsap.fromTo(
      ".australian-made-banner",
      { x: -100, opacity: 0 },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }, [revealUpAnimation]);

  return (
    <div className="landing_Page_video_container">
      <div className="video-overlay">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="landing_page_video"
            
          >
            <source
              src="https://deluxcaravan.b-cdn.net/assets/Landingpagevideo2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-overlay">
          <div className="australian-made-banner">
            <span>AUSTRALIAN MADE</span>
          </div>
          <h1 className="revealUp">DELUXE CARAVANS</h1>
          <div className="link-overlay revealUp">
            <Link to="/blog" className="btn hover-border-1">
              Latest Insights
            </Link>
            <Link to="/appointment" className="btn hover-border-1">
              Schedule a visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLanding;
