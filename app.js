'use strict';
let starImg = document.getElementById('stars');
let moonImg = document.getElementById('moon');
let mountains3Img = document.getElementById('mountains3');
let mountains4Img = document.getElementById('mountains4');
let riverImg = document.getElementById('river');
let boatImg = document.getElementById('boat');
let webtitle1 = document.querySelector('.WebTitle');

window.onscroll = function () {
    let value = scrollY;
    starImg.style.left = value + 'px';
    moonImg.style.top = value * 4 + 'px';
    mountains3Img.style.top = value * 2 + 'px';
    mountains4Img.style.top = value * 1.5 + 'px';
    riverImg.style.top = value + 'px';
    boatImg.style.top = value + 'px';
    boatImg.style.left = value * 3 + 'px';
    if (value >= 51) {
        webtitle1.style.fontSize =50 + 'px';
        webtitle1.style.postion = 'fixed';
        if (value >= 95) {
            document.querySelector('.main').style.background = 'linear-gradient(#10001f,#376281';
        }
        else {
            document.querySelector('.main').style.background = 'linear-gradient(#46013f,#002)';
        }
    }
    else {
        webtitle1.style.fontSize = value + 'px';
    }
}
