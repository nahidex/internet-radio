/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */


import chData from './db';

// const fs = require('fs');
// console.log(fs);

const btns = document.querySelectorAll('.btn');
const audio = document.getElementById("audioPlayer"); 
const playBtn = document.getElementById("play"); 
const pauseBtn = document.getElementById("pause"); 
const chList = document.getElementById("channel-list"); 
// console.log(chList);


for(let ch of chData ) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = ch.name;
    button.addEventListener('click', function(){
        // audio.play(); 
        changeTrack(ch.url);
    });
    li.appendChild(button);
    chList.appendChild(li);
}


for (let btn of btns) {
    btn.onclick = () => btn.classList.toggle('active');
}

function changeTrack(track){
    audio.src = track;
    audio.play();
}

playBtn.addEventListener('click', function(e) {
    audio.play();
    e.preventDefault();
});

pauseBtn.addEventListener('click', function(e) {
    audio.pause();
    e.preventDefault();
});




