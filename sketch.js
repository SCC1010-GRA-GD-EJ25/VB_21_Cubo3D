let cara01
let cara02
let cara03
let cara04

function preload() {
  // put preload code here
  cara01 = loadImage('./images/lisa.jpg')
  cara02 = loadImage('./images/rose.jpg')
  cara03 = loadImage('./images/jennie.jpg')
  cara04 = loadImage('./images/jisoo.jpg')

}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  cubo3D(0,0,0,100)
  cubo3D(200,200,0,100)
}

function cubo3D(x, y, z,t) {
  textureMode(NORMAL)
  texture(cara01)
  push()
  translate(x, y, z)

  //cara de abajo
  beginShape()
  vertex(-t,-t,-t,0,0)
  vertex(t,-t,-t,1,0)
  vertex(t,t,-t,1,1)
  vertex(-t,t,-t,0,1)
  vertex(-t,-t,-t,0,0)
  endShape()

  //cara frente
  texture(cara02)
  beginShape()
  vertex(-t,-t,t,0,0)
  vertex(t,-t,t,1,0)
  vertex(t,t,t,1,1)
  vertex(-t,t,t,0,1)
  vertex(-t,-t,t,0,0)
  endShape()

  //cara alta
  texture(cara03)
  beginShape()
  vertex(-t,-t,-t,0,0)
  vertex(t,-t,-t,1,0)
  vertex(t,-t,t,1,1)
  vertex(-t,-t,t,0,1)
  vertex(-t,-t,-t,0,0)
  endShape()

    //cara baja
    texture(cara04)
    beginShape()
    vertex(-t,t,-t,0,0)
    vertex(t,t,-t,1,0)
    vertex(t,t,t,1,1)
    vertex(-t,t,t,0,1)
    vertex(-t,t,-t,0,0)
    endShape()
  pop()
}
