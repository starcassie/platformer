
class Ground {
  constructor(x, y, width, height) {
    // todo
    this.x = x * gridSize
    this.y = (maxY - y) * gridSize
    this.width = width * gridSize
    this.height = height * gridSize
  }

  step() {
    // todo
  }

  draw() {
    // todo
  }

  isAbove(x, y) {
    let above = this.y <= y
    let between = this.x < x && this.x + this.width > x
    return above && between
  }

  isBellow(x,y) {
    let bellow = this.y + this.height <= y
    let between = this.x < x && this.x + this.width > x
    return bellow && between 
  }

  contains(x, y) {
    let between = (this.x <= x + gridSize/2 && this.x >= this.x - gridSize/2) || (this.x + this.width >= x - gridSize/2 && this.x + this.width <= x + gridSize/2)
    let betweenY = (this.y >= y - gridSize && this.y <= y) || (this.y + this.height + gridSize >= y - gridSize && this.y + this.height + gridSize >= y)
    return between && betweenY
  }

  draw(x, y) {
    for (let row = 0; row < this.height; row += gridSize) {
      let imageGround = groundSprite.image
      if (row === 0) {
        imageGround = groundTopSprite.image
      }
      for (let col = 0; col < this.width; col += gridSize) {
        ctx.drawImage(imageGround, this.x + col - scroll, this.y + row, gridSize, gridSize)
      }
    }
    let imageGround = groundSprite.image
    ctx.strokeStyle = 'darkgreen'
    ctx.strokeRect(this.x - scroll, this.y, this.width, this.height)
  }
}
