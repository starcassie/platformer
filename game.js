// game.js file

let scroll = 0
let hero = new Hero()

let platforms = [
  new Ground(2, 2, 18, 2),
  new Ground(8, 5, 2, 1),
  new Ground(12, 7, 6, 1),
  new Ground(22, 6, 4, 1),
  new Ground(25, 8, 5, 1),
  new Ground(30, 5, 4, 2),
  new Ground(35, 7, 18, 2)
]

let keyPressed = {}
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
  console.log(event.code)
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

function loop() {
  // change state
  if (keyPressed['Space']) {
    hero.jump()
  } // this was the fix!
  if (keyPressed['ArrowLeft']) {
    hero.moveLeft()
  } // this was the fix!
  if (keyPressed['ArrowRight']) {
    hero.moveRight()
  } if (keyPressed['KeyV']) {
    hero.speedDrop()
  }

  hero.step(platforms)

  // draw all
  erase()
  hero.draw()
  platforms.forEach(ground => ground.draw())

  setTimeout(() => loop(), 50)
}

// wait for images to load
async function loadGame() {
  await heroStandSprite.loaded
  await heroJumpSprite.loaded
  await heroWalkSprite1.loaded
  await heroWalkSprite2.loaded
  await groundSprite.loaded
  await groundTopSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
