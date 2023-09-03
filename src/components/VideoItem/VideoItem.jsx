import React from 'react';
import { VideoItemStyled } from './VideoItem.styled';

export default function VideoItem({
  link,
  onClick,
}) {
  return <VideoItemStyled href={link}
                          onClick={onClick}>
    {link}
  </VideoItemStyled>;
}
