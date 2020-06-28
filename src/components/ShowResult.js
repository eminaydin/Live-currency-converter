import React from 'react';
import "../styles/ShowResult.css"
const ShowResult = ({ currencyResult }) => {
    const { amount, currencyTo, currencyFrom, multipliedAmount } = currencyResult;

    const formattedAmount = new Intl.NumberFormat('de-DE').format(amount)
    const formattedMultipliedAmount = new Intl.NumberFormat('de-DE').format(multipliedAmount)
    return (
        <div className="result-msg">
            <span>{formattedAmount + " " + currencyFrom} =</span>
            <p style={{ fontSize: "40px" }}>  {formattedMultipliedAmount + " " + currencyTo}</p>
        </div>


    )
}

export default ShowResult;
