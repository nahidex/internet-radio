import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="player-wrapper">
              <figure><img src="./img/foorti.png" alt="" /></figure>
              <div className="description">
                <h1>Radio Foorti</h1>
                <h6>88.0 FM</h6>
                <p>Currenlty Playing</p>
                <a href="#" className="btn-common"><i className="material-icons-round">play_arrow</i> Play</a>
              </div>
            </div>
        )
    }
}
