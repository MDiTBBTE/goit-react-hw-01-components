import React from 'react';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import StatList from './components/Stat/StatList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import stats from './components/db/stats.json';
import user from './components/db/user.json';

const App = () => {
  return (
    <div>
      <Profile user={user} />
      <hr />
      <StatList title="Upload stats" stat={stats} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
