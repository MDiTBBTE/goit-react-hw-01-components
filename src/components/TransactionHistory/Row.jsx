import React from 'react';
import styles from './TransactionHistory.module.css';

const Row = ({ type, currency, amount }) => (
  <>
    <td className={styles.type}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

export default Row;
