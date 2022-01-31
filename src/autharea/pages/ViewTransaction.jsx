import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import MainContent from "../components/MainContent";
import { Spin, Modal, Dropdown, Button, Space, Menu, message } from "antd";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PendingServices } from "../../services/PendingService";
import { useSelector } from "react-redux";

const ViewTransaction = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const params = useParams();
  const user_id = useSelector((state) => state.user.user.id);
  console.log("user selector is ", user_id);
  console.log("the url is ", url);
  useEffect(() => {
    setLoading(true);
    if (user_id) {
      PendingServices.getPendingTransaction(
        `${url}/${params.id}?user_id=${user_id}`
      )
        .then((response) => {
          setTransactions(response.data.data);
        })
        .catch((error) => {})
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user_id, url]);

  return (
    <div className="__view_transaction">
      <Spin spinning={loading} delay={500}>
        <Navbar />
        <div className="d-flex">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <MainContent>
              <div
                className="container-content"
                style={{ width: "65%", margin: "0 auto" }}
              >
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h3>Transaction Details</h3>
                      <button className="btn btn-primary">Completed</button>
                    </div>
                    <hr className="mb-3" />
                    {transactions.map((transaction) => {
                      return (
                        <div>
                          <div className="row mt-4" key={transaction.key}>
                            <div className="col-12 col-md-4">
                              <h5>Category</h5>
                              {transaction.category}
                            </div>
                            <div className="col-12 col-md-4">
                              <h5>Product Name</h5>
                              {transaction.name}
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12 col-md-4">
                              <h5>Cost</h5>
                              {transaction.cost}
                            </div>
                            <div className="col-12 col-md-4">
                              <h5>Due Date</h5>
                              {transaction.due_date}
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12 col-md-4">
                              <h5>Role</h5>
                              {transaction.role}
                            </div>
                            <div className="col-12 col-md-4">
                              <h5>Date</h5>
                              {transaction.created_at}
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <h5>Details</h5>
                              {transaction.details}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default ViewTransaction;
