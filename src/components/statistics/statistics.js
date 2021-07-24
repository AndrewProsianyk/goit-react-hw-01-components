import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './stat-item';
import styles from './statistics.module.css';

const Statistics = ({ stats, title }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) =>
                <li key={id} className={styles.item}>
                    <StatItem label={label} percentage={percentage} />
                </li>
            )}

        </ul>
    </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;