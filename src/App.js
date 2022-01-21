import "./assets/styles/General.css";
import Transaction from "./noautharea/pages/Transaction";
import Footer from "./noautharea/components/Footer";
import UserInformation from "./noautharea/pages/UserInformation";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <UserInformation /> */}
      <Routes>
        <Route path="/" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
