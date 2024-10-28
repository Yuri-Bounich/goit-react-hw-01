import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import userData from '../assets/userData.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import '../index.css';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

// Щоб перетворити цей масив об'єктів у JSON, використовуйте:
// в javascript
// const jsonData = JSON.stringify(users, null, 2);
// console.log(jsonData);
// де users - назва масиву
