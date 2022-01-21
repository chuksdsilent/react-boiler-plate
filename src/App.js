import "./assets/styles/General.css";
import Transaction from "./noautharea/pages/Transaction";
import Footer from "./noautharea/components/Footer";
import UserInformation from "./noautharea/pages/UserInformation";
import { Routes, Route } from "react-router-dom";
import Password from "./noautharea/pages/Password";

function App() {
  return (
    <div className="App">
      {/* <UserInformation /> */}
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/email/confirm/:id" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
