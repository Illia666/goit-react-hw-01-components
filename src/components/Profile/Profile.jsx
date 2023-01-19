import React from 'react';
import PropTypes from 'prop-types';
import { StyledProfile, StyledUl } from './Profiled.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StyledUl>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </StyledUl>
    </StyledProfile>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.prototype = {
  username: PropTypes.string.StyledProfile,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};