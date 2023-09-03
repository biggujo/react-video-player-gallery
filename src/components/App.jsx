import React, { Component } from 'react';
import VideoList from './VideoList';
import videoList from 'videos.json';
import Player from './Player';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: '',
    };
  }

  handleVideoItemClick = (link) => {
    this.setState({ videoUrl: link });
  };

  render() {
    const { videoUrl } = this.state;

    return (<div>
      <VideoList videoList={videoList}
                 onClick={this.handleVideoItemClick} />

      <Player url={videoUrl} />
    </div>);
  }
}
