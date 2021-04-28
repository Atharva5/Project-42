function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
  
}

function draw() {

background("black");  

hr = hour()
min = minute()
sec = second()

sAngle = map(sec, 0, 60, 0, 360);
mAngle = map(min, 0, 60, 0, 360);
hAngle = map(hr % 12, 0, 12, 0, 360);

translate(200, 200);
rotate(-90);

push()
rotate(sAngle)
stroke("green");
strokeWeight(7)
line(0, 0, 100, 0);
pop()

push()
rotate(mAngle)
stroke("red");
strokeWeight(7)
line(0, 0, 75, 0);
pop()

push()
rotate(hAngle)
stroke("blue");
strokeWeight(7)
line(0, 0, 50, 0);
pop()

stroke(255,0,255);
point(0,0);
strokeWeight(10)
noFill();

stroke("green")
arc(0,0,300,300,0,0,sAngle);

stroke("red")
arc(0,0,280,280,0,0,mAngle);

stroke("blue")
arc(0,0,260,260,0,0,hAngle);

drawSprites();
}