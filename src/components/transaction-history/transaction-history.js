import React from 'react';
import PropTypes from 'prop-types';
import TransactionsItem from './transactionsItem';
import styles from './transactions.module.css'

const TransactionHistory = ({items}) => (
    <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={styles.row}>
                    <TransactionsItem
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,  
    })).isRequired,   
}

export default TransactionHistory;