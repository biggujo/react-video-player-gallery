import React from 'react';
import PropTypes from 'prop-types';
import { VideoListStyled } from './VideoList.styled';
import VideoItem from '../VideoItem';

export default function VideoList({
  videoList,
  onClick,
}) {
  return (<VideoListStyled>
    {videoList.map(({
      id,
      link,
    }) => {
      return <li key={id}>
        <VideoItem link={link}
                   onClick={onClick} />
      </li>;
    })}
  </VideoListStyled>);
}

VideoList.propTypes = {
  videoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};
