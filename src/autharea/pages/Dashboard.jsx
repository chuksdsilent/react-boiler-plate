import Sidebar from "../components/Sidebar";
import Navbar from "../../noautharea/components/NavBar";
import Footer from "../../noautharea/components/Footer";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  return (
    <div className="__dashboard">
      <Navbar />
      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar />
          <div className="col-md-10">
            <div className="container">
              sef
              <MainContent></MainContent>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
