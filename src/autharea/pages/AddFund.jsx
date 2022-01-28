import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import MainContent from "../components/MainContent";
import { UserServices } from "../../services/UserService";
import React, { useState, useEffect } from "react";
import { info, success } from "../../utils/Notifications";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
const AddFund = (e) => {
  const [amount, setAmount] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const transaction_id = params.id;
  const user_id = useSelector((state) => state.user.user.id);
  // useEffect(() => {}, [user_id]);
  const handleChange = (e) => {
    setAmount((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  console.log("user id is ", user_id);
  const handleSubmit = () => {
    setLoading(true);
    const formValues = {
      amount: amount.amount,
      transaction_id,
      user_id,
    };
    if (amount !== null && amount.amount > 0) {
      UserServices.addFund(formValues)
        .then((response) => {
          if (response.data.success) {
            success(response.data.message, "top-right", 5000);
            // navigate("/user/transaction/pending");
          }
        })
        .catch((error) => {
          info(error.response.data.message, "top-right", 5000);
        })
        .finally(() => {
          setLoading(false);
          setAmount({ amount: "" });
        });
      return;
    }
    info("Enter a valid Number", "top-right", 5000);
    setLoading(false);
  };
  return (
    <div className="__add_fund">
      <ToastContainer />
      <Spin spinning={loading} delay={500}>
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
      </Spin>
    </div>
  );
};

export default AddFund;
