var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverWidth=100;
var roverHeight=90;

var roverImage="rover.png";
var roverX=10;
var roverY=10;
var arrayImagens=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
var randomNumber=Math.floor(Math.random()*4);
var backgroundImage=arrayImagens[randomNumber];
function add(){
    backgroundImageTag=new Image();
    backgroundImageTag.onload=uploadBackground;
    backgroundImageTag.src=backgroundImage;

    roverImageTag=new Image();
    roverImageTag.onload=uploadRover;
    roverImageTag.src=roverImage;
}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverWidth,roverHeight)
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
keyPressed=e.keyCode;
if(keyPressed=="38"){
    up();
}
if(keyPressed=="40"){
    down();
}
if(keyPressed=="37"){
    left();
}
if(keyPressed=="39"){
    right();
}
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        uploadBackground();
        uploadRover();

    }
    
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        uploadBackground();
        uploadRover();
        
    }
    
}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        uploadBackground();
        uploadRover();
        
    }
    
}

function right(){
    if(roverX<=700){
        roverX=roverX+10;
        uploadBackground();
        uploadRover();
        
    }
    
}