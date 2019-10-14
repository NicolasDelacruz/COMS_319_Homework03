const fillHeight = 5;
const fillWidth = 5;
let canvas = document.getElementById("canvasId");
let ctx = canvas.getContext("2d");

let xPos, yPos;
let snakeBody = [];

let turnDirection;

let timer = setInterval(function () {
    fillSnake();
    moveSnake();
}, 1000);

function leftTurn(){
    if(turnDirection == "right"){
        turnDirection = "up";
    }
    else if(turnDirection == "left"){
        turnDirection = "down";
    }
    else if(turnDirection == "down"){
        turnDirection = "right";
    }
    else if(turnDirection == "up"){
        turnDirection = "left";
    }
}

function rightTurn() {
    if(turnDirection == "right"){
        turnDirection = "down";
    }
    else if(turnDirection == "left"){
        turnDirection = "up";
    }
    else if(turnDirection == "down"){
        turnDirection = "left";
    }
    else if(turnDirection == "up"){
        turnDirection = "right";
    }
}

function fillSnake(){
    for (let i = 0; i < snakeBody.length; ++i){
        ctx.fillStyle = "#61ff00";
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, fillWidth, fillHeight);
    }
}

function startStop(){
    let startStopBtn = document.getElementById("startStopButton");
    if (startStopBtn.value == "Start"){
        startStopBtn.value = "Stop";
        init();
    }
    else if (startStopBtn.value == "Stop"){
        startStopBtn.value = "Start";
    }

}

function init(){
    if(snakeBody.length < 1){
        turnDirection = "right";
        xPos = 0;
        yPos = 0;
        let snakeBodyElement = {x: xPos, y: yPos}
        snakeBody.push(snakeBodyElement);
    }
}

function moveSnake() {
    if(turnDirection == "left"){
        xPos = xPos - 5;
        yPos = yPos;
    }
    else if(turnDirection == "right"){
        xPos = xPos + 5;
        yPos = yPos;
    }
    else if(turnDirection == "down"){
        xPos = xPos;
        yPos = yPos + 5;
    }
    else if(turnDirection == "up"){
        xPos = xPos;
        yPos = yPos - 5;
    }

    if (xPos >= 0 && yPos >= 0) {
        let snakeBodyElement = {x: xPos, y: yPos}
        snakeBody.push(snakeBodyElement);
    }
    else {
        //STOP function
    }
}