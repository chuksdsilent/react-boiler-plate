import "./assets/styles/General.css";
import Transaction from "./noautharea/pages/Transaction";
import Footer from "./noautharea/components/Footer";
import UserInformation from "./noautharea/pages/UserInformation";
import { Routes, Route } from "react-router-dom";
import Password from "./noautharea/pages/Password";
import axios from "axios";
import JobCompleted from "./noautharea/pages/JobCompleted";
// axios.defaults.baseURL = "http://localhost:8000/api/";
function App() {
  return (
    <div className="App">
      {/* <UserInformation /> */}
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/job-completed" element={<JobCompleted />} />
        <Route path="/email/confirm/:id" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
