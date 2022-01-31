import React, { useEffect } from "react";
import "./assets/styles/General.css";
import Transaction from "./noautharea/pages/Transaction";
import Footer from "./noautharea/components/Footer";
import UserInformation from "./noautharea/pages/UserInformation";
import { Routes, Route } from "react-router-dom";
import Password from "./noautharea/pages/Password";
import axios from "axios";
import JobCompleted from "./noautharea/pages/JobCompleted";
import Dashboard from "./autharea/pages/Dashboard";
import { UserServices } from "./services/UserService";
import { useDispatch } from "react-redux";
import Pending from "./autharea/pages/Pending";
import AddFund from "./autharea/pages/AddFund";
import ViewTransaction from "./autharea/pages/ViewTransaction";
// axios.defaults.baseURL = "http://localhost:8000/api/";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    UserServices.getUser({ token: localStorage.getItem("token") })
      .then((response) => {
        console.log("user information is", response.data.data);
        dispatch({
          type: "LOGIN",
          payload: {
            user: response.data.data[0],
          },
        });
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  return (
    <div className="App">
      {/* <UserInformation /> */}
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/job-completed" element={<JobCompleted />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/email/confirm/:id" element={<UserInformation />} />
        <Route path="/user/transaction/pending" element={<Pending />} />
        <Route path="/user/transaction/:id" element={<ViewTransaction />} />
        <Route path="/user/add-fund/:id" element={<AddFund />} />
      </Routes>
    </div>
  );
}

export default App;
