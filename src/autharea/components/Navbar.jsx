import React from "react";
import Logo from "../../noautharea/components/Logo";
import { NavStyle } from "../../noautharea/styles/components/NavStyle";
const Navbar = () => {
  return (
    <NavStyle>
      <div className="__auth-area-navbar __no-auth-desktop">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              {" "}
              <a
                href="https://www.escrowlock.com/"
                style={{ width: "150px !important" }}
              >
                <Logo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

export default Navbar;
