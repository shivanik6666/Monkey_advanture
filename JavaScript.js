var score = 0;
var cross = true;


document.onkeydown = function (e) {
    var obstacles = document.querySelector('.obstacles');
    var obstaclesX = parseInt(window.getComputedStyle(obstacles).getPropertyValue('left'));

    if (e.keyCode === 38) {
        obstacles.classList.add('animatedobstacles');
        setTimeout(function () {
            obstacles.classList.remove('animatedobstacles');
        }, 700);
    } else if (e.keyCode === 39) {
        obstacles.style.left = (obstaclesX + 300) + "px";
    } else if (e.keyCode === 37) {
        obstacles.style.left = (obstaclesX - 112) + "px";
    }
};

setInterval(function () {
    var dragon = document.querySelector('.dragon');
    var gameOver = document.querySelector('.gameOver');
    var obstacles = document.querySelector('.obstacles');

    var dx = parseInt(window.getComputedStyle(obstacles).getPropertyValue('left'));
    var dy = parseInt(window.getComputedStyle(obstacles).getPropertyValue('top'));

    var ox = parseInt(window.getComputedStyle(dragon).getPropertyValue('left'));
    var oy = parseInt(window.getComputedStyle(dragon).getPropertyValue('top'));

    var offsetX = Math.abs(dx - ox);
    var offsetY = Math.abs(dy - oy);

    if (offsetX < 145 && offsetY < 53) {
        gameOver.style.visibility = 'visible';
        dragon.classList.remove('dragonAni');
    } else if (offsetX < 145 && cross) {
        score += 100;
        updateScore(score);
        
        cross = false;
        setTimeout(function () {
            cross = true;
        }, 100);
    }
}, 10);
function updateScore(score) {
    var scoreCont = document.getElementById("scoreCont");
    scoreCont.innerHTML = "Your Score:" + "" + score;
}


