import React from 'react';
import Massive from './friends';
import styles from './FriendList.module.css';

const FriendList = () => {
  return (
    <section className={styles.tittle}>
      <h1>Friends</h1>
      <ul>
        {Massive.map(({ id, avatar, name, isOnline }) => (
          <li
            key={id}
            className={isOnline ? styles.container : styles.containerOffline}
          >
            <img src={avatar} alt="" className={styles.img} />
            <h1>{name}</h1>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FriendList;
