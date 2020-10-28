canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=100;
rover_y=100;
rover_width=100;
rover_height=100;
nasa_imagearray=["Image 1.jpg","Image 2.jpg","Image 3.jpg","Image 4.jpg","Image 5.jpg"];
randomnumber=Math.floor(Math.random()*5);
background_image=nasa_imagearray[randomnumber];
rover_image="rover.png";
function add(){
 bg_image=new Image();
 bg_image.onload=uploadbgimage;
 bg_image.src=background_image;
 r_image=new Image();
 r_image.onload=uploadrover;
 r_image.src=rover_image;
}
function uploadbgimage(){
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(r_image,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37'){
        left();
        console.log("left is pressed");
    }
    if(keypressed=='38'){
        up();
        console.log("up is pressed");
    } if(keypressed=='39'){
        right();
        console.log("right is pressed");
    } if(keypressed=='40'){
        down();
        console.log("down is pressed");
    }

}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbgimage();
        uploadrover();
    }
}function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbgimage();
        uploadrover();
    }
}function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbgimage();
        uploadrover();
    }
}function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbgimage();
        uploadrover();
    }
}