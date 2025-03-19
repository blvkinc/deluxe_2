import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import _ from "lodash";
import "./Header.css";
import Navbar from "./mobileNavbar/Navbar";

const Header = () => {
  const location = useLocation();
  const isCustomHeaderPage =
    location.pathname === "/maintenance" ||
    location.pathname === "/warranty" ||
    location.pathname === "/Xptec";

  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset || 0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = _.debounce(() => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      
      // Handle header visibility
      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) 
        || currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
      
      // Handle background color change
      setIsScrolled(currentScrollPos > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Handle resize
  useEffect(() => {
    const handleResize = _.debounce(() => {
      setIsMobile(window.innerWidth <= 1200);
      if (window.innerWidth > 1200) {
        setIsMobileMenuOpen(false);
      }
    }, 200);
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show header when mouse is near top
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setVisible(true);
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMenuEnter = useCallback((menu) => {
    setActiveMenu(menu);
  }, []);

  const handleMenuLeave = useCallback(() => {
    setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Check if the mobile navbar component exists to avoid errors
  const renderMobileNavbar = () => {
    try {
      return <Navbar />;
    } catch (error) {
      console.error("Error rendering mobile navbar:", error);
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          Mobile menu unavailable
        </div>
      );
    }
  };

  return (
    <>
      {isMobile ? (
        renderMobileNavbar()
      ) : (
        <div className="header-container">
          <header
            className={`header ${visible ? "" : "hidden"} ${
              isScrolled ? "scrolled" : ""
            } ${isCustomHeaderPage ? "custom-header" : ""} ${
              activeMenu ? "menu-open" : ""
            }`}
          >
            {/* Logo */}
            <div className="header-logo">
              <Link to="/">
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                  alt="Deluxe Caravan Logo"
                  className="header-logo-img"
                />
              </Link>
            </div>

            {/* Center Navigation */}
            <nav className="header-nav">
              <ul className="menu">
                <li 
                  className={`menu-item ${activeMenu === "family" ? "active" : ""}`}
                  onMouseEnter={() => handleMenuEnter("family")}
                  onMouseLeave={handleMenuLeave}
                >
                  <span className="menu-title">FAMILY</span>
                  {activeMenu === "family" && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        <div className="dropdown-column">
                          <h4>Family Off-Road</h4>
                          <Link to="/stormbreaker18familyoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/186.webp" alt="Stormbreaker 18'6" />
                            <div>
                              <span>Stormbreaker 18'6</span>
                              <small>$89,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker19familyoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/196.webp" alt="Stormbreaker 19'6" />
                            <div>
                              <span>Stormbreaker 19'6</span>
                              <small>$92,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker21familyoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Stormbreaker 21'6" />
                            <div>
                              <span>Stormbreaker 21'6</span>
                              <small>$94,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker23familyoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp" alt="Stormbreaker 23'11" />
                            <div>
                              <span>Stormbreaker 23'11</span>
                              <small>$96,900</small>
                            </div>
                          </Link>
                          <Link to="/riptide22familyoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp" alt="Riptide 22" />
                            <div>
                              <span>Riptide 22</span>
                              <small>$98,900</small>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown-column">
                          <h4>Family XP-Tech</h4>
                          <Link to="/stormbreaker18familyxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/186.webp" alt="Stormbreaker 18'6" />
                            <div>
                              <span>Stormbreaker 18'6</span>
                              <small>$129,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker19familyxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/196.webp" alt="Stormbreaker 19'6" />
                            <div>
                              <span>Stormbreaker 19'6</span>
                              <small>$132,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker21familyxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Stormbreaker 21'6" />
                            <div>
                              <span>Stormbreaker 21'6</span>
                              <small>$134,900</small>
                            </div>
                          </Link>
                          <Link to="/stormbreaker23familyxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp" alt="Stormbreaker 23'11" />
                            <div>
                              <span>Stormbreaker 23'11</span>
                              <small>$136,900</small>
                            </div>
                          </Link>
                          <Link to="/riptide22familyxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp" alt="Riptide 22" />
                            <div>
                              <span>Riptide 22</span>
                              <small>$138,900</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li 
                  className={`menu-item ${activeMenu === "couples" ? "active" : ""}`}
                  onMouseEnter={() => handleMenuEnter("couples")}
                  onMouseLeave={handleMenuLeave}
                >
                  <span className="menu-title">COUPLES</span>
                  {activeMenu === "couples" && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        <div className="dropdown-column">
                          <h4>Couples Off-Road</h4>
                          <Link to="/eclipse21couplesoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Eclipse 21'6" />
                            <div>
                              <span>Eclipse 21'6</span>
                              <small>$92,900</small>
                            </div>
                          </Link>
                          <Link to="/eclipse22couplesoffroad" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Eclipse 22" />
                            <div>
                              <span>Eclipse 22</span>
                              <small>$98,900</small>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown-column">
                          <h4>Couples XP-Tech</h4>
                          <Link to="/eclipse21couplesxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Eclipse 21'6" />
                            <div>
                              <span>Eclipse 21'6</span>
                              <small>$92,900</small>
                            </div>
                          </Link>
                          <Link to="/eclipse22couplesxptech" className="dropdown-item">
                            <img src="https://deluxcaravan.b-cdn.net/assets/header/216.webp" alt="Eclipse 22" />
                            <div>
                              <span>Eclipse 22</span>
                              <small>$98,900</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li 
                  className={`menu-item ${activeMenu === "resources" ? "active" : ""}`}
                  onMouseEnter={() => handleMenuEnter("resources")}
                  onMouseLeave={handleMenuLeave}
                >
                  <span className="menu-title">RESOURCES</span>
                  {activeMenu === "resources" && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        <div className="dropdown-column">
                          <h4>Resources</h4>
                          <Link to="/about" className="dropdown-item">
                            <div>
                              <span>About Us</span>
                            </div>
                          </Link>
                          <Link to="/blog" className="dropdown-item">
                            <div>
                              <span>Updates</span>
                            </div>
                          </Link>
                          <Link to="/video" className="dropdown-item">
                            <div>
                              <span>Videos</span>
                            </div>
                          </Link>
                          <Link to="/warranty" className="dropdown-item">
                            <div>
                              <span>Warranty Policy</span>
                            </div>
                          </Link>
                          <Link to="/maintenance" className="dropdown-item">
                            <div>
                              <span>Service & Maintenance</span>
                            </div>
                          </Link>
                          <Link to="/tour" className="dropdown-item">
                            <div>
                              <span>Virtual Tours</span>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown-column">
                          <h4>Social</h4>
              <a
                href="https://www.instagram.com/deluxecaravansaustralia/"
                target="_blank"
                rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <img src="https://deluxcaravan.b-cdn.net/assets/icons/instagramh.webp" alt="Instagram" className="social-icon" />
                            <div>
                              <span>Instagram</span>
                            </div>
                          </a>
              <a
                href="https://www.facebook.com/deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <img src="https://deluxcaravan.b-cdn.net/assets/icons/facebookh.webp" alt="Facebook" className="social-icon" />
                            <div>
                              <span>Facebook</span>
                            </div>
                          </a>
              <a
                href="https://twitter.com/CaravansDeluxe"
                target="_blank"
                rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <img src="https://deluxcaravan.b-cdn.net/assets/icons/twitterh.webp" alt="Twitter" className="social-icon" />
                            <div>
                              <span>Twitter</span>
                            </div>
                          </a>
              <a
                href="https://www.tiktok.com/@deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <img src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tokh.webp" alt="TikTok" className="social-icon" />
                            <div>
                              <span>TikTok</span>
                            </div>
                          </a>
              <a
                href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                target="_blank"
                rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <img src="https://deluxcaravan.b-cdn.net/assets/icons/youtubeh.webp" alt="YouTube" className="social-icon" />
                            <div>
                              <span>YouTube</span>
                            </div>
                          </a>
                        </div>
                                          </div>
                          </div>
                    )}
                </li>
              <li className="menu-item">
                <Link to="/Xptec">
                    <span className="menu-title">XP-TECH</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">
                    <span className="menu-title">CONTACT</span>
                </Link>
              </li>
            </ul>
          </nav>

            {/* Right side menu - mobile menu toggle */}
            <div className="right-menu">
              <button className="menu-toggle" onClick={toggleMobileMenu}>
                Menu
              </button>
            </div>
          </header>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <Link to="/" className="mobile-menu-item" onClick={toggleMobileMenu}>
              Home
            </Link>
            <div className="mobile-menu-item">
              Family
              <div className={`mobile-submenu ${isMobileMenuOpen ? "active" : ""}`}>
                <Link to="/familyoffroad" className="mobile-menu-item" onClick={toggleMobileMenu}>
                  Family Off-Road
                </Link>
                <Link to="/familyxptech" className="mobile-menu-item" onClick={toggleMobileMenu}>
                  Family XP-Tech
                </Link>
              </div>
            </div>
            <div className="mobile-menu-item">
              Couples
              <div className={`mobile-submenu ${isMobileMenuOpen ? "active" : ""}`}>
                <Link to="/couplesoffroad" className="mobile-menu-item" onClick={toggleMobileMenu}>
                  Couples Off-Road
                </Link>
                <Link to="/couplesxptech" className="mobile-menu-item" onClick={toggleMobileMenu}>
                  Couples XP-Tech
                </Link>
              </div>
            </div>
            <Link to="/maintenance" className="mobile-menu-item" onClick={toggleMobileMenu}>
              Service & Maintenance
            </Link>
            <Link to="/warranty" className="mobile-menu-item" onClick={toggleMobileMenu}>
              Warranty
            </Link>
            <Link to="/Xptec" className="mobile-menu-item" onClick={toggleMobileMenu}>
              XP-Tech
            </Link>
            <Link to="/contact" className="mobile-menu-item" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
