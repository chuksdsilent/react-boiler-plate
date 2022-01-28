import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import MainContent from "../components/MainContent";
import { UserServices } from "../../services/UserService";
import React, { useState } from "react";
import { info, success } from "../../utils/Notifications";

const AddFund = (e) => {
  const [amount, setAmount] = useState({});
  const handleChange = (e) => {
    setAmount((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log("amount is ", amount);
    if (amount.amount > 0) {
      UserServices.addFund(amount)
        .then((response) => {
          if (response.data.success) {
            success(response.data.message, "top-right", 5000);
          }
        })
        .catch((error) => {
          info(error.response.data.message, "top-right", 5000);
        })
        .finally(() => {
          console.log("finished");
        });
      return;
    }
    info("Enter a valid Number", "top-right", 5000);
  };
  return (
    <div className="__add_fund">
      <Navbar />
      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <MainContent>
            <div className="container">
              <div className="d-flex justify-content-center align-items-center">
                <div className="width-card">
                  <div className="card ">
                    <div className="card-header">
                      <h3 className="display-5"> Add Fund</h3>
                    </div>
                    <div className="card-body">
                      <div className="form-group mb-4">
                        <label htmlFor="Amount">Amount</label>
                        <input
                          type="number"
                          name="amount"
                          value={amount.amount}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MainContent>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFund;
