window.onload = setup
function setup(){
    /*
    console.log("running setup");
    console.log(document.getElementById("one"));
    console.log(document.querySelector("#one"));

    console.log(document.getElementsByTagName("div"));

    let allDivs = document.getElementsByTagName("div");
    console.log(allDivs.length);

    console.log(document.getElementsByTagName("div").length);

    console.log(document.getElementsByTagName("div")[0]);

    console.log(document.querySelectorAll("div"));

    console.log(document.getElementsByClassName("square_shape"));
    console.log(document.querySelectorAll(".square_shape"));

    console.log("running setup");
    */

    //console.log(document.querySelector("#one").style);

    console.log(document.querySelectorAll("span")[0].parentElement.parentElement.parentElement);
    console.log(document.querySelectorAll(".wrapper_flex_box")[0].children);

    //document.getElementById("two").children[0].innerHTML = "<h3> Hello JS</h3>";

    let childrenOfTwo = document.getElementById("two").children;
    for(let i =0; i<childrenOfTwo.length; i++){
        childrenOfTwo[i].innerHTML = "<h3> Hello JS </h3>"
    }

    document.querySelector(".square_shape").classList.add("another_class");

    document.querySelector("h1").setAttribute("id", "newID");

    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)

    let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
    let toRemove = document.getElementById("six");
    parentElementToRemoveFrom.removeChild(toRemove);
}
