// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(filename) {
  let image = new Image()
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = 'images/' + filename
  return {
    image: image,
    loaded: loaded,
  }
}
let heroStandSprite = loadSprite('hero_stand.png')
let heroJumpSprite = loadSprite('hero_jump.png')
let heroWalkSprite1 = loadSprite('hero_walk1.png')
let heroWalkSprite2 = loadSprite('hero_walk2.png')
let groundSprite = loadSprite('ground.png')
let groundTopSprite = loadSprite('ground_top.png')
// let rockSprite =loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'lightblue'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

let maxY = 12 // number of grids in the vertical direction
let gridSize = Math.ceil(canvas.height / maxY) // height / width of each grid

// Discussion:
// - What "state" / properties should the hero store / have?
//   - x, y position
//   - dx, dy
//   - where it is in the air, airborne (boolean)
//   - what sprite depending on what function we're calling
// - Methods we want to implement in the hero class?
//   - walk back
//   - walk forward
//   - jump
//   - step
//   - draw
// - How to move left and right? Friction?
//   - dx for speed that changes, every loop we decrease it until it's zero
// - How to jump? Gravity?
//   - dy for speed that "accelerates" as the hero is falling (second half of the jump)
// - How to draw hero? Standing, walking, jumping?
//   - we put everything related to movement in the hero class
//   - implement this logic in the draw method
//   - use the properties of the hero (dx, dy, airborne, etc) to determine what to draw














