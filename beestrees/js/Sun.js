class Sun {
    constructor(x,y, sunColor){
        this.x = x;
        this.y = y;
        this.vx = 1; //for movement on x
        this.vy =1; //for movement on y
        this.sunColor = sunColor;
        this.sunDiv =  document.createElement("div")

        renderSun(){
    // //sun - IN the sky
    this.sunDiv.classList.add("sun");
    this. sunDiv.style.background = `rgb(${this.sunColor.r},${this.sunColor.g},${this.sunColor.b})`;
    // //append to the SKY div
    document.querySelector(".sky").appendChild(this.sunDiv);
    }
 }
}