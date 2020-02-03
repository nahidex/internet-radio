import React, { Component } from 'react'
import Header from './Header'
import Favlist from './Favlist'
import MusicPlayer from '../api/player'
import Player from './Player'
import { PlayerProvider } from '../api/context'
import db from '../db';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.player = new MusicPlayer();
  
    this.state = { 
      isPlaying: false,
      lastPlayedChannel: db[0],
      currentlyPlayingChannel: { id: null },
      progress: false
    };
  }

  handlePlay (channel) {
    this.setState({ ...this.state, 
      ...{ isPlaying: true,
        currentlyPlayingChannel: channel
      }
    });

    this.player.changeSource(channel.url);
    this.player.play();
    this.handleProgress();
  }

  handlePause (channel) {
    if (this.state.currentlyPlayingChannel.id === channel.id) {
      this.setState({ ...this.state, ...{ isPlaying: false, progress: false, lastPlayedChannel: channel, currentlyPlayingChannel: { id: null } }});
      this.player.pause();
    
    }
  }

  handleProgress() {
    this.player.on('loadstart',  () => {
      this.setState({ progress: true })
    });

    this.player.on('loadeddata', () => {
      this.setState({ progress: false })
    })

  }

  render() {
    return (
      <PlayerProvider value={{
        currentlyPlayingChannel: this.state.currentlyPlayingChannel, 
        isPlaying: this.state.isPlaying,
        lastPlayedChannel: this.state.lastPlayedChannel,
        progress: this.state.progress,
        handlePlay: this.handlePlay,
        handlePause: this.handlePause
      }}>
      <div>
        <Header />
        <main>
          <div className="mid-area">
            <Player />
            <Favlist />
          </div>

          <div className="channel-area">
            <div className="tabs">
              <a href="#">All</a>
              <a className="active" href="#">Rock</a>
              <a href="#">Blues</a>
              <a href="#">Jazz</a>
            </div>
            <div className="nav">
              <a className="arrow left">‹</a>
              <a className="arrow right">›</a>
            </div>
          </div>

          <div className="channel-cards">
            <div className="card">
              <figure><img src="./img/aamar.png" alt="" /></figure>
              <div className="card-description">
                <h4>Radio Foorti</h4>
                <span>88.0 FM</span>
                <a href="#">P</a>
              </div>
            </div>
            <div className="card">
              <figure><img src="./img/foorti.png" alt="" /></figure>
              <div className="card-description">
                <h4>Radio Foorti</h4>
                <span>88.0 FM</span>
                <a href="#">P</a>
              </div>
            </div>
            <div className="card">
              <figure><img src="./img/jago.png" /> </figure>
              <div className="card-description">
                <h4>Radio Foorti</h4>
                <span>88.0 FM</span>
                <a href="#">P</a>
              </div>
            </div>

          </div>
        </main>
      </div>
      </PlayerProvider>
    )
  }
}
