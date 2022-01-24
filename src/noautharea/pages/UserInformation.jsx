import React, { useState } from "react";
import Password from "./Password";
import BankAccount from "./BankAccount";
import Address from "./Address";

const UserInformation = () => {
  const [page, setPage] = useState(0);
  const [inputs, setInputs] = useState({});
  const goToBankAcount = () => {
    console.log("go to bank...");
    setPage(1);
  };

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    // your code here...
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
    console.log(e.target.name);
  };

  const goToAddress = () => {
    console.log("go to Address...");
    setPage(2);
  };
  const goToPassword = () => {
    console.log("go to Address...");
    setPage(0);
  };
  const handleSubmit = (e) => {
    // your code here...
    e.preventDefault();
    if (inputs.password !== inputs.cpassword)
      console.log("error: password not the same");
    console.log("user information is", inputs);
  };
  return (
    <div>
      {page === 0 ? (
        <Password
          goToBankAcount={goToBankAcount}
          inputs={inputs}
          setInputs={setInputs}
          onChangeInputs={onChangeInput}
        />
      ) : (
        ""
      )}
      {page === 1 ? (
        <BankAccount
          goToPassword={goToPassword}
          goToAddress={goToAddress}
          inputs={inputs}
          setInputs={setInputs}
          onChangeInputs={onChangeInput}
        />
      ) : (
        ""
      )}
      {page === 2 ? (
        <Address
          goToBankAcount={goToBankAcount}
          inputs={inputs}
          setInputs={setInputs}
          onChangeInputs={onChangeInput}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInformation;
