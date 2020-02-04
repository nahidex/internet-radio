import React, { Component } from 'react'

export default class Player extends Component {
    constructor(prop) {
        super(prop);
        this.handleSlider = this.handleSlider.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
    }
    handleSlider(e) {
        document.addEventListener('mousemove', (e)=>{
            var hContainer = document.getElementById('slider').offsetWidth;
            var bounds = hContainer - document.getElementById('handle').offsetWidth;           
            var offset = document.getElementById('slider').offsetLeft;
                
            var hPos = e.pageX - offset;
            
            if ((hPos <= bounds && hPos >= 0)) {                
                document.getElementById('handle').style.left = hPos + 'px';                
            }
        }, true );
        document.addEventListener('mouseup', function() {
            
            document.removeEventListener('mousemove', function () {
                console.log('Done');
            }, true);
        })
        
    }
    handleMouse () {
        console.log('logos');
        
        
     
    }

    render() {
        return (
            <div className='top-player'>
                <div className="player-actions">
                    <button className="player-btn shuffle">
                        <img src="./img/icons/shuffle.svg" alt=""/>
                    </button>
                    <button className="player-btn previous">
                        <img src="./img/icons/previous.svg" alt=""/>
                    </button>
                    <button className="player-btn play-pause">
                        <img src="./img/icons/play.svg" alt=""/>
                    </button>
                    <button className="player-btn next">
                        <img src="./img/icons/next.svg" alt="" />
                    </button>
                    <button className="player-btn repeat">
                        <img src="./img/icons/repeat.svg" alt=""/>
                    </button>
                </div>
                <div className="player-description">
                    <figure>
                        <img src="./img/foorti.png" alt=""/>
                    </figure>
                    <div className="texts">
                        <p>Channel Name</p>
                        <span>Sub Heading</span>
                    </div>
                </div>
                <div className="player-volume">
                    <div id="slider" className="slider">
                        <span id="bar" className="bar"></span>
                        <span id="handle" onMouseUp={this.handleMouse} onMouseDown={this.handleSlider} className="handle"></span>
                    </div>
                </div>
            </div>
        )
    }
}
