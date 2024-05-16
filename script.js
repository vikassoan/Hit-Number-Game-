var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makerBubble(){
    var clutter = "";

for (let i = 0; i <= 150; i++) {
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = `${timer} Sec.`;
        }
        else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<div><h1>GAME OVER</h1> <p>Your Score is : ${score}</p></div>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makerBubble();
        getNewHit();
    }
})

runTimer();
makerBubble();
getNewHit();
