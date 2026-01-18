"use strict";


/*
// QUESTION 5

let counter = 0;

let radius = 30;
let ellipseAlpha = 30;

const orangeSquare = {
    x: 30,
    y: 20,
    w: 55,
    h: 55
}

function setup() {
    createCanvas(600,600);
    background(0);

}

function draw() {

    displaySquare();

    if (counter >=1 && counter <=10){
        let i = 0;
        let currentRadius = radius;
        let currentAlpha = ellipseAlpha;

        while (i < counter){
            fill(255, currentAlpha);
            noStroke();
            ellipse(width / 2, height / 2, currentRadius * 2);

            currentRadius += 15;
            currentAlpha += 20;
            i++;
        }
    }
}

function displaySquare(){
    push();
    square(orangeSquare.x, orangeSquare.y, orangeSquare.w);
    pop();

    if(checkCollisionWithSquare()){
        fill(255, 200, 100);
    }

    else{
        fill("orange");
    }

    pop();
}

function checkCollisionWithSquare(){
    return(
        mouseX > orangeSquare.x && mouseX < orangeSquare.x + orangeSquare.w && mouseY > orangeSquare.y && mouseY < orangeSquare.y + orangeSquare.h
    );
}

function mousePressed(){
    if(checkCollisionWithSquare()){
        counter++;
    }
}
    */

///////////////////////////////////////////////////////

/*

// QUESTION 6

let counter = 0;
let message = "test";
let size = 28;

function setup(){
    createCanvas(600,600);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(0);

    fill(255);
    textSize(size);

    text(message, width / 2, height / 2);

    for (let i = 0; i <= 9; i++) {
        text(i, i * 20, 20);
}

    
    for (let i = 1; i <= 15; i++) {
        text(i, 20, i * 20);
}

}

*/

// QUESTION 7

let circleSize = 40;
let circleColor;

let shapeChange = true;

function setup(){
    createCanvas(600,600);
    randomColor();
}
 
function draw(){
    background(0);
    
    for (let y = circleSize / 2; y < height; y += circleSize){
        for (let x = circleSize / 2; x < width; x += circleSize){
            fill(circleColor);
            ellipse(x, y, circleSize);

        if (shapeChange){
        ellipse(x,y, circleSize);
    }
        else{
        rectMode(CENTER);
        rect(x, y, circleSize, circleSize);
    }
        }
    }
}

function randomColor(){
    circleColor = color(random(255), random(255), random(255));
}

function keyPressed(){
    if(key === ' '){
        randomColor();
    }
}

function mousePressed(){
    shapeChange = !shapeChange;
}