import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SearchDatabase.css"
import Moment from 'react-moment';
import { formattedAmount } from '../consts/Consts';

const SearchDatabase = ({ calculationHistory }) => {
    return (
        <div className="history-page">
            <Link to="/">
                <span className="back-btn">{"<"} Go back</span>
            </Link>
            <div className="conversion-history-table">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                    {calculationHistory.map(({ amount, currencyTo, currencyFrom, multipliedAmount, date }) => {
                        return < tr key={date}>
                            <td><Moment format="LL">{date}</Moment></td>
                            <td>{formattedAmount(amount)} {currencyFrom}</td>
                            <td>{formattedAmount(multipliedAmount)} {currencyTo}</td>
                        </tr>
                    })}
                </table>
            </div>

        </div >
    );
}

export default SearchDatabase;
