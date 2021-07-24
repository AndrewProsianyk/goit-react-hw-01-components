import React from 'react';
import PropTypes from 'prop-types';

const TransactionsItem = ({type, amount, currency}) => (
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
);

TransactionsItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionsItem;