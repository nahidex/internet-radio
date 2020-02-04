// https://www.developphp.com/lib/JavaScript/Audio

export default class Player {
    constructor() {
        this.audio = new Audio();
    }
    play(){
        this.audio.play();
    }
    playing(){
        return this.audio.playing();
    }
    on(event, callback) {
        this.audio.addEventListener(event, callback);
    }
    paused(){
        return this.audio.paused;
    }
    pause(){
        this.audio.pause();
    }
    changeSource(src) {
        this.audio.src = src;
        this.audio.load();
    }
    updateVolume(vol) {
        // console.log(vol);
        
        this.audio.volume = vol;
    }
}