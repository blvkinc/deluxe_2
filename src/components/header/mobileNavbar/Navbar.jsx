import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  // Main menu visibility states
  const [ourFamilyVisible, setOurFamilyVisible] = useState(false);
  const [ourCouplesVisible, setOurCouplesVisible] = useState(false);
  const [resourcesVisible, setResourcesVisible] = useState(false);

  // Submenu visibility states - Family category
  const [familyOffRoadVisible, setFamilyOffRoadVisible] = useState(false);
  const [familyXpTechVisible, setFamilyXpTechVisible] = useState(false);

  // Submenu visibility states - Couples category
  const [couplesOffRoadVisible, setCouplesOffRoadVisible] = useState(false);
  const [couplesXpTechVisible, setCouplesXpTechVisible] = useState(false);

  // Product visibility states
  const [showStormbreaker, setShowStormbreaker] = useState(false);
  const [showRiptide, setShowRiptide] = useState(false);
  const [showEclipse, setShowEclipse] = useState(false);

  // Icon rotation states
  const [resourcesIconRotation, setResourcesIconRotation] =
    useState("rotate(0deg)");
  const [ourFamilyIconRotation, setOurFamilyIconRotation] =
    useState("rotate(0deg)");
  const [ourCouplesIconRotation, setOurCouplesIconRotation] =
    useState("rotate(0deg)");
  const [familyOffRoadIconRotation, setFamilyOffRoadIconRotation] =
    useState("rotate(0deg)");
  const [familyXpTechIconRotation, setFamilyXpTechIconRotation] =
    useState("rotate(0deg)");
  const [couplesOffRoadIconRotation, setCouplesOffRoadIconRotation] =
    useState("rotate(0deg)");
  const [couplesXpTechIconRotation, setCouplesXpTechIconRotation] =
    useState("rotate(0deg)");
  const [stormbreakerIconRotation, setStormbreakerIconRotation] =
    useState("rotate(90deg)");
  const [riptideIconRotation, setRiptideIconRotation] =
    useState("rotate(90deg)");
  const [eclipseIconRotation, setEclipseIconRotation] =
    useState("rotate(90deg)");

  // Resources menu handlers
  const showResources = () => {
    setResourcesVisible(true);
    setResourcesIconRotation("rotate(90deg)");
    resetOtherMenus("resources");
  };

  const hideResources = () => {
    setResourcesVisible(false);
    setResourcesIconRotation("rotate(0deg)");
  };

  // Family menu handlers
  const showOurFamily = () => {
    setOurFamilyVisible(true);
    setOurFamilyIconRotation("rotate(90deg)");
    resetOtherMenus("family");
  };

  const hideOurFamily = () => {
    setOurFamilyVisible(false);
    setOurFamilyIconRotation("rotate(0deg)");
  };

  // Couples menu handlers
  const showOurCouples = () => {
    setOurCouplesVisible(true);
    setOurCouplesIconRotation("rotate(90deg)");
    resetOtherMenus("couples");
  };

  const hideOurCouples = () => {
    setOurCouplesVisible(false);
    setOurCouplesIconRotation("rotate(0deg)");
  };

  // Family submenu handlers
  const showFamilyOffRoad = () => {
    setFamilyOffRoadVisible(true);
    setFamilyOffRoadIconRotation("rotate(90deg)");
    setFamilyXpTechVisible(false);
    setFamilyXpTechIconRotation("rotate(0deg)");
  };

  const hideFamilyOffRoad = () => {
    setFamilyOffRoadVisible(false);
    setFamilyOffRoadIconRotation("rotate(0deg)");
    setShowStormbreaker(false);
    setShowRiptide(false);
  };

  const showFamilyXpTech = () => {
    setFamilyXpTechVisible(true);
    setFamilyXpTechIconRotation("rotate(90deg)");
    setFamilyOffRoadVisible(false);
    setFamilyOffRoadIconRotation("rotate(0deg)");
  };

  const hideFamilyXpTech = () => {
    setFamilyXpTechVisible(false);
    setFamilyXpTechIconRotation("rotate(0deg)");
    setShowStormbreaker(false);
    setShowRiptide(false);
  };

  // Couples submenu handlers
  const showCouplesOffRoad = () => {
    setCouplesOffRoadVisible(true);
    setCouplesOffRoadIconRotation("rotate(90deg)");
    setCouplesXpTechVisible(false);
    setCouplesXpTechIconRotation("rotate(0deg)");
  };

  const hideCouplesOffRoad = () => {
    setCouplesOffRoadVisible(false);
    setCouplesOffRoadIconRotation("rotate(0deg)");
    setShowEclipse(false);
  };

  const showCouplesXpTech = () => {
    setCouplesXpTechVisible(true);
    setCouplesXpTechIconRotation("rotate(90deg)");
    setCouplesOffRoadVisible(false);
    setCouplesOffRoadIconRotation("rotate(0deg)");
  };

  const hideCouplesXpTech = () => {
    setCouplesXpTechVisible(false);
    setCouplesXpTechIconRotation("rotate(0deg)");
    setShowEclipse(false);
  };

  // Product menu handlers
  const toggleStormbreaker = () => {
    setShowStormbreaker(!showStormbreaker);
    setShowRiptide(false);
    setStormbreakerIconRotation(
      showStormbreaker ? "rotate(90deg)" : "rotate(270deg)"
    );
    setRiptideIconRotation("rotate(90deg)");
  };

  const toggleRiptide = () => {
    setShowRiptide(!showRiptide);
    setShowStormbreaker(false);
    setRiptideIconRotation(showRiptide ? "rotate(90deg)" : "rotate(270deg)");
    setStormbreakerIconRotation("rotate(90deg)");
  };

  const toggleEclipse = () => {
    setShowEclipse(!showEclipse);
    setEclipseIconRotation(showEclipse ? "rotate(90deg)" : "rotate(270deg)");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to reset other menus when opening a new one
  const resetOtherMenus = (currentMenu) => {
    if (currentMenu !== "resources") {
      setResourcesVisible(false);
      setResourcesIconRotation("rotate(0deg)");
    }

    if (currentMenu !== "family") {
      setOurFamilyVisible(false);
      setOurFamilyIconRotation("rotate(0deg)");
      setFamilyOffRoadVisible(false);
      setFamilyXpTechVisible(false);
      setFamilyOffRoadIconRotation("rotate(0deg)");
      setFamilyXpTechIconRotation("rotate(0deg)");
    }

    if (currentMenu !== "couples") {
      setOurCouplesVisible(false);
      setOurCouplesIconRotation("rotate(0deg)");
      setCouplesOffRoadVisible(false);
      setCouplesXpTechVisible(false);
      setCouplesOffRoadIconRotation("rotate(0deg)");
      setCouplesXpTechIconRotation("rotate(0deg)");
    }

    // Reset all product menus
    setShowStormbreaker(false);
    setShowRiptide(false);
    setShowEclipse(false);
    setStormbreakerIconRotation("rotate(90deg)");
    setRiptideIconRotation("rotate(90deg)");
    setEclipseIconRotation("rotate(90deg)");
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleMenu} className="open-button">
        Menu
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="navbar"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <div ref={navbarRef}>
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={toggleMenu}>
                    <Link to="/" className="nav-link">
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                        alt=""
                        height={50}
                      />
                    </Link>
                  </li>

                  {/* FAMILY MENU */}
                  <li className="nav-item">
                    <p className="social" onClick={showOurFamily}>
                      FAMILY{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: ourFamilyIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {ourFamilyVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourFamilyVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className={`social-media-container ${
                              ourFamilyVisible ? "show" : ""
                            }`}
                          >
                            <button
                              onClick={hideOurFamily}
                              className="back-button"
                            >
                              <img
                                src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                alt=""
                                className="lessericon"
                              />{" "}
                              Back
                            </button>

                            <ul className="range-list">
                              {/* FAMILY OFF-ROAD SUBMENU */}
                              <li className="nav-item">
                                <p
                                  className="social"
                                  onClick={showFamilyOffRoad}
                                >
                                  FAMILY OFF-ROAD{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{
                                      transform: familyOffRoadIconRotation,
                                    }}
                                  />
                                </p>

                                <AnimatePresence>
                                  {familyOffRoadVisible && (
                                    <motion.div
                                      className={`social-media-container ${
                                        familyOffRoadVisible ? "show" : ""
                                      }`}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <button
                                        onClick={hideFamilyOffRoad}
                                        className="back-button"
                                      >
                                        <img
                                          src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                          alt=""
                                          className="lessericon"
                                        />{" "}
                                        Back
                                      </button>

                                      <ul className="range-list">
                                        {/* STORMBREAKER PRODUCT */}
                                        <li className="nav-item stormbreaker">
                                          <p
                                            className="social"
                                            onClick={toggleStormbreaker}
                                          >
                                            STORMBREAKER{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform:
                                                  stormbreakerIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showStormbreaker && (
                                              <motion.div
                                                className="submenu stombreaker"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="submenu-list stormbreaker">
                                                  <li>
                                                    <a
                                                      href="/stormbreaker18"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                                                        alt="stormbreaker18"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 18`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $89,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker19"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                                                        alt="stormbreaker19"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 19`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $92,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker21"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                                                        alt="stormbreaker21"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 21`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $94,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker23"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                                                        alt="stormbreaker23"
                                                      />
                                                      <div>
                                                        <p>
                                                          STORMBREAKER 23`11
                                                        </p>
                                                        <p>
                                                          FULL OFF-ROAD: $96,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>

                                        {/* RIPTIDE PRODUCT */}
                                        <li className="nav-item riptide">
                                          <p
                                            className="social"
                                            onClick={toggleRiptide}
                                          >
                                            RIPTIDE{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform: riptideIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showRiptide && (
                                              <motion.div
                                                className="submenu"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="submenu-list stormbreaker">
                                                  <li>
                                                    <a
                                                      href="/riptide22"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                                                        alt="Riptide22"
                                                      />
                                                      <div>
                                                        <p>RIPTIDE 22</p>
                                                        <p>
                                                          FULL OFF-ROAD: $98,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>

                              {/* FAMILY XP-TECH SUBMENU */}
                              <li className="nav-item">
                                <p
                                  className="social"
                                  onClick={showFamilyXpTech}
                                >
                                  FAMILY XP-TECH{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{
                                      transform: familyXpTechIconRotation,
                                    }}
                                  />
                                </p>

                                <AnimatePresence>
                                  {familyXpTechVisible && (
                                    <motion.div
                                      className={`social-media-container ${
                                        familyXpTechVisible ? "show" : ""
                                      }`}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <button
                                        onClick={hideFamilyXpTech}
                                        className="back-button"
                                      >
                                        <img
                                          src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                          alt=""
                                          className="lessericon"
                                        />{" "}
                                        Back
                                      </button>

                                      <ul className="range-list">
                                        {/* STORMBREAKER PRODUCT */}
                                        <li className="nav-item stormbreaker">
                                          <p
                                            className="social"
                                            onClick={toggleStormbreaker}
                                          >
                                            STORMBREAKER{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform:
                                                  stormbreakerIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showStormbreaker && (
                                              <motion.div
                                                className="submenu stombreaker"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="submenu-list stormbreaker">
                                                  <li>
                                                    <a
                                                      href="/stormbreaker18"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                                                        alt="stormbreaker18"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 18`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $89,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker19"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                                                        alt="stormbreaker19"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 19`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $92,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker21"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                                                        alt="stormbreaker21"
                                                      />
                                                      <div>
                                                        <p>STORMBREAKER 21`6</p>
                                                        <p>
                                                          FULL OFF-ROAD: $94,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="/stormbreaker23"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                                                        alt="stormbreaker23"
                                                      />
                                                      <div>
                                                        <p>
                                                          STORMBREAKER 23`11
                                                        </p>
                                                        <p>
                                                          FULL OFF-ROAD: $96,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>

                                        {/* RIPTIDE PRODUCT */}
                                        <li className="nav-item riptide">
                                          <p
                                            className="social"
                                            onClick={toggleRiptide}
                                          >
                                            RIPTIDE{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform: riptideIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showRiptide && (
                                              <motion.div
                                                className="submenu"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="submenu-list stormbreaker">
                                                  <li>
                                                    <a
                                                      href="/riptide22"
                                                      style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                      }}
                                                    >
                                                      <img
                                                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                                                        alt="Riptide22"
                                                      />
                                                      <div>
                                                        <p>RIPTIDE 22</p>
                                                        <p>
                                                          FULL OFF-ROAD: $98,900
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* COUPLES MENU */}
                  <li className="nav-item">
                    <p className="social" onClick={showOurCouples}>
                      COUPLES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: ourCouplesIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {ourCouplesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourCouplesVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className={`social-media-container ${
                              ourCouplesVisible ? "show" : ""
                            }`}
                          >
                            <button
                              onClick={hideOurCouples}
                              className="back-button"
                            >
                              <img
                                src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                alt=""
                                className="lessericon"
                              />{" "}
                              Back
                            </button>

                            <ul className="range-list">
                              {/* COUPLES OFF-ROAD SUBMENU */}
                              <li className="nav-item">
                                <p
                                  className="social"
                                  onClick={showCouplesOffRoad}
                                >
                                  COUPLES OFF-ROAD{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{
                                      transform: couplesOffRoadIconRotation,
                                    }}
                                  />
                                </p>

                                <AnimatePresence>
                                  {couplesOffRoadVisible && (
                                    <motion.div
                                      className={`social-media-container ${
                                        couplesOffRoadVisible ? "show" : ""
                                      }`}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <button
                                        onClick={hideCouplesOffRoad}
                                        className="back-button"
                                      >
                                        <img
                                          src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                          alt=""
                                          className="lessericon"
                                        />{" "}
                                        Back
                                      </button>

                                      <ul className="range-list">
                                        {/* ECLIPSE PRODUCT */}
                                        <li className="nav-item eclipse">
                                          <p
                                            className="social"
                                            onClick={toggleEclipse}
                                          >
                                            ECLIPSE{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform: eclipseIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showEclipse && (
                                              <motion.div
                                                className="submenu eclipse"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="range-list">
                                                  <li
                                                    style={{
                                                      marginBottom: "0px",
                                                    }}
                                                  >
                                                    <a href="/eclipse21">
                                                      ECLIPSE - 21`6FT
                                                    </a>
                                                    <p
                                                      style={{
                                                        color: "black",
                                                        fontSize: "15px",
                                                      }}
                                                    >
                                                      $92,900
                                                    </p>
                                                  </li>
                                                  <li
                                                    style={{
                                                      marginBottom: "0px",
                                                    }}
                                                  >
                                                    <a href="/eclipse22">
                                                      ECLIPSE - 22FT
                                                    </a>
                                                    <p
                                                      style={{
                                                        color: "black",
                                                        fontSize: "15px",
                                                      }}
                                                    >
                                                      $98,900
                                                    </p>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>

                              {/* COUPLES XP-TECH SUBMENU */}
                              <li className="nav-item">
                                <p
                                  className="social"
                                  onClick={showCouplesXpTech}
                                >
                                  COUPLES XP-TECH{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{
                                      transform: couplesXpTechIconRotation,
                                    }}
                                  />
                                </p>

                                <AnimatePresence>
                                  {couplesXpTechVisible && (
                                    <motion.div
                                      className={`social-media-container ${
                                        couplesXpTechVisible ? "show" : ""
                                      }`}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <button
                                        onClick={hideCouplesXpTech}
                                        className="back-button"
                                      >
                                        <img
                                          src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                          alt=""
                                          className="lessericon"
                                        />{" "}
                                        Back
                                      </button>

                                      <ul className="range-list">
                                        {/* ECLIPSE PRODUCT */}
                                        <li className="nav-item eclipse">
                                          <p
                                            className="social"
                                            onClick={toggleEclipse}
                                          >
                                            ECLIPSE{" "}
                                            <img
                                              src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                              alt=""
                                              className="greatericon"
                                              style={{
                                                transform: eclipseIconRotation,
                                              }}
                                            />
                                          </p>
                                          <AnimatePresence>
                                            {showEclipse && (
                                              <motion.div
                                                className="submenu eclipse"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <ul className="range-list">
                                                  <li
                                                    style={{
                                                      marginBottom: "0px",
                                                    }}
                                                  >
                                                    <a href="/eclipse21">
                                                      ECLIPSE - 21`6FT
                                                    </a>
                                                    <p
                                                      style={{
                                                        color: "black",
                                                        fontSize: "15px",
                                                      }}
                                                    >
                                                      $92,900
                                                    </p>
                                                  </li>
                                                  <li
                                                    style={{
                                                      marginBottom: "0px",
                                                    }}
                                                  >
                                                    <a href="/eclipse22">
                                                      ECLIPSE - 22FT
                                                    </a>
                                                    <p
                                                      style={{
                                                        color: "black",
                                                        fontSize: "15px",
                                                      }}
                                                    >
                                                      $98,900
                                                    </p>
                                                  </li>
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </li>
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="nav-item">
                    <p className="social" onClick={showResources}>
                      RESOURCES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: resourcesIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {resourcesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            resourcesVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={hideResources}
                            className="back-button"
                          >
                            <img
                              src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                              alt=""
                              className="lessericon"
                            />{" "}
                            Back
                          </button>
                          <ul className="resources-list">
                            <li>
                              <a href="/about">ABOUT US</a>
                            </li>
                            <li>
                              <a href="/blog">UPDATES</a>
                            </li>
                            <li>
                              <a href="/video">VIDEOS</a>
                            </li>
                            <li>
                              <a href="/warranty">WARRANTY POLICY</a>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="nav-item" onClick={toggleMenu}>
                    <p className="social">
                      <Link to="/tour" className="nav-link">
                        VIRTUAL TOURS
                      </Link>
                    </p>
                  </li>
                  <li className="nav-item" onClick={toggleMenu}>
                    <p className="social">
                      <Link to="/contact" className="nav-link">
                        CONTACT
                      </Link>
                    </p>
                  </li>
                  <li className="nav-item" onClick={toggleMenu}>
                    <ul className="social-media-list">
                      <li>
                        <a
                          href="https://www.instagram.com/deluxecaravansaustralia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/instagramh.webp"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/facebookh.webp"
                            alt="Facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/CaravansDeluxe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/twitterh.webp"
                            alt="Twitter"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tokh.webp"
                            alt="TikTok"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/youtubeh.webp"
                            alt="YouTube"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
            <button onClick={toggleMenu} className="close-button">
              Close
            </button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
