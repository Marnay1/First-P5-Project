function preload(){

}
function setup(){
    canvas= createCanvas(800, 480);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 280, 140, 200, 200);
    fill("orange");
    rect(55, 25, 625, 60);
    rect(55, 370, 625, 60);
    rect(25, 30, 60, 400);
    rect(670, 30, 60, 400);
    fill("blue");
    circle(55, 55, 100);
    circle(55, 400, 100);
    circle(700, 55, 100);
    circle(700, 400, 100);
}
function take_snapshot(){
    save("first_p5_project.png")
}