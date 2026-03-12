const ground = document.getElementById('ground');
const sky = document.getElementById('world');
const clouds = []; 
const glitches = [];
const keys = {};
const lifeContainer = document.getElementById('life-container');
const counterDisplay = document.getElementById('counter');
const statusMsg = document.getElementById('status-msg');
const uiTitle = document.querySelector('h1');

const character = document.getElementById('character');

let extractionCount = 0; //tracks how many trees and glitches
let speedX = 15; // x movement
let speedY = 15; //y movement


// clouds spawning in
function createCloud(){
    const cloud = document.createElement('div');
    cloud.className = 'cloud';

    let cloudData = {
        element: cloud,
        x: Math.random() * 80, //random starting x
        y: Math.random() * 40, // random starting y
        speed: 0.05 + Math.random() * 0.1 //different speeds
    };

    cloud.style.top = Math.random() * 40 + "%";
    cloud.style.left = Math.random() * 80 + "%";
    sky.appendChild(cloud);

    // add to array for animate
    clouds.push(cloudData);
    
}

// object creation: tree/glitch
function createTree(x, y){
    const tree = document.createElement('div');

    // switch from trees to glitch after 15 extractions
    if (extractionCount <= 15){
        tree.className = 'tree';
    } 
    else {
        // when trees glitch, change messages to warning
        tree.className = 'glitch';
        console.log("System: Glitch data pushed to array. Count is: " + extractionCount);
        statusMsg.innerText = "Environment: CRITICAL";
        statusMsg.style.color = "red";
        uiTitle.innerText = "EXTRACTION PROTOCOL";

        // glitch position when animation jitters
        let glitchData = {
            element: tree,
            baseX: x - 10,
            baseY: y - 40
        };
        glitches.push(glitchData);
    }

    // makes object spawn on cursor/character
    tree.style.left = (x-10) + 'px';
    tree.style.top = (y-40) + 'px';
    document.body.appendChild(tree);
}

    // puts 8 clouds in the sky
    for (let i = 0; i < 8; i++){
        createCloud();
}

// animation
animate();

function animate(){
    // movement
    if(!character.style.left) character.style.left = "100px";
    if(!character.style.top) character.style.top = "600px";

    let currentX = parseInt(character.style.left);
    let currentY = parseInt(character.style.top);

    // checks keys

    if (keys["ArrowRight"] && currentX < window.innerWidth - 40){
        character.style.left = (currentX + 8) + "px"; //8ox is movement speed per frame
    }

    if (keys["ArrowLeft"] && currentX > 0) {
        character.style.left = (currentX - 8) + "px";
    }

    if (keys["ArrowUp"] && currentY > window.innerHeight * 0.7) {
        character.style.top = (currentY - 8) + "px";
    }

    if (keys["ArrowDown"] && currentY < window.innerHeight - 60) {
        character.style.top = (currentY + 8) + "px";
    }

    // moves the clouds across the screen
    clouds.forEach(cloudObj => {
        cloudObj.x += cloudObj.speed;

        if (cloudObj.x > 100) cloudObj.x =-15;
        cloudObj.element.style.left = cloudObj.x + "%";
    });

    //applies the jittter 
    if(extractionCount > 15){
        glitches.forEach(glitch => {
            const jitterX = (Math.random() - 0.5) * 4;
            const jitterY = (Math.random() - 0.5) * 4;

            glitch.element.style.left = (glitch.baseX + jitterX) + "px";
            glitch.element.style.top = (glitch.baseY + jitterY) + "px";

            //starts the flashing between white and red
            if (Math.random() > 0.9){
                glitch.element.style.backgroundColor = "white";
            }
            else{
                glitch.element.style.backgroundColor = "red";
            }
        });
    }
    //keeps the loop running
    requestAnimationFrame(animate);
}

//mouse and keyboard input

// mouse click on the grass
ground.addEventListener('click', function(event){
    extractionCount++;

    // updates the UI
    counterDisplay.innerText = extractionCount;

    //game will know where user clicks, coordinates
    createTree(event.pageX, event.pageY);

        // desaturates the world every click

        const drain = extractionCount * 3;
        ground.style.filter = `sepia(${drain}%)`;
        sky.style.filter = `grayscale(${drain}%) brightness(${100 - (drain/2)}%)`;

        //makes the clouds darker
        const cloudElements = document.querySelectorAll('.cloud');
        cloudElements.forEach(cloud => {
            const darkness = Math.max(255 - (extractionCount * 5), 60);
            cloud.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
        })
    
})

// updates the visuals
function updateEnvironment(){
    // desaturate the world with every click
        const drain = extractionCount * 3;

        // css filters, simulates the disaturation, pollution
        ground.style.filter = `sepia(${drain}%)`;
        sky.style.filter = `grayscale(${drain}%) brightness(${100 - (drain/2)}%)`;

        // makes clouds darker
        const cloudElements = document.querySelectorAll('.cloud');
        cloudElements.forEach(cloud => {
            const darkness = Math.max(255 - (extractionCount * 5), 60);
            cloud.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
        })
}


// checks whay key is held down

window.addEventListener("keydown", (e) => {
    keys[e.code] = true;

    if(e.code === "Space"){
        extractionCount++;
        counterDisplay.innerText = extractionCount;

        let currentX = parseInt(character.style.left) || 100;
        let currentY = parseInt(character.style.top) || 600;

        createTree(currentX + 20, currentY + 60);
        updateEnvironment();
    }
});

window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
})