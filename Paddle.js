// Computer Paddle Speed - Originally 0.02
// For faster and harder game
//const SPEED = 0.02

//For slower and easier game
const SPEED = 0.008

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  //Computer paddle control
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}