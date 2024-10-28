import PropTypes from 'prop-types';
import s from './Profile.module.css';
import clsx from 'clsx';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.image} src={image} alt="User avatar" />
        <h2>{name}</h2>
        <p className={s.nikname}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.wrapp}>
        <li className={s.partwrapp}>
          <span>Followers</span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li className={clsx(s.partwrapp, s.borderwrapp)}>
          <span>Views</span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li className={s.partwrapp}>
          <span>Likes</span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
