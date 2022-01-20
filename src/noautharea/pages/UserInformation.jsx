import React, { useState } from "react";
import Password from "./Password";
import BankAccount from "./BankAccount";
import Address from "./Address";

const UserInformation = () => {
  const [page, setPage] = useState(0);

  const goToBankAcount = () => {
    console.log("go to bank...");
    setPage(1);
  };

  const goToAddress = () => {
    console.log("go to Address...");
    setPage(2);
  };
  const goToPassword = () => {
    console.log("go to Address...");
    setPage(0);
  };
  return (
    <div>
      {page === 0 ? <Password goToBankAcount={goToBankAcount} /> : ""}
      {page === 1 ? (
        <BankAccount goToPassword={goToPassword} goToAddress={goToAddress} />
      ) : (
        ""
      )}
      {page === 2 ? <Address goToBankAcount={goToBankAcount} /> : ""}
    </div>
  );
};

export default UserInformation;
