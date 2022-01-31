import React from "react";
import check from "../../assets/images/check.png";
import { TransactionStyle } from "../styles/pages/TransactionStyle";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const JobCompleted = () => {
  return (
    <TransactionStyle>
      <div className="__onboarding_password">
        <NavBar />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div style={{ width: "70%" }}>
            <div className="d-flex justify-content-center">
              <img
                src={check}
                alt="completed"
                style={{ height: 150, marginBottom: "1rem" }}
              />
            </div>
            <div className="text-center">
              <h2 className="text-center">Good Job</h2>
              <span style={{ fontSize: 20 }}>
                A mail has been sent to you. Kindly check your email
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </TransactionStyle>
  );
};

export default JobCompleted;
