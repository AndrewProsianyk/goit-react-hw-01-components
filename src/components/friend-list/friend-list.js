import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item';
import styles from './friends.module.css';


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <li className={styles.item} key={id}>
                <FriendListItem
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}/>
            </li>
        ))}

    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};

export default FriendList;