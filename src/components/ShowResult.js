import React from 'react';

const ShowResult = ({ stateArray }) => {

    return (<>

        {stateArray.map(({ amount, currencyFrom, currencyTo, multipliedAmount }) => {
            const newAmount = new Intl.NumberFormat('de-DE').format(amount)
            const newMultipliedAmount = new Intl.NumberFormat('de-DE').format(multipliedAmount)
            return (<div className="result-msg">
                <span>{newAmount + " " + currencyFrom} =</span>
                <p style={{ fontSize: "40px" }}>  {newMultipliedAmount + " " + currencyTo}</p>
            </div>
            )
        })}
    </>
    )
}

export default ShowResult;
