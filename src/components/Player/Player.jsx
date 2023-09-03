import React from 'react';
import ReactPlayer from 'react-player/vimeo';

export default function Player({ url }) {
  return (<ReactPlayer url={url}
                       controls={true} />);
}
