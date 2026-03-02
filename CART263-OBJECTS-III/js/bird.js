class Bird extends Animal{
  // Create a new bird object that moves to the right
  constructor(x, y,width,height) {
    super(x,y,width,height);
    //this.x = x;
    //this.y = y;
    //this.width = width;
    //this.height = height;
    this.vx = Math.random() * 1;
    this.vy = 0;
    this.animalBody = document.createElement("div");
    this.originalY = this.y;

  }

  // Move the bird according to its velocity
   move() {
    //console.log("go");
    
    this.y=this.originalY + Math.sin(this.angle)*8
    this.angle+=0.05;
    this.veer();
    super.move();
   }
  /*move() {
    this.x += this.vx;
    this.y += this.vy;
    //update the actual div...
    this.animalBody.style.left = this.x + "px";
    this.animalBody.style.top = this.y + "px";
  }
*/

   // veer() causes the bird to randomly veer on the y axis
  veer() {
    let r = Math.random();
    //console.log("in veer "+r)
    if (r < this.sleepiness) {
      this.vy += randomRange(-.1, .1);
    }
  }
  
  // Overriding the superclass' wrap() method!
  wrap() {
    // NEW! Call the superclass (Animal) version of wrap()
    // This will handle wrapping on the x axis for us.
    // We use "super" to access methods in the SUPERclass (Animal)
    // So this calls the Animal version of wrap() after we make the specific changes 
    // in the SUBclass.
   
    if (this.x > window.innerWidth) {
      //reset
      this.vy = 0;
    }
     super.wrap();
   }
   
  // Wrap the bird if it reaches the right edge
  /*wrap() {
    if (this.x > window.innerWidth) {
      this.x -= window.innerWidth;
    }
  }
*/
 // Display the bird as a ellipse
  renderAnimal() {
    super.renderAnimal();
    // this.animalBody.classList.add("animal");
    // this.animalBody.style.width = this.width + "px";
    // this.animalBody.style.height = this.height + "px";
    // this.animalBody.style.left = this.x + "px";
    // this.animalBody.style.top = this.y + "px";
    // this.animalBody.style.borderRadius = this.width + "px";
    this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
    //add to the DOM
    document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
  }

}

function randomRange(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
  }

function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
}