nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function draw(){
image(video,0,0,300,300)
image(clown_nose,nosex,nosey,50,30);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        nosex=results[0].pose.nose.x-20
        nosey=results[0].pose.nose.y
        console.log("nosey="+results[0].pose.nose.y);
    }
}
function take_snapshot(){
    save('clown.png')
}