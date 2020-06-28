import React, { useState, useEffect } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ShowResult from './ShowResult';
import "../styles/HomePage.css"


const HomePage = (props) => {
    const options = [
        { key: 'EUR', value: 'EUR', text: 'EUR' },
        { key: 'USD', value: 'USD', text: 'USD' },
        { key: 'CHF', value: 'CHF', text: 'CHF' },
    ];
    const baseUrl = `https://api.exchangeratesapi.io/latest?base=`
    const [currencyResult, setCurrencyResult] = useState({
        amount: "1",
        currencyFrom: "EUR",
        currencyTo: "USD",
        multipliedAmount: "",
        date: ""
    });

    const [currencyDatabase, setCurrencyDatabase] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [currencyRate, setCurrencyRate] = useState("");
    const { amount, currencyFrom, currencyTo, multipliedAmount, date } = currencyResult;
    const formValidation = () => {

        if (currencyFrom === currencyTo) setErrorMessage("Equal currencies")
        if (!amount) setErrorMessage("no number given")
        if (amount.charAt[0] === "-") setErrorMessage("no minus numbers")
        if (amount === "0") setErrorMessage("can't convert 0")
        if (errorMessage) setHasError(true)
    }

    const calculationHandler = async () => {
        formValidation()

        if (hasError) {
            return
        } else {
            const fetchData = await fetch(`${baseUrl}${currencyFrom}&symbols=${currencyTo}`);
            const response = await fetchData.json();
            const rate = Object.values(response.rates)[0]
            setCurrencyRate(rate);
            setCurrencyResult({
                amount,
                currencyFrom,
                currencyTo,
                multipliedAmount: rate * amount,
                date: Date.now()

            })
            setCurrencyDatabase([...currencyDatabase, currencyResult])
        }
    }
    if (currencyDatabase) props.getCalculations(currencyDatabase);
    const changeCurrency = () => {
        setCurrencyResult({
            ...currencyResult,
            currencyTo: currencyFrom,
            currencyFrom: currencyTo
        })
    }

    return (
        <div className="app">
            <div className="header">
                <h1 className="headline">Convert currencies in real-time.</h1>
            </div>
            <div className="form-content">

                <Form className="box-background">
                    <Form.Group style={{ margin: "auto" }} >
                        <Form.Input
                            required
                            label='Amount'
                            placeholder='Amount'
                            value={amount}
                            onChange={(e, { value }) => setCurrencyResult({
                                ...currencyResult,
                                amount: value
                            })}
                            type="number"
                        />
                        <Form.Select
                            required
                            placeholder="From"
                            label="From"
                            value={currencyFrom}
                            onChange={(e, { value }) => setCurrencyResult({
                                ...currencyResult,
                                currencyFrom: value
                            })}
                            options={options}
                        />
                        <Icon name="exchange" onClick={changeCurrency} size="large" />
                        <Form.Select
                            required
                            placeholder="To"
                            label="To"
                            value={currencyTo}
                            onChange={(e, { value }) => setCurrencyResult({
                                ...currencyResult,
                                currencyTo: value
                            })}
                            options={options}
                        />
                        <Form.Button
                            className="btn-div"
                            onClick={calculationHandler}>
                            Convert
                            </Form.Button>
                    </Form.Group>
                    <Form.Field className="error-msg">
                        {hasError ? <p>{errorMessage}</p> : null}
                    </Form.Field>
                </Form>
                <Link to="/result" className="conversion-history">
                    <span>View conversion history {">"}</span>
                </Link>
            </div>
            {currencyRate && <ShowResult currencyResult={currencyResult} />}
        </div>
    );
}

export default HomePage;
