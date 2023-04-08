function preload(){
    img=loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jepj?auto=compress&cs=tinysrgb&dpr=1&w=500');
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    Image(img,0,0,640,480);
    tint(tint_color);
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}