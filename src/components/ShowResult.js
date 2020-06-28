import React from 'react';
import "../styles/ShowResult.css"
import { formattedAmount } from '../consts/Consts';

const ShowResult = ({ calculationResult }) => {
    const { amount, currencyTo, currencyFrom, multipliedAmount } = calculationResult;
    return (
        <div className="result-msg">
            <span>{formattedAmount(amount) + " " + currencyFrom} =</span>
            <p style={{ fontSize: "40px" }}>  {formattedAmount(multipliedAmount) + " " + currencyTo}</p>
        </div>
    )
}

export default ShowResult;
