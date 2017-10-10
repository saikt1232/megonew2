/** Logic to move the duck!! */

import './styles.scss';

var myduck = document.getElementById('myduck');
var startbtn = document.getElementById('startbtn');
var stopbtn = document.getElementById('stopbtn');

var right = 0;
var startmovefunhandler, startreversefunhandler;
var pageWidth = document.body.offsetWidth;

function startmovefun() {
    clearInterval(startreversefunhandler);
    startmovefunhandler = setInterval(function () {
        if (pageWidth !== right) {
            right += 1;
            myduck.style.right = right + 'px';
        } else {
            $('#myduck').css('transform','rotateY(' + 180 + 'deg)');
            moveReverse(right);
        }
    }, 10);
}


function moveReverse(right) {
    clearInterval(startmovefunhandler);
    startreversefunhandler = setInterval(function () {
        if (right !== 0) {
            right -= 1;
            myduck.style.right = right + 'px';
        } else {
            $('#myduck').css('transform','rotateY(' + 180 + 'deg)');
            startmovefun();
        }
    }, 10);
}

var stopmovefun = function () {
    clearInterval(startmovefunhandler);
    clearInterval(startreversefunhandler);
}


startbtn.addEventListener('click', startmovefun);
stopbtn.addEventListener('click', stopmovefun);





// var myduck = document.getElementById('myduck');
// console.log("myduck.style.right");
// console.log(myduck.style.right+1);