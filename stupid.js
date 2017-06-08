var balls= [];
function setup(){
  createCanvas(640,480);
}
function mousePressed() {
  balls.push(new Ball(mouseX,mouseY));
}
function draw()
{
  background(0);
  for (var i = 0; i < balls.length;i++){
    balls[i].mov();
    balls[i].show();
  }
}
function Ball(x,y)
{
  this.yrand = random(-10,10);
  this.xrand = random(-10,10);
  this.x =x;
  this.y =y;
  this.show = function(){
    stroke(250);
    fill(250,250,75);
    ellipse(this.x,this.y,24,24)
  }
  this.mov = function(){
    this.y += (2* this.yrand)
    this.x += (2* this.xrand )
    if (this.y >= 480 || this.x >= 640 )
      {
        this.yrand = random(-10);
        this.xrand = random(-10);
      }
      if (this.x <= 0 || this.y <= 0){
        this.yrand = random(10);
        this.xrand = random(10);
      }

  }
}
