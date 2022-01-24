import React from "react";
import { FooterStyle } from "../styles/components/FooterStyle";
import { Row, Col } from "antd";
import Logo from "./Logo";
import Copywright from "./Copywright";
const Footer = () => {
  return (
    <FooterStyle>
      <Row>
        <Col xl={5} xs={24}>
          <div className="logo">
            <Logo />
          </div>
        </Col>
        <Col xl={12} xs={24}>
          <div className="ml-3">
            <h4 style={{ marginBottom: 20 }}>ABOUT US</h4>
            <div>
              EscrowLock is the trusted escrow payment service company that is
              widely used to add buyer-protection or seller-protection to
              transactions. <br />
              EscrowLock’s eCommerce and escrow platform acts as an independent
              third-party to receive payment from the buyer, for onward release
              to the seller when the buyer has successfully received transacted
              goods/services in agreed condition. <br />
              This enhances trust,safety and security in business deals, and
              ensures protection against fraud or scam for the parties involved.
              <Copywright />
            </div>
          </div>
        </Col>
        <Col xl={7} xs={24}>
          <div className="social">
            <h4>SOCIAL</h4>
            <hr />
            <div className="img-social">
              <div>
                <img src={require("../../assets/images/facebook.png")} alt="" />
              </div>
              <div style={{ backgroundColor: "#818a91" }}>
                <img
                  src={require("../../assets/images/instagram.png")}
                  alt=""
                />
              </div>
              <div>
                <img src={require("../../assets/images/linkedin.png")} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </FooterStyle>
  );
};

export default Footer;
