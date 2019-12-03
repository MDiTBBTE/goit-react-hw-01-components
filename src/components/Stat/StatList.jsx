import React from 'react';
import Stat from './Stat';
import styles from './StatList.module.css';
import PropTypes from 'prop-types';
import { randomColor } from './randomColor';

const StatList = ({ title, stat }) =>
  title && (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stat.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ background: `${randomColor()}` }}
          >
            <Stat label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );

StatList.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default StatList;
