import React from 'react';
import styles from './TransactionHistory.module.css';

const Row = ({ type, currency, amount, className }) => (
  <tr className={className}>
    <td className={styles.type}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default Row;
