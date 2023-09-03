import React from 'react';
import { VideoItemStyled } from './VideoItem.styled';

export default function VideoItem({
  link,
  onClick,
}) {
  const handleClick = (event) => {
    event.preventDefault();
    
    onClick(link);
  };

  return <VideoItemStyled href={link}
                          onClick={handleClick}>
    {link}
  </VideoItemStyled>;
}
