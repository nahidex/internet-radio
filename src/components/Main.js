import React, { Component } from 'react'
import Header from './Header'
import Favlist from './Favlist'
import MusicPlayer from '../api/player'
import Player from './Player'
import { PlayerProvider } from '../api/context'

export default class Main extends Component {
  render() {
    return (
      <PlayerProvider value={MusicPlayer}>
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
