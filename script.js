function fix() {
    let coconut = document.getElementById("coconut");
coconut.remove();
let coast = document.getElementById("coast");
coast.remove();
let watermelon = document.getElementById("watermelon");
watermelon.remove();
let sunflowers = document.getElementById("sunflowers");
sunflowers.remove();



let christmasTree =  document.createElement("img");
christmasTree.id  = "christmasTree";
christmasTree.src = "to-add/christmasTree.jpg"

let photos = document.getElementById("photos");
photos.appendChild(christmasTree);


let snowmen =  document.createElement("img");
snowmen.id  = "snowmen";
snowmen.src = "to-add/snowmen.jpg"

let tree = document.getElementById("photos");
tree.appendChild(snowmen);


let stockings =  document.createElement("img");
stockings.id  = "stockings";
stockings.src = "to-add/stockings.jpg";

let snowman = document.getElementById("photos");
snowman.appendChild(stockings);
}



