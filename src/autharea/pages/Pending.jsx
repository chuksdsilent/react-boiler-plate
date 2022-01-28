import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import TableContent from "../components/TableContent";
import { PendingServices } from "../../services/PendingService";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Dropdown, Button, Space, Menu, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

import MainContent from "../components/MainContent";
import { ToastContainer, toast } from "react-toastify";
import { info, success } from "../../utils/Notifications";

const Pending = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState(false);
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
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },
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
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Dropdown overlay={menu(record)} placement="bottomLeft">
            <Button>More Action</Button>
          </Dropdown>
        </Space>
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

          PendingServices.cancelTransaction(data.key, { cancel: 1 })
            .then((response) => {
              if (response.data.success) {
                success(response.data.message, "top-right", 5000);
                setShowNotification(true);
                setMessage(true);
                resolve();
              }
            })
            .catch((error) => {
              toast("Error: something went wrong");
              reject();
            })
            .finally(() => {
              console.log("finished");
            });
        }).catch(() => info("Oops: something went wrong", "top-right", 10000));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  console.log("transaction is ", transactions);

  const goToAddFundPage = (data) => {
    console.log("the id is ", data);
    navigate(`/user/add-fund/${data.key}`);
  };
  const menu = (data) => (
    <Menu>
      <Menu.Item>
        <button onClick={() => showPropsConfirm(data)} className="btn">
          Cancel
        </button>
      </Menu.Item>
      <Menu.Item>
        <button onClick={() => goToAddFundPage(data)} className="btn">
          Add Fund
        </button>
      </Menu.Item>
      <Menu.Item>
        <button className="btn">View</button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="__pending">
      <Navbar />

      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <MainContent>
              {showNotification ? <ToastContainer /> : ""}
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

export default Pending;
