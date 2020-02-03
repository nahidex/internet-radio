import React, { Component } from 'react'
import ButtonPlay from './ButtonPlay';
import { PlayerConsumer } from '../api/context';

export default class FavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, name, frequency, url } = this.props.channel;
    
    return (
      <li>
        <div className='item'>
          <div className="logo-text">
            <PlayerConsumer>
              {
                ({currentlyPlayingChannel}) => {
                  return <span className={ currentlyPlayingChannel.id === id ? 'active': ''}>F</span>
                }
              }
            </PlayerConsumer>
            
            <div className="title-area">
              <h5>{name}</h5>
              <h6>{frequency}</h6>
            </div>
          </div>
          <div className="actions">
            <ButtonPlay playerHandler={ this.props.playerHandler } channel={this.props.channel}/>
          </div>
        </div>
      </li>
    );
  }
}
