import React, { Component } from 'react'

export default class ButtonPlay extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.playerHandler(this.props.url);
  }

  render() {
    return (
        <button onClick={this.handleClick}
          className={'play-pause' + (false ? ' active' : '')}>
          <div className="inner-wrapper">
            <i className="material-icons-round">play_arrow</i>
            <i className="material-icons-round">pause</i>
          </div>
      </button>
    )
  }
}
