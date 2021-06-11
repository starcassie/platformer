// hero.js file

class Hero {
  constructor() {
    // todo
    this.reset()
  }
  reset() {
    this.x = gridSize * 3.5
    this.y = 0
    this.dx = 0
    this.dy = 0
    this.airborne = true
    scroll = 0
  }
  moveLeft() {
    // this.dx = this.dx - (gridSize * 1/10)
    this.dx = gridSize * -(1/10)
  }
  moveRight() {
    this.dx = gridSize * 1/10
  }
  jump() {
    // todo if the hero is already airborne, exit early
    if (this.airborne) {
      return
    }
    this.airborne = true // this was the fix!
    this.dy = gridSize * -(1/3)
  }
  step(platforms) {
    // todo move the hero position (x,y) by speed (dx,dy)
    this.x += this.dx
    this.y += this.dy

    // todo apply "friction" to x movement (slow down)
    this.dx *= 0.7

    // // todo apply "gravity" to y movement (speed up)
    // if (this.airborne) {
    //   this.dy += 1/60 * gridSize
    // }

    // todo check if hero hits ground
    let ground = canvas.height
    if (this.y > ground) {
      this.airborne = false
      this.dy = 0
      this.y = ground
    }

    let hitP = false

    platforms.forEach(platform => {
      if (platform.isAbove(this.x - this.dx, this.y - this.dy + gridSize) && platform.contains(this.x, this.y) && this.dy > 0) {
        this.y = platform.y
        this.dy = 0
        this.airborne = false
        hitP = true
        console.log("here, top issue")
      } else if (platform.isAbove(this.x - this.dx, this.y - this.dy + gridSize) && (this.dy === 0)) {
        hitP = true
      }
    })

    if (!hitP) {
      platforms.forEach(platform => {
        console.log(platform.isBellow(this.x, this.y) + " " + platform.contains(this.x, this.y))
        if (platform.isBellow(this.x, this.y) && platform.contains(this.x, this.y) && this.dy != 0) {
          console.log('here, bottom issue')
          this.y = platform.y + platform.height + gridSize//this.y -this.dy - gridSize
          this.dy = 0
          this.airborne = true
          console.log(this.x, this.y)
        }
      })
      this.airborne = true
      this.dy += 1/60 * gridSize
    }

    if (this.x > canvas.width / 2) {
      scroll = this.x - canvas.width / 2
    }
  }

  speedDrop() {
    this.dy += 1/60 * gridSize * 4
  }

  draw() {
    // todo figure out which sprite to draw
    let image = heroStandSprite.image
    if (Math.abs(this.dx) > 0.1) {
      // we know the hero is moving
      let frame = Math.floor(this.x / gridSize)
      if (frame % 2 === 1) {
        image = heroWalkSprite1.image
      } else if (frame % 2 === 0) {
        image = heroWalkSprite2.image
      }
    }
    if (this.airborne) { // same as if (this.airborne === true)
      // we know the hero is in the air already
      image = heroJumpSprite.image
    }
    
    // todo draw the sprite
    ctx.drawImage(image, this.x - gridSize / 2 - scroll, this.y - gridSize, gridSize, gridSize)
    
    // todo draw the logical position
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x - scroll, this.y, 3, 0, 2 * Math.PI)
    ctx.fill()
  }
}
