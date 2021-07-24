import React from 'react';
import Profile from './components/social-profile/profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/statistics';
import statData from './components/statistics/statistical-data.json';

import FriendList from './components/friend-list/friend-list';
import friends from './components/friend-list/friends.json';

import TransactionHistory from './components/transaction-history/transaction-history';
import transactions  from './components/transaction-history/transactions.json';


const App = () => {
  return (
    <div>
      <Profile 
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={statData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
