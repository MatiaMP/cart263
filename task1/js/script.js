"use strict";

// QUESITON 2

function setup(){
    createCanvas(600,600);
    background(0);

    drawEllipse(100,100,100,100,255,70,100);
    drawEllipse(200,200,60,100,200,100,100);
    drawEllipse(300,300,120,120,150,100,100);
}

function drawEllipse(x,y,w,h,r,g,b){
    fill(r,g,b);
    ellipse(x,y,w,h);

}
// QUESTION 3

/*
let rect1 = {

    x: 50,
    y: 50,
    width: 50,
    height: 50,

    fill: {

        r: 255,
        g: 0,
        b: 0
    }
}


let rect2 = {

    x: 300,
    y: 250,
    width: 50,
    height: 50,

    fill: {

        r: 0,
        g: 255,
        b: 0
    }
}


let rect3 = {

    x: 500,
    y: 400,
    width: 50,
    height: 50,

    fill: {

        r: 0,
        g: 0,
        b: 255
    }
}

function setup() {

    createCanvas(600, 600);
}

function draw() {
    background(0);
    drawRectangles();
    moveRect3();
    keyPressed();
    mouseClicked();
}

function drawRectangles() {

    fill(rect1.fill.r, rect1.fill.g, rect1.fill.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);

    fill(rect2.fill.r, rect2.fill.g, rect2.fill.b);
    rect(rect2.x, rect2.y, rect2.width, rect2.height);

    fill(rect3.fill.r, rect3.fill.g, rect3.fill.b);
    rect(rect3.x, rect3.y, rect3.width, rect3.height);
}

function moveRect3() {

    rect3.y = rect3.y - 1;

    if (rect3.y > height || rect3.y < 0) {

        rect3.y = height;
    }

    if (rect2.x > width || rect2.x < 0) {
        rect2.x = 0;
    }

    if (rect1.x > width || rect1.x < 0) {
        rect1.x = 0;
    }
}

function keyPressed() {

    if (keyIsDown(32)) {
        rect2.x = rect2.x + 10;
    }
}

function mouseClicked() {

    if (mouseIsPressed) {
        rect1.x += 10;
    }
}
*/

///////////////////////////////////////////////////////

// QUESTION 4

/*
const rect1 = {

    x: 0,
    y: 0,
    width: 200,
    height: 600,

    fill: {
        r: 0,
        g: 200,
        b: 225,
    }
}

const rect2 = {
    x: 200,
    y: 0,
    width: 200,
    height: 600,


    fill: {
        r: 0,
        g: 20,
        b: 225,
    }
}

const rect3 = {

    x: 400,
    y: 0,
    width: 200,
    height: 600,

    fill: {
        r: 5,
        g: 20,
        b: 125,
    }
}



function setup() {

    createCanvas(600, 600);
}

function draw() {

    background(0);
    drawRectangles();

    //if (mouseX < 200 && mouseX > 200 && mouseX < 400 && mouseX > 400 && mouseX < 600) {
        rect1.fill = 255;
    }

    if (mouseX < 200) {
        rect1.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect1.fill = {
            r: 0,
            g: 200,
            b: 225,
        };
    }

    if (mouseX < 400 && mouseX > 200) {
        rect2.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect2.fill = {
            r: 0,
            g: 20,
            b: 225,
        };
    }


    if (mouseX < 600 && mouseX > 400) {
        rect3.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect3.fill = {
            r: 5,
            g: 20,
            b: 125,
        };
    }

function drawRectangles() {

    fill(rect1.fill.r, rect1.fill.g, rect1.fill.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);

    fill(rect2.fill.r, rect2.fill.g, rect2.fill.b);
    rect(rect2.x, rect2.y, rect2.width, rect2.height);

    fill(rect3.fill.r, rect3.fill.g, rect3.fill.b);
    rect(rect3.x, rect3.y, rect3.width, rect3.height);
}
*/

///////////////////////////////////////////////////////


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

/*

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

*/