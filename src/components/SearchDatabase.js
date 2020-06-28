import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SearchDatabase.css"
import Moment from 'react-moment';

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
                        const formattedAmount = new Intl.NumberFormat('de-DE').format(amount)
                        const formattedMultipliedAmount = new Intl.NumberFormat('de-DE').format(multipliedAmount);
                        return < tr >
                            <td><Moment format="LL">{date}</Moment></td>
                            <td>{formattedAmount} {currencyFrom}</td>
                            <td>{formattedMultipliedAmount} {currencyTo}</td>
                        </tr>
                    })}
                </table>
            </div>

        </div >
    );
}

export default SearchDatabase;
