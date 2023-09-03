import React, { Component } from 'react';
import VideoList from './VideoList';
import videoList from 'videos.json';

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
    return (<div>
      <VideoList videoList={videoList}
                 onClick={this.handleVideoItemClick} />
    </div>);
  }
}
