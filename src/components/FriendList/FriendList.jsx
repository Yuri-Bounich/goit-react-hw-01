import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={s.cotainer}>
      <ul className={s.block}>
        {friends.map(item => (
          <li className={s.item} key={item.id}>
            <img src={item.avatar} alt="Avatar" width="48" />
            <h2>{item.name}</h2>
            <p className={item.isOnline ? s.online : s.offline}>
              {item.isOnline ? 'Online' : 'Offline'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
