import React, { useState } from 'react';
import { Container, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ShowResult from './ShowResult';

const HomePage = (props) => {
    const getOptions = [
        { key: 'EUR', value: 'EUR', text: 'EUR' },
        { key: 'USD', value: 'USD', text: 'USD' },
        { key: 'CHF', value: 'CHF', text: 'CHF' },
    ];
    const baseUrl = `https://api.exchangeratesapi.io/latest?base=`
    const [currencyFrom, setCurrencyFrom] = useState("");
    const [currencyTo, setCurrencyTo] = useState("");
    const [amount, setAmount] = useState();
    const [calcDone, setCalcDone] = useState(false);
    const [stateArray, setStateArray] = useState([]);
    const [newArray, setNewArray] = useState([]);
    const [showError, setShowError] = useState(false);
    const calculationHandler = (e) => {
        if (!currencyFrom || !currencyTo || !amount || amount === "0" || amount.charAt(0) === "-") {
            e.preventDefault();
            setShowError(true)
        } else {
            setShowError(false)
            fetch(baseUrl + `${currencyFrom}&symbols=${currencyTo}`)
                .then(res => res.json())
                .then(data => {
                    const currencyRate = Object.values(data.rates)[0]
                    setCalcDone(true)
                    setStateArray([{ amount, currencyTo, currencyFrom, multipliedAmount: currencyRate * amount, date: Date.now() }])
                    setNewArray(newArray.concat(stateArray))
                })
            sendCalculations(newArray)
        }
    }
    console.log(typeof amount);

    // send data to parent
    function sendCalculations(value) {
        props.getCalculations(value);
    }
    return (
        <Container className="app">
            <Container className="header">
                <h1 className="headline">Convert currencies in real-time.</h1>


                <Form className="box-background">
                    <Form.Group style={{ margin: "auto" }} >
                        <Form.Input
                            required
                            label='Amount'
                            placeholder='Amount'
                            value={amount}
                            onChange={(e, { value }) => setAmount(value)}
                            type="number"
                        />
                        <Form.Select
                            required
                            label="From"
                            value={currencyFrom}
                            onChange={(e, { value }) => setCurrencyFrom(value)}
                            options={getOptions}
                        />
                        <Form.Select
                            required
                            label="To"
                            value={currencyTo}
                            onChange={(e, { value }) => setCurrencyTo(value)}
                            options={getOptions}
                        />
                        <Form.Button
                            className="btn-div"
                            onClick={calculationHandler}>
                            Convert
                            </Form.Button>
                    </Form.Group>
                    <Form.Field className="error-msg">
                        {showError ? <p>Error</p> : null}
                    </Form.Field>
                </Form>

                <Link to="/result"> <p className="conversion-history">View conversion history</p>  </Link>
            </Container>
            {calcDone && <ShowResult stateArray={stateArray} />}
        </Container>
    );
}

export default HomePage;
