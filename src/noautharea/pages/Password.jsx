import Footer from "../components/Footer";
import React from "react";
import NavBar from "../components/NavBar";
import { TransactionStyle } from "../styles/pages/TransactionStyle";

const Password = ({ goToBankAcount, inputs, onChangeInputs }) => {
  return (
    <TransactionStyle>
      <div className="__onboarding_password">
        <NavBar />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div style={{ width: "70%" }}>
            <h4>Enter your Password</h4>
            <div className="card">
              <div className="card-body">
                <div className="form-group mb-4">
                  <label htmlFor="Password" className="mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={onChangeInputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="Password" className="mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={inputs.cpassword || ""}
                    onChange={onChangeInputs}
                  />
                </div>
                <div>
                  <button
                    onClick={goToBankAcount}
                    className="btn btn-primary w-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </TransactionStyle>
  );
};

export default Password;
