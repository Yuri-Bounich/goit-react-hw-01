const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(item => (
          <li key={item.id}>
            <img src={item.avatar} alt="Avatar" width="48" />
            <p>{item.name}</p>
            <p>{item.isOnline ? 'Online' : 'Offline'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
