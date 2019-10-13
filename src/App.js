import React from 'react';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import StatList from './components/Stat/StatList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
];

function App() {
  return (
    <>
      <Profile user={user} />
      <hr />
      <StatList title="Upload stats" stat={stats} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
