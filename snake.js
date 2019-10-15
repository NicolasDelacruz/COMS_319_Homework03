const fillHeight = 10;
const fillWidth = 10;
let canvas = document.getElementById("canvasId");
let ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let snakeRunning;
let xPos = 0;
let yPos = 250;
let snakeBody = [];

let turnDirection;

let timer = setInterval(function () {
    if(snakeRunning) {
        fillSnake();
        moveSnake();
    }
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
        snakeRunning = true;
        startStopBtn.value = "Stop";
        startMovement();
    }
    else if (startStopBtn.value == "Stop"){
        snakeRunning = false;
        startStopBtn.value = "Start";
        stopMovement();
    }
}

function startMovement(){
    if(snakeBody.length < 1){
        turnDirection = "right";
        xPos = 0;
        yPos = canvasHeight/2;
        let snakeBodyElement = {x: xPos, y: yPos}
        snakeBody.push(snakeBodyElement);
    }
    else {
        timer = setInterval(function () {
            fillSnake();
            moveSnake();
        }, 1000);
    }
}

function moveSnake() {
    if(turnDirection == "left"){
        xPos = xPos - 10;
        yPos = yPos;
    }
    else if(turnDirection == "right"){
        xPos = xPos + 10;
        yPos = yPos;
    }
    else if(turnDirection == "down"){
        xPos = xPos;
        yPos = yPos + 10;
    }
    else if(turnDirection == "up"){
        xPos = xPos;
        yPos = yPos - 10;
    }

    let snakeBodyElement = {x: xPos, y: yPos}
    if (goodSnakeElement(snakeBodyElement)) {
        snakeBody.push(snakeBodyElement);
    }
    else {
        gameOver();
    }
}

function stopMovement() {
    clearInterval(timer);
}

function gameOver(){
    snakeRunning = false;

    let startStopBtn = document.getElementById("startStopButton");
    startStopBtn.value = "Game Over!"
}

function goodSnakeElement(givenSnakeElement){
    console.log(snakeBody);
    console.log(givenSnakeElement);

    if(givenSnakeElement.x < 0 || givenSnakeElement.y < 0 || givenSnakeElement.x > canvasWidth || givenSnakeElement.y > canvasHeight){
        return false;
    }

    if(snakeContains(givenSnakeElement)){
        return false;
    }

    return true;
}

function snakeContains(givenElement){
    for(let i = 0; i < snakeBody.length; ++i){
        if(JSON.stringify(snakeBody[i]) === JSON.stringify(givenElement))
            return true;
    }
    return false;
}

