//variables
var characterX = 600;
var characterY = 850;

//var movement
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//var shape x and y
var shapeX = 30;
var shapeY = 50;
var shapeXspeed;
var shapeYspeed;

//var shape number 2 x and y
var shapeX2 = 100;
var shapeY2 = 400;
var shapeX2speed;
var shapeY2speed;

//var mouse shape
var mouseShapeX;
var mouseShapeY;


//function
function setup() {
  createCanvas(650, 900);
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
//mouse
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}




function draw() {

//background
background(200,203,190);
stroke(0);
fill(0);

//create borders
createBorders();

//create exit sign
createExitSign();


//character
createCharacter();

 
createYouWin();
    

//mouse click
createMouseClicked();

//obstacle 1
createObstacle1();

//movement for obstacle
createObstacle1Mov();

//obstacle 2 
createObstacle2();

//movement for obstacle 2
createObstacle2Mov();

//char movement
createCharacterMov();


//functions below

//creating borders
function createBorders()
{
rect(0,0,width,10);
rect(0,50,10,height);
rect(0,height-10,width,10);
rect(width-10,0,10,height-10);

}


//character stuff again

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}
//character
function createCharacter()
{
    fill(100,45,230);
    circle(characterX,characterY,25);
}
//character movements
function createCharacterMov()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
//obstacle 1 functions
function createObstacle1()
{
fill(201,86,91)
circle(shapeX,shapeY,45)
}

function createObstacle1Mov()
{
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;
//more movement for 1
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
}

//obstacle 2 functions
function createObstacle2()
{
fill(10,290,50)
square(shapeX2,shapeY2,30)
}

//obstacle 2 movement functions
function createObstacle2Mov()
{
shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeX2 += shapeX2Speed;
shapeY2 += shapeY2Speed;
//move movement stuff for 2
    if(shapeX2 > width)
    {
        shapeX2 = 0;
    }
    if(shapeX2 < 0)
    {
        shapeX2 = width;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 0;
    }
    if(shapeY2 < 0)
    {
        shapeY2 = height;
    }
}

//exit sign function
function createExitSign()
{
fill(0,0,0);
textSize(20);
text("exit", width-620, height-860);

}
//you win function
function createYouWin()
{
if(characterX < width && characterY < width-615)
{
        fill(0);
        stroke(5);
        textSize(24);
        text("You Win!", width/2-40, height/2-40);
}
}

//mouse function
function createMouseClicked()
{
    fill(300,100,220);
    circle(mouseShapeX, mouseShapeY, 20);
}

}
