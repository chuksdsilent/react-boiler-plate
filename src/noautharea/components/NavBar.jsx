import React, { useState } from "react";
import { NavStyle } from "../styles/components/NavStyle";
import Logo from "./Logo";
import MenuIcon from "@material-ui/icons/Menu";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <NavStyle>
        <div className="__no-auth-desktop">
          <a href="https://www.escrowlock.com/">
            <Logo />
          </a>
          <a href="https://www.escrowlock.com">HOME</a>
          <a href="https://www.escrowlock.com/about-escrowlock">ABOUT</a>
          <a href="https://www.escrowlock.com/chukwudi/">START TRANSACTION</a>
          <a href="https://www.escrowlock.com/fees-and-charges/">FEES</a>
          <a href="https://www.escrowlock.com/contact-escrowlock/">CONTACT</a>
        </div>
        <div className="__no-auth-mobile">
          <div className="mobile-nav d-flex  align-items-center justify-content-between">
            <a href="https://www.escrowlock.com/" style={{ marginTop: 15 }}>
              <Logo />
            </a>
            <div className="d-flex align-items-center">
              <div
                onClick={() => setShowLinks(!showLinks)}
                style={{ cursor: "pointer", color: "white", fontSize: 20 }}
              >
                <MenuIcon style={{ color: "white", marginRight: ".5rem" }} />
                Menu
              </div>
            </div>
          </div>

          <div
            className={
              showLinks
                ? "nav-links display-links d-flex align-items-center"
                : "no-display-links"
            }
          >
            {showLinks ? (
              <div>
                <a href="https://www.escrowlock.com">HOME</a>
                <a href="https://www.escrowlock.com/about-escrowlock">ABOUT</a>
                <a href="https://www.escrowlock.com/chukwudi/">
                  START TRANSACTION
                </a>
                <a href="https://www.escrowlock.com/fees-and-charges/">FEES</a>
                <a href="https://www.escrowlock.com/contact-escrowlock/">
                  CONTACT
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </NavStyle>
    </div>
  );
};

export default NavBar;
