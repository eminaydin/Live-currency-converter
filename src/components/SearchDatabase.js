import React from 'react';

const SearchDatabase = ({ calculationHistory }) => {
    console.log(calculationHistory);

    return (
        <div>
            {calculationHistory.map(e => <p>{e.amount}</p>)}
        </div>
    );
}

export default SearchDatabase;
