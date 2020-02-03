import React, { Component } from 'react'
import ButtonPlay from './ButtonPlay';

export default class FavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, frequency, url } = this.props.channel;
    
    return (
      <li>
        <a href="#">
          <div className="logo-text">
            <span className="active">F</span>
            <div className="title-area">
              <h5>{name}</h5>
              <h6>{frequency}</h6>
            </div>
          </div>
          <div className="actions">
            <ButtonPlay playerHandler={ this.props.playerHandler } channel={this.props.channel}/>
          </div>
        </a>
      </li>
    );
  }
}
