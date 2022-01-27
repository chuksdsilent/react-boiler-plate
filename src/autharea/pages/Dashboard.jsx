import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import TableContent from "../components/TableContent";
import { PendingServices } from "../../services/PendingService";

import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

import MainContent from "../components/MainContent";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const { confirm } = Modal;

  useEffect(() => {
    setLoading(true);
    PendingServices.allPendingTransaction()
      .then((response) => {
        setTransactions(response.data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "cost",
      dataIndex: "cost",
      key: "cost",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => showPropsConfirm(record)}
          className="btn btn-sm btn-danger"
        >
          Cancel
        </button>
      ),
    },
  ];

  const showPropsConfirm = (data) => {
    confirm({
      title: "Are you sure Cancel this transaction?",
      icon: <ExclamationCircleOutlined />,
      content:
        "This transaction cannot be reversed when cancelled. Do you still want to continue?",
      okText: "Delete",
      okType: "danger",
      okButtonProps: {
        disabled: false,
      },
      cancelText: "No",
      onOk() {
        return new Promise((resolve, reject) => {
          console.log("deleting the", data.key);

          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  console.log("transaction is ", transactions);
  return (
    <div className="__dashboard">
      <Navbar />

      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <MainContent>
              <div className="__main-content">
                <Skeleton loading={loading} active>
                  <TableContent
                    title={"Pending Transactions"}
                    columns={columns}
                    transactions={transactions}
                  />
                </Skeleton>
              </div>
            </MainContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
