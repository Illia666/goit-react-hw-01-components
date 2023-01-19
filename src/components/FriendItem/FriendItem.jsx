import PropTypes from 'prop-types';

import { StyledFriend } from './FriendItem.styled';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriend isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriend>
  );
};

export default FriendItem;

FriendItem.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  isOnline: false,
};

FriendItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};