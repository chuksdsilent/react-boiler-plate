import React, { useState } from "react";
import Password from "./Password";
import BankAccount from "./BankAccount";
import Address from "./Address";
import { UserServices } from "../../services/UserService";
import { Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UserInformation = () => {
  const [page, setPage] = useState(0);
  const [inputs, setInputs] = useState({});
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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
    if (inputs.password !== inputs.cpassword) return;
    console.log("user information is", inputs);
    setProcessing(true);
    const formData = { ...inputs, route_id: id };
    UserServices.completeRegistration(formData)
      .then((response) => {
        // navigate("users/dashboard");
      })
      .catch((response) => {})
      .finally(() => {
        setProcessing(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Spin spinning={processing}>
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
        </Spin>
      </form>
    </div>
  );
};

export default UserInformation;
