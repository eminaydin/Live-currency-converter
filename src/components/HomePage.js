import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ShowResult from "./ShowResult";
import "../styles/HomePage.css";
import {
  currencyInitialState,
  ERROR_MESSAGES,
  selectOptions,
  baseUrl,
} from "../consts/Consts";

const HomePage = (props) => {
  const [calculationInfo, setCalculationInfo] = useState(currencyInitialState);
  const [calculationResult, setCalculationResult] = useState(null);
  const [currencyDatabase, setCurrencyDatabase] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { amount, currencyFrom, currencyTo } = calculationInfo;

  const formValidation = () => {
    var err = "";
    if (amount.charAt(0) === "-") err = ERROR_MESSAGES.minusAmount;
    if (currencyFrom === currencyTo) err = ERROR_MESSAGES.equalCurrency;
    if (!amount) err = ERROR_MESSAGES.noAmount;
    if (amount === "0") err = ERROR_MESSAGES.amountZero;
    setErrorMessage(err);
    return err;
  };

  const calculationHandler = async () => {
    if (formValidation()) {
      return;
    } else {
      const fetchData = await fetch(
        `${baseUrl}${currencyFrom}&symbols=${currencyTo}`
      );
      const response = await fetchData.json();
      const rate = Object.values(response.rates)[0];
      // create new object with necessary information
      const newObj = {
        ...calculationInfo,
        amount,
        currencyFrom,
        currencyTo,
        multipliedAmount: rate * amount,
        date: Date.now(),
      };
      // Pass the object to calculation result in order to display it right away
      setCalculationResult(newObj);
      // Pass the object to database
      setCurrencyDatabase([...currencyDatabase, newObj]);
    }
  };

  // Pass currency history to parent
  if (currencyDatabase) props.getCalculations(currencyDatabase);

  // Handle switch icon
  const changeCurrency = () => {
    setCalculationInfo({
      ...calculationInfo,
      currencyTo: currencyFrom,
      currencyFrom: currencyTo,
    });
  };

  return (
    <div className="initial-page">
      <div className="header">
        <h1 className="headline">Convert currencies in real-time.</h1>
      </div>
      <div className="form-content">
        <Form className="box-background">
          <Form.Group style={{ margin: "auto" }}>
            <Form.Input
              label="Amount"
              placeholder="Amount"
              value={amount}
              onChange={(e, { value }) =>
                setCalculationInfo({
                  ...calculationInfo,
                  amount: value,
                })
              }
              type="number"
            />
            <Form.Select
              placeholder="From"
              label="From"
              value={currencyFrom}
              onChange={(e, { value }) =>
                setCalculationInfo({
                  ...calculationInfo,
                  currencyFrom: value,
                })
              }
              options={selectOptions}
            />
            <Icon name="exchange" onClick={changeCurrency} size="large" />
            <Form.Select
              placeholder="To"
              label="To"
              value={currencyTo}
              onChange={(e, { value }) =>
                setCalculationInfo({
                  ...calculationInfo,
                  currencyTo: value,
                })
              }
              options={selectOptions}
            />
            <Form.Button className="btn-div" onClick={calculationHandler}>
              Convert
            </Form.Button>
          </Form.Group>
          <Form.Field className="error-msg">
            {errorMessage && <p>{errorMessage}</p>}
          </Form.Field>
        </Form>
        <Link to="/result" className="conversion-history">
          <span>View conversion history {">"}</span>
        </Link>
      </div>
      {calculationResult && (
        <ShowResult calculationResult={calculationResult} />
      )}
    </div>
  );
};

export default HomePage;
