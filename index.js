let img = document.getElementById("mario");

let canvas;
    let context;

    window.onload = init;

    function init(){
        // Get a reference to the canvas
        canvas = document.getElementsByClassName('myCanvas');
        context = canvas[0].getContext('2d');
        draw();
    }

    function draw(){
        context.drawImage(img,10,10,32,32);
    }
