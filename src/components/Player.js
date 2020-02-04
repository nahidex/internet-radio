import React, { Component } from 'react'
import { PlayerConsumer } from '../api/context';

export default class Player extends Component {
  constructor(prop) {
    super(prop);
    this.handleSlider = this.handleSlider.bind(this);
    this.updateHandlePosition = this.updateHandlePosition.bind(this);
    this.state = {
      volume: 0
    }
  }

  handleSlider(e) {
    const self = this;
    const sliderWrapper = document.querySelector('#slider');
    const innerBar = document.querySelectorAll('#bar');
    const handle = document.querySelectorAll('#handle');
    let drag = false;
    const elem = {
      sliderWrapper,
      innerBar,
      handle
    }
  
    sliderWrapper.addEventListener('mousedown', (event) => {
      drag = true;
      this.updateHandlePosition(event.clientX, elem);
    })

    document.addEventListener('mousemove', (event) => {
      if (drag) this.updateHandlePosition(event.clientX, elem);
    })

    document.addEventListener('mouseup', function (event) {
      drag = false;
    });
  }

  updateHandlePosition (x, { sliderWrapper, innerBar, handle }, vol) {
    var parcentage;
    if(vol) {
      parcentage = vol * 100;
    } else {
      var position = x - sliderWrapper.offsetLeft;
      var parcentage = 100 * position / sliderWrapper.clientWidth;
    }
    
    if (parcentage > 100) {
      parcentage = 100;
    }
    if (parcentage < 0) {
      parcentage = 0;
    }
    innerBar[0].style.width = parcentage + '%';
    handle[0].style.left = parcentage + '%';
    
    this.setState({
      volume: (parcentage / 100)
    })
  }

  render() {
    return (
      <div className='top-player'>
        <div className="player-actions">
          <button className="player-btn shuffle">
            <img src="./img/icons/shuffle.svg" alt="" />
          </button>
          <button className="player-btn previous">
            <img src="./img/icons/previous.svg" alt="" />
          </button>
          <button className="player-btn play-pause">
            <img src="./img/icons/play.svg" alt="" />
          </button>
          <button className="player-btn next">
            <img src="./img/icons/next.svg" alt="" />
          </button>
          <button className="player-btn repeat">
            <img src="./img/icons/repeat.svg" alt="" />
          </button>
        </div>
        <div className="player-description">
          <figure>
            <img src="./img/foorti.png" alt="" />
          </figure>
          <div className="texts">
            <p>Channel Name</p>
            <span>Sub Heading</span>
          </div>
        </div>
        <div className="player-volume">
          <PlayerConsumer>
            {
              ({handleVolume}) => {
                return(
                  <div id="slider" onMouseDown={this.handleSlider} className="slider" onMouseUp={handleVolume(this.state.volume)}>
                    <span id="bar" className="bar"></span>
                    <span id="handle" className="handle"></span>
                  </div>
                )
              }
            }
          </PlayerConsumer>
        </div>
      </div>
    )
  }
}
