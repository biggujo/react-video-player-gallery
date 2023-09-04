import React, { Component } from 'react';
import ReactPlayer from 'react-player/vimeo';
import PropTypes from 'prop-types';

class Player extends Component {
  static propTypes = {
    url: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isVideoLoaded: false,
    };
  }

  componentDidUpdate(prevProps) {
    console.log('Update!');

    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  handleReady = () => {
    this.setState({ isVideoLoaded: true });
  };

  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;

    const shouldShowLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '600px' : 0;

    return (<>
      {shouldShowLoader && <h2>Please, stand by...</h2>}
      {url && <ReactPlayer url={url}
                           controls={true}
                           width={playerSize}
                           onReady={this.handleReady} />}
    </>);
  }
}

export default Player;
