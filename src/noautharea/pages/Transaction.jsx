import React from "react";
import { useState } from "react";
import { Header } from "../styles/components/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { TransactionStyle } from "../styles/pages/TransactionStyle";
import { Block } from "@material-ui/icons";
import { DatePicker, Space } from "antd";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const Transaction = () => {
  // role
  const [role, setRole] = useState();

  // State of form
  const [formState, setFormState] = useState(0);

  // Form inputs
  const [buyerFirstName, setBuyerFirstName] = useState("");
  const [buyerSurname, setBuyerSurname] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [sellerFirstName, setSellerFirstName] = useState("");
  const [sellerSurname, setSellerSurname] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [totalTransactionCost, setTotalTransactionCost] = useState("");
  const [totalDuration, setTotalDuration] = useState("");
  const [detailsOfProduct, setDetailsOfProduct] = useState("");
  const [isMilestone, setIsMilestone] = useState(false);
  const [Inputs, setInputs] = useState(false);
  const [categories, setCategories] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isSellerEmailAvailable, setIsSellerEmailAvailable] = useState(true);

  
  const [milestones, setMilestones] = useState([
    { title: "", description: "" },
  ]);

  const [pictures, setPictures] = useState([
    {
      pictureName: "",
    },
  ]);

  let title;
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setRole(target.value);
      setFormState(1);
      console.log("checkbox is ", target.value);
    }
  };

  const nextForm = (value) => {
    console.log("state changed...", value);
    setFormState(value);
  };

  const addMilestone = () => {
    setMilestones([...milestones, { title: "", description: "" }]);
  };
  const removeMilestone = (index) => {
    let values = [...milestones];
    if (index > 0) values.splice(index, 1);
    setMilestones(values);
  };
  const handleMilestonesInput = (index, event) => {
    console.log(index, event.target.name);
    const values = [...milestones];
    values[index][event.target.name] = event.target.value;
    setMilestones(values);
  };
  const addPicture = () => {
    console.log("Adding Picture...");
    if (pictures.length <= "2") setPictures([...pictures, { pictureName: "" }]);
  };
  const removePicture = (index) => {
    console.log("Removing Picture...");
    let values = [...pictures];
    if (index > 0) values.splice(index, 1);
    setPictures(values);
  };
  const selectCategory = (event) => {
    console.log("category selected ----->", event.target.value);
    setCategories(event.target.value);
    console.log(" selected category----->", categories);
  };

  if (categories === "1") {
    title = "Product";
    console.log("the title is ---->", title);
  } else if (categories === "2") {
    title = "Service";
    console.log("the title is ---->", title);
  } else if (categories === "3") {
    title = "Digital Product";
    console.log("the title is ---->", title);
  }

  const changeCurrency = (event) => {
    setCurrency(event.target.value);
    showCurrency();
  };

  let newCurrency;
  const showCurrency = () => {
    if (currency === "4") {
      return <div>&#8358;</div>;
    } else if (currency === "5") {
      return <div>$</div>;
    } else if (currency === "6") {
      return <div>&#165;</div>;
    } else if (currency === "7") {
      return <div>&#8383;</div>;
    } else {
      return <div>&#8358;</div>;
    }
  };

  const handleSubmit = () => {
    console.log("form summited....");
  }
  console.log(currency + "------>" + showCurrency());
  return (
    <TransactionStyle>
      <div className="__no-auth-transaction">
        <NavBar />
        <div className="container">
          <div className="__transaction-content">
            <section className="d-flex justify-content-center">
              <div style={{ width: "100%" }}>
                <Header style={{ textAlign: "center" }}>
                  <h3>START TRANSACTION ON ESCROWLOCK</h3>

                  <h5>Best Escrow Service For Buyer and Seller Protection.</h5>
                  <h6 className="text-center">
                    To start a transaction on EscrowLock platform, kindly select
                    one of the roles listed below.
                  </h6>
                </Header>
                <div className="the-form">
                  {formState === 0 ? (
                    <section>
                      <div className="d-flex justify-content-center">
                        <div style={{ width: "100%" }}>
                          <div
                            is
                            your
                            role
                            in
                            this
                            Transaction
                            className="product-information"
                          >
                            <div className="mb-4">
                              <label htmlFor="Category">Category</label>
                              <select
                                name=""
                                value={categories}
                                onChange={(event) => selectCategory(event)}
                                id=""
                                className="form-control"
                              >
                                <option value="1">Physical Product</option>
                                <option value="2">Services</option>
                                <option value="3">Digital Product</option>
                              </select>
                            </div>
                            <div className="mb-4">
                              <label htmlFor="Category">Currency</label>
                              <select
                                name=""
                                value={currency}
                                onChange={(event) => changeCurrency(event)}
                                id=""
                                className="form-control"
                              >
                                <option value="4">NGN (Nigerian Naira)</option>
                                <option value="5">USD (US Dollar)</option>
                                <option value="6">CNY (Chinese Yuan)</option>
                                <option value="7">
                                  USDT Crypto (Provided by external partners)
                                </option>
                              </select>
                            </div>
                            <h6>{title || "Product"} Information</h6>
                            <div className="row">
                              <div className="col-md-12 col-12">
                                <label htmlFor="Title of Product(s) to be bought">
                                  Name of {title || "Product"}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={productTitle}
                                  onChange={(e) =>
                                    setProductTitle(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-12 col-12">
                                <label
                                  htmlFor="Details of Product(s)"
                                  style={{ marginTop: "1rem" }}
                                >
                                  Details of {title || "Product"}
                                </label>
                                <textarea
                                  cols="10"
                                  className="form-control"
                                  rows="3"
                                  style={{ marginTop: 22 }}
                                  type="text"
                                  className="form-control"
                                  value={detailsOfProduct}
                                  onChange={(e) =>
                                    setDetailsOfProduct(e.target.value)
                                  }
                                ></textarea>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-6 col-xs-12 col-sm-12">
                                <label htmlFor="Total Transaction Cost(Numbers only)">
                                  Total Transaction Cost(Numbers only)
                                </label>
                                <div className="input-group mb-2 mr-sm-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      {showCurrency()}
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={totalTransactionCost}
                                    onChange={(e) =>
                                      setTotalTransactionCost(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-6 col-xs-12 col-sm-12">
                                <label htmlFor="Total Duration">
                                  Total Duration of transaction
                                </label>

                                <DatePicker className="date-picker" />
                              </div>
                            </div>
                          </div>

                          <h6 style={{ fontSize: 15 }}>Upload Images/Videos</h6>
                          <div>
                            <div
                              className="col-md-12 col-12 mb-3"
                              style={{ padding: 0 }}
                            >
                              <div className="mb-2">Upload Video</div>
                              <input type="file" name="" id="" />
                            </div>
                            <div className="mb-2"> Upload Pictures</div>
                            {pictures.map((picture, index) => (
                              <div
                                className="row"
                                style={{ margin: 0 }}
                                key={index}
                              >
                                {index <= "2" ? (
                                  <div className="col-md-12 col-12">
                                    <div className="row">
                                      <input type="file" name="" id="" />
                                      <IconButton
                                        onClick={(e) => removePicture(index)}
                                      >
                                        <RemoveIcon />
                                      </IconButton>
                                      <IconButton
                                        onClick={(e) => addPicture(index)}
                                      >
                                        <AddIcon />
                                      </IconButton>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    You cant upload more than 3 pictures
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div>
                            <div>
                              {categories === "2" ? (
                                <button
                                  className="btn btn-primary mb-4"
                                  onClick={() => setIsMilestone(!isMilestone)}
                                >
                                  Add Milestone (Optional)
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                            {categories === "2"
                              ? [
                                  isMilestone
                                    ? milestones.map((milestone, index) => (
                                        <div className="milestones" key={index}>
                                          <fieldset>
                                            <legend>
                                              MILESTONE {index + 1}
                                            </legend>
                                            <div
                                              className="row"
                                              key={index}
                                              style={{ marginBottom: 0 }}
                                            >
                                              <div className="col-md-12 col-xs-12 col-sm-12">
                                                <label htmlFor="Title">
                                                  Title
                                                </label>
                                                <input
                                                  name="title"
                                                  value={milestone.title}
                                                  type="text"
                                                  onChange={(event) =>
                                                    handleMilestonesInput(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  className="form-control mb-4"
                                                />
                                              </div>
                                              <div className="col-md-12 col-xs-12 col-sm-12">
                                                <label htmlFor="Title">
                                                  Description
                                                </label>
                                                <textarea
                                                  cols="10"
                                                  className="form-control"
                                                  rows="3"
                                                  style={{ marginTop: 22 }}
                                                  onChange={(event) =>
                                                    handleMilestonesInput(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  type="text"
                                                  className="form-control"
                                                  value={milestone.description}
                                                >
                                                  {milestone.description}
                                                </textarea>
                                              </div>
                                            </div>
                                            <div
                                              className="row"
                                              style={{ marginTop: 20 }}
                                            >
                                              <div className="col-md-6 col-xs-12 col-sm-12">
                                                <label htmlFor="due_date">
                                                  Due Date
                                                </label>
                                                <DatePicker className="form-control" />
                                              </div>
                                              <div className="col-md-6 col-xs-12 col-sm-12">
                                                <label htmlFor="amounttobereleased">
                                                  Amount to be released
                                                </label>
                                                <input
                                                  name="due_date"
                                                  value={milestone.due_date}
                                                  type="text"
                                                  onChange={(event) =>
                                                    handleMilestonesInput(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  className="form-control mb-4"
                                                />
                                              </div>
                                              <div className="d-flex justify-conent-around">
                                                <IconButton
                                                  onClick={(e) =>
                                                    removeMilestone(index)
                                                  }
                                                >
                                                  <RemoveIcon />
                                                </IconButton>
                                                <IconButton
                                                  onClick={addMilestone}
                                                >
                                                  <AddIcon />
                                                </IconButton>
                                              </div>
                                            </div>
                                          </fieldset>
                                        </div>
                                      ))
                                    : "",
                                ]
                              : ""}
                          </div>
                          <div className="select-role">
                            <h6>What is your role in this Transaction</h6>

                            <div className="form-check  form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="1"
                              />
                              <label
                                className="label-style"
                                htmlFor="flexRadioDefault1"
                              />
                              Buyer
                            </div>
                            <div className="form-check  form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="2"
                              />
                              <label
                                className="label-style"
                                htmlFor="flexRadioDefault1"
                              />
                              Seller
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button
                          onClick={() => nextForm(1)}
                          className="btn btn-primary"
                        >
                          Next
                        </button>
                      </div>
                    </section>
                  ) : (
                    ""
                  )}

                  {formState === 1 ? (
                    <div className="buyer-information">
                      <h6>Buyer Informaiton</h6>
                      <div className="row">
                        <div className="col-md-6 col-12 col-xs-12 col-sm-12">
                          <label htmlFor="Buyer's First Name">
                            Name (Personal/Business)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={buyerFirstName}
                            onChange={(e) => setBuyerFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 col-12 col-xs-12 col-sm-12">
                          <label htmlFor="Buyer's Email">Buyer's Email</label>
                          {isEmailAvailable ? (
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                value={buyerEmail}
                                onChange={(e) => setBuyerEmail(e.target.value)}
                              />
                              <div>
                                <span
                                  style={{
                                    cursor: "pointer",
                                    fontSize: 10,
                                    textDecoration: "underline",
                                  }}
                                  onClick={() =>
                                    setIsEmailAvailable(!isEmailAvailable)
                                  }
                                >
                                  No email? Use only phone number (carrier
                                  charges apply)
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div>
                            {!isEmailAvailable ? (
                              <div>
                                <span
                                  style={{
                                    cursor: "pointer",
                                    fontSize: 10,
                                    textDecoration: "underline",
                                  }}
                                  onClick={() =>
                                    setIsEmailAvailable(!isEmailAvailable)
                                  }
                                >
                                  Supply email
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-12">
                          <label htmlFor="Buyer's Phone Number">
                            Buyer's Phone Number
                          </label>

                          <PhoneInput
                            style={{ width: "100%" }}
                            value={buyerPhone}
                            onChange={setBuyerPhone}
                            country="us"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => nextForm(0)}
                        >
                          Back
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => nextForm(2)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {formState === 2 ? (
                    <div className="Seller-information">
                      <h6>Seller's Information</h6>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <label htmlFor="Seller's First Name">
                            Seller's First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={sellerFirstName}
                            onChange={(e) => setSellerFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 col-6">
                          <label htmlFor="Buyer's Email">Seller's Email</label>
                          {isSellerEmailAvailable ? (
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                value={buyerEmail}
                                onChange={(e) => setBuyerEmail(e.target.value)}
                              />
                              <div>
                                <span
                                  style={{
                                    cursor: "pointer",
                                    fontSize: 10,
                                    textDecoration: "underline",
                                  }}
                                  onClick={() =>
                                    setIsSellerEmailAvailable(!isEmailAvailable)
                                  }
                                >
                                  No email? Use only phone number (carrier
                                  charges apply)
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div>
                            {!isSellerEmailAvailable ? (
                              <div>
                                <span
                                  style={{
                                    cursor: "pointer",
                                    fontSize: 10,
                                    textDecoration: "underline",
                                  }}
                                  onClick={() =>
                                    setIsSellerEmailAvailable(
                                      !isSellerEmailAvailable
                                    )
                                  }
                                >
                                  Supply email
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <label htmlFor="Seller's Phone Number">
                            Seller's Phone Number
                          </label>
                          <PhoneInput
                            value={sellerPhone}
                            onChange={setSellerPhone}
                            country="us"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => nextForm(0)}
                        >
                          Back
                        </button>
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {formState === 3 || formState === 4 ? <div></div> : ""}
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </TransactionStyle>
  );
};

export default Transaction;
