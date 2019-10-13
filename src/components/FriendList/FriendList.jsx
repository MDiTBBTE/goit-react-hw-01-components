import React, { Component } from 'react';
import Massive from './friends';
import Friend from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

class FriendList extends Component {
  render() {
    return (
      <section className={styles.tittle}>
        <h1>Friends</h1>
        <ul>
          {Massive.map(friend => (
            <li
              key={friend.id}
              className={
                friend.isOnline ? styles.container : styles.containerOffline
              }
            >
              <Friend name={friend.name} avatar={friend.avatar} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default FriendList;
