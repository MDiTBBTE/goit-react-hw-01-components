import React from 'react';
import Stat from './Stat';
import styles from './StatList.module.css';
import PropTypes from 'prop-types';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomColor = () => {
  let r = getRandomInt(0, 255);
  let g = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);

  return `rgb(${r},${g},${b})`;
};

const StatList = ({ title, stat }) => {
  return (
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
    )
  );
};

StatList.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default StatList;
