import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ percentage, label }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

Stat.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
};

export default Stat;
