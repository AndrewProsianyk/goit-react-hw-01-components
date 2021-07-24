import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendListItem = ({name, avatar, isOnline}) => (
    <>
        <span className={isOnline?styles.online:styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;