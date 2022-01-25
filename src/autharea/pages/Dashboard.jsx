import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import TableContent from "../components/TableContent";
const Dashboard = () => {
  return (
    <div className="__dashboard">
      <Navbar />

      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="__main-content">
            <TableContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
