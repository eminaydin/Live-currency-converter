import React, { useState } from 'react';
import { Container, Input, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const getOptions = [
        { key: 'EUR', value: 'EUR', text: 'EUR' },
        { key: 'USD', value: 'USD', text: 'USD' },
        { key: 'CHF', value: 'CHF', text: 'CHF' },
    ];
    const baseUrl = `https://api.exchangeratesapi.io/latest?base=`

    const [currencyFrom, setCurrencyFrom] = useState("");
    const [currencyTo, setCurrencyTo] = useState("");
    const [amount, setAmount] = useState("");
    const [calcDone, setCalcDone] = useState(false);
    const [stateArray, setStateArray] = useState([]);
    const [newArray, setNewArray] = useState([]);
    const calculationHandler = () => {

        fetch(baseUrl + `${currencyFrom}&symbols=${currencyTo}`)
            .then(res => res.json())
            .then(data => {
                const currencyRate = Object.values(data.rates)[0]
                setCalcDone(true)
                setStateArray([{ amount, currencyTo, currencyFrom, multipliedAmount: currencyRate * amount, date: Date.now() }])
            })
        setNewArray([...newArray, stateArray])
    }
    return (
        <Container className="app">
            <Container className="header">
                <h1>pickar</h1>
                <h1>Conver currencies in real-time.</h1>

                <Container className="calculator">
                    <Input placeholder="amount" value={amount} onChange={(e, { value }) => setAmount(value)} />
                    <Dropdown
                        placeholder='select currency'
                        selection
                        options={getOptions}
                        value={currencyFrom}
                        onChange={(e, { value }) => setCurrencyFrom(value)}
                    />
                    <Dropdown
                        placeholder='select currency'
                        selection
                        options={getOptions}
                        value={currencyTo}
                        onChange={(e, { value }) => setCurrencyTo(value)}
                    />
                    <Button content="Convert" color="red" onClick={calculationHandler} />
                </Container>
                <Link to="/result"> <p>View conversion history</p>  </Link>
            </Container>
            {calcDone && stateArray.map(element => <p> {element.amount + element.currencyFrom} = {element.multipliedAmount + element.currencyTo} </p>)}
        </Container>
    );
}

export default HomePage;
