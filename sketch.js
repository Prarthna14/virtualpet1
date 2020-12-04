//Create variables here
var dog,dogImage1,dogImage2,foodS,database;
var x;
function preload()
{
  //load images here
  dogImage1=loadImage("dogImg.png");
  dogImage2=loadImage("dogImg1.png");
  
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
dog=createSprite(200,300,150,150);
dog.addImage(dogImage1);
dog.scale=0.2;
database.ref('food').on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);
  }
  drawSprites();
  //add styles here
fill(255,255,244);
text("foodRemaining"+foodS,170,200);
textSize(13);
text("note:press the up arrow key to feed the drago milk",130,10,300,20);
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref('/').update({
  food:x
})
}


