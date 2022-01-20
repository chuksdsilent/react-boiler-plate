import "./assets/styles/General.css";
import Transaction from "./noautharea/pages/Transaction";
import Footer from "./noautharea/components/Footer";
import UserInformation from "./noautharea/pages/UserInformation";
function App() {
  return (
    <div className="App">
      <UserInformation />
      {/* <Address /> */}
      {/* <BankAccount /> */}
      {/* <Password /> */}
      {/* <Transaction /> */}
    </div>
  );
}

export default App;
