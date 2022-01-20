import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { TransactionStyle } from "../styles/pages/TransactionStyle";

const BankAccount = ({ goToPassword, goToAddress }) => {
  return (
    <TransactionStyle>
      <div className="__onboarding_password">
        <NavBar />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div style={{ width: "70%" }}>
            <h4>Bank Account</h4>
            <div className="card">
              <div className="card-body">
                <div className="form-group mb-4">
                  <label htmlFor="Account Number" className="mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="Password" className="mb-2">
                    Select Bank
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-100"
                    style={{ height: "2.5rem" }}
                  >
                    <option value="">Select Bank</option>
                    <option value="">Access Bank</option>
                    <option value="">Zenith Bank</option>
                  </select>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="Password" className="mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={goToPassword}
                    className="btn btn-primary mb-4 ml-2"
                  >
                    Back
                  </button>
                 
                  <button 
                   onClick={goToAddress}className="btn btn-primary mb-4 mr-2">Next</button>
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

export default BankAccount;
