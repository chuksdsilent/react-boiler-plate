import Footer from "../components/Footer";
import React from "react";
import NavBar from "../components/NavBar";
import { TransactionStyle } from "../styles/pages/TransactionStyle";

const Address = ({ goToBankAcount, inputs, onChangeInputs, handleSubmit }) => {
  return (
    <TransactionStyle>
      <div className="__onboarding_password">
        <NavBar />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div style={{ width: "70%" }}>
            <h4>Address</h4>
            <div className="card">
              <div className="card-body">
                <div className="form-group mb-4">
                  <textarea
                    name="address"
                    id=""
                    className="form-control"
                    rows="10"
                    onChange={onChangeInputs}
                    value={inputs.address}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary mb-4 ml-4">
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary mb-4 mr-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </TransactionStyle>
  );
};

export default Address;
