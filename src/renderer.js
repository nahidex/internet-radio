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

import './scss/style.scss';
// const fs = require('fs');
// console.log(fs);

const btns = document.querySelectorAll('.btn');
const audio = document.getElementById("audioPlayer"); 
const playBtn = document.getElementById("play"); 
const pauseBtn = document.getElementById("pause"); 
const chList = document.getElementById("channel-list"); 
// console.log(chList);

const chData = [
    {
        id: 1,
        name: 'Radio Bhumi',
        frequency: '92.8 FM',
        url: "http://149.56.195.94:8545/stream/1/"
    },
    {
        id: 2,
        name: 'Radio Foorti',
        frequency: '88.0 FM',
        url: "http://119.148.23.88:1021/;"
    },
    {
        id: 3,
        name: 'ABC Radio',
        frequency: '89.2 FM',
        url: "http://node-14.zeno.fm/h7n8ug96eeruv?rj-ttl=5&rj-tok=AAABb_oUxugASngOMZOKF0NcaQ"
    },
    {
        id: 4,
        name: 'Radio Shadhin',
        frequency: '92.4 FM',
        url: "http://node-17.zeno.fm/eabgu655puquv?rj-ttl=5&rj-tok=AAABb_oVrpgA6sxyT75novrVfg"
    },
    {
        id: 5,
        name: 'Dhaka FM',
        frequency: '90.4 FM',
        url: "http://118.179.219.244:8000/;"
    },
    {
        id: 6,
        name: 'Radio 71',
        frequency: '98.4 FM',
        url: "http://103.253.47.173:8000/stream/1/"
    },
    {
        id: 7,
        name: 'Capital FM',
        frequency: '98.4 FM',
        url: "http://str.radiocapital.fm:8000/stream"
    },
    {
        id: 8,
        name: 'Spice FM',
        frequency: '96.4 FM',
        url: "http://162.254.149.187:9300/;"
    },
    {
        id: 9,
        name: 'Colors FM',
        frequency: '101.6 FM',
        url: "http://45.64.135.88:8000/stream/1/"
    },
    {
        id: 10,
        name: 'Radio Dhoni',
        frequency: '91.2 FM',
        url: "http://182.160.110.180:1020/;"
    },
    {
        id: 11,
        name: 'Radio Jago',
        frequency: '94.4 FM',
        url: "http://192.240.102.133:12496/stream/1/"
    }
];

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




