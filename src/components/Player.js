import React, { Component } from 'react'
import { PlayerConsumer } from '../api/context'

export default class Player extends Component {
    render() {
        return (
          <PlayerConsumer>
          {
              ({ currentlyPlayingChannel, isPlaying, lastPlayedChannel, handlePlay, handlePause}) => {    
              var ch;              
              if(!isPlaying) {
                ch = lastPlayedChannel;
              } else {
                ch = currentlyPlayingChannel;
              }

              return (
                <div className="player-wrapper">
                  <figure><img src="./img/foorti.png" alt="" /></figure>
                  <div className="description">
                    <h1>{ ch.name || "No Channel" }</h1>
                    <h6>{ ch.frequency || 'No frequency' }</h6>
                    <p>Currenlty Playing</p>
                    <a href="#" onClick={() => { isPlaying ? handlePause(ch) : handlePlay(ch) }} className="btn-common"><i className="material-icons-round">{isPlaying ? 'pause' : 'play_arrow'}</i> {isPlaying? 'Pause': 'Play'}</a>
                  </div>
                </div>
              )
            }
          }
          </PlayerConsumer>
        )
    }
}