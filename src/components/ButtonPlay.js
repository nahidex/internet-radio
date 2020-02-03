import React, { Component } from 'react'
import { PlayerConsumer } from '../api/context'

export default class ButtonPlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlayerConsumer>
        {
          ({ currentlyPlayingChannel, handlePlay, handlePause }) => {
            
            return (
              <button onClick={() => {
              
              if (currentlyPlayingChannel.id === this.props.channel.id) {
                handlePause(this.props.channel);
              } else {
                handlePlay(this.props.channel);
              }

            }}
              className={'play-pause' + (currentlyPlayingChannel.id === this.props.channel.id ? ' active' : '')}>
              <div className="inner-wrapper">
                <i className="material-icons-round">play_arrow</i>
                <i className="material-icons-round">pause</i>
              </div>
            </button>
          )
          }
        }
      </PlayerConsumer>
    )
  }
}
