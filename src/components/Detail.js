import React, { Component } from 'react'
import { PlayerConsumer } from '../api/context'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: null
    }
  }
  handleVolume(e, player) {
    player.volume = e.target.value;
  }
    render() {
        return (
          <PlayerConsumer>
          {
              ({ currentlyPlayingChannel, isPlaying, lastPlayedChannel, progress, handlePlay, handlePause}) => {    
              var ch;              
              if(!isPlaying) {
                ch = lastPlayedChannel;
              } else {
                ch = currentlyPlayingChannel;
              }

              return (
                <div className="detail-wrapper">
                  <figure>
                    <img className={ progress? 'loader': '' } src={ progress? "./img/icons/loader.svg": ch.logo } alt="" />
                  </figure>
                  <div className="description">
                    <h1>{ ch.name || "No Channel" }</h1>
                    <h6>{ ch.frequency || 'No frequency' }</h6>
                    <p>Currenlty Playing</p>
                    <a href="#" onClick={() => { isPlaying ? handlePause(ch) : handlePlay(ch) }} className="btn-common"><i className="material-icons-round">{isPlaying ? 'pause' : 'play_arrow'}</i> {isPlaying? 'Pause': 'Play'}</a>
                    <input className="volume-slider"  onChange={(e) => this.props.handleVolume(e.target.value)} step="0.01" min='0' max='1' type="range"/>
                  </div>
                </div>
              )
            }
          }
          </PlayerConsumer>
        )
    }
}