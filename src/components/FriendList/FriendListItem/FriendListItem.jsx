import React from 'react';
import styles from '../FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ name, avatar }) => {
  return (
    <>
      <img src={avatar} alt="" className={styles.img} />
      <h1>{name}</h1>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
