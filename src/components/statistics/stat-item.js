import React from 'react';
import PropTypes from 'prop-types';

const StatItem = (({label, percentage }) => (
    <>
        <span>{label}</span>
        <span>{percentage}%</span>
    </>
));
StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;