var box = document.getElementById("box");

var Grow = document.getElementById("button1");
Grow.onclick = function() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
}

var Blues = document.getElementById("button2");
Blues.onclick = function() {
    document.getElementById("box").style.backgroundColor = "lightblue" ;
    // col.style.color="lightblue";
}

var Fade = document.getElementById("button3");
Fade.onclick = function() {
    document.getElementById("box").style.opacity = "0.5";
}

var Reset = document.getElementById("button4");
Reset.onclick = function () {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.border = "thin orange";
    document.getElementById("box").style.transform = "rotate(90deg)";
}

var Border = document.getElementById("button5");
Border.onclick = function () {
    document.getElementById("box").style.border = "thick dotted green"
}

var Pop = document.getElementById("button6");
Pop.onclick = function () {
    document.getElementById("box").style.transform = "rotate(45deg)";
}