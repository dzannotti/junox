const SQRT2 = Math.sqrt(2.0)
const TWOPI = Math.PI * 2.0

export default class Filter {
  // resonance should be between 1 and 5
  constructor ({ cutoff, resonance, sampleRate }) {
    this.cutoff = cutoff
    this.resonance = resonance
    this.sampleRate = sampleRate
    this.x = 0
    this.y = 0
    this.calculateCoeffients()
  }

  calculateCoeffients () {
    this.z = Math.cos((TWOPI * this.cutoff) / this.sampleRate)
    this.c = 2 - 2 * this.z
    this.r =
      (SQRT2 * Math.sqrt(-Math.pow(this.z - 1.0, 3.0)) +
        this.resonance * (this.z - 1)) /
      (this.resonance * (this.z - 1))
  }

  render (input) {
    this.x = this.x + (input - this.y) * this.c
    this.y = this.y + this.x
    this.x = this.x * this.r
    return input - this.y
  }
}
