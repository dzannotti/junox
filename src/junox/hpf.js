import { SQRT2, TWOPI, fastTrig } from './utils'

export default class Filter {
  // resonance should be between 1 and 5
  constructor({ cutoff, resonance, sampleRate }) {
    this.cutoff = cutoff
    this.resonance = resonance
    this.sampleRate = sampleRate
    this.x = 0
    this.y = 0
    this.calculateCoeffients()
  }

  calculateCoeffients() {
    this.z = fastTrig.cos((TWOPI * this.cutoff) / this.sampleRate)
    this.c = 2 - 2 * this.z
    const z1 = this.z - 1
    const resonance = this.resonance * z1
    this.r = (SQRT2 * Math.sqrt(-Math.pow(z1, 3.0)) + resonance) / resonance
  }

  render(input) {
    this.x = this.x + (input - this.y) * this.c
    this.y = this.y + this.x
    this.x = this.x * this.r
    return input - this.y
  }
}
