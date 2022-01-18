status = "";
function preload(){
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(450,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0, 0,400, 400);
}
function modelLoaded(){
    status = true;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("name_of_object").value;
}