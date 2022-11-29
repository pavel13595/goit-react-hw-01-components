import PropTypes from 'prop-types';
import { Status, Name, Item, Image } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusType={isOnline}>{isOnline}</Status>
      <Image src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
