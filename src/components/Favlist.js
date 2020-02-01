import React, { Component } from 'react'
import api from './../api/api';
import FavItem from './FavItem';
import Player from '../api/player';

export default class Favlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [
          {
          id: '',
          name: '',
          frequency: '',
          url: ''
        }
      ],
    }
    this.player = new Player();
    this.playerHandler = this.playerHandler.bind(this);
  }

  componentDidMount() {
    const allChannel = api.getAllSong();
    this.setState({
      channel: allChannel
    });
  }

  playerHandler(data) {
    this.player.on('loadedmetadata', function(event) {
      console.log(event);
    })

    if (this.player.paused()) {
      this.player.changeSource(data);
      this.player.play();  
    } else {
      this.player.pause();
    }   
  }

  render() {
    const { channel } = this.state;

    return (
      <div className="fav-list">
        <h5 className="list-heading">Favorite List</h5>
        <ol>
          {channel.length > 0 && channel.map((channel, i) => {
            return (
              <FavItem key={i} playerHandler={this.playerHandler}  channel={channel} />
            );
          })}
        </ol>
      </div>
    )
  }
}


{/* <li>
            <a href="#">
              <div className="logo-text">
                <span>D</span>
                <div className="title-area">
                  <h5>Radio Dhoni</h5>
                  <h6>88.0 FM</h6>
                </div>
              </div>
              <div className="actions">
                <button className="play-pause active">
                  <div className="inner-wrapper">
                    <i className="material-icons-round">play_arrow</i>
                    <i className="material-icons-round">pause</i>
                  </div>
                </button>
              </div>
            </a>
          </li> */}