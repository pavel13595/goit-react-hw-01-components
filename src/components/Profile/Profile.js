import PropTypes from 'prop-types';
import {
  Box,
  ImgProfile,
  Description,
  Username,
  Tag,
  Location,
  Stats,
  ItemStatus,
  SpanLabel,
  QuantitySpan,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box>
      <Description>
        <ImgProfile src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ItemStatus>
          <SpanLabel className="label">Followers</SpanLabel>
          <QuantitySpan className="quantity">{followers}</QuantitySpan>
        </ItemStatus>
        <ItemStatus>
          <SpanLabel className="label">Views</SpanLabel>
          <QuantitySpan className="quantity">{views}</QuantitySpan>
        </ItemStatus>
        <ItemStatus>
          <SpanLabel className="label">Likes</SpanLabel>
          <QuantitySpan className="quantity">{likes}</QuantitySpan>
        </ItemStatus>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
