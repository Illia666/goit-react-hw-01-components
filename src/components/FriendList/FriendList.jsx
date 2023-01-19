import PropTypes from 'prop-types';

import FriendItem from 'components/FriendItem/FriendItem';

import { StyledFriendList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(({ id, ...props }) => {
        return <FriendItem key={id} {...props} />;
      })}
    </StyledFriendList>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};