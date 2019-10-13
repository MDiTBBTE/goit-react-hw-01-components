import React from 'react';
import Row from './Row';
import styles from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.container}>
      <thead className={styles.thead}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 ? styles.gray : styles.white}>
            <Row type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
