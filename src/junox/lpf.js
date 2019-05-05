import keymirror from 'keymirror'

const SQRT2 = Math.sqrt(2.0)
const TWOPI = Math.PI * 2.0

export default class LPF {
  // resonance should be between 1 and 5
  constructor ({ type, cutoff, resonance, sampleRate }) {
    this.type = type
    this.cutoff = cutoff
    this.resonance = resonance
    this.sampleRate = sampleRate
    this.in1 = 0
    this.in2 = 0
    this.in3 = 0
    this.in4 = 0
    this.out1 = 0
    this.out2 = 0
    this.out3 = 0
    this.out4 = 0
  }

  render (input) {
    const f = this.cutoff * 1.16
    const fb = this.resonance * (1.0 - 0.15 * f * f)
    const curIn = (input - this.out4 * fb) * 0.35013 * (f * f) * (f * f)
    this.out1 = curIn + 0.3 * this.in1 + (1 - f) * this.out1 // Pole 1
    this.in1 = curIn
    this.out2 = this.out1 + 0.3 * this.in2 + (1 - f) * this.out2 // Pole 2
    this.in2 = this.out1
    this.out3 = this.out2 + 0.3 * this.in3 + (1 - f) * this.out3 // Pole 3
    this.in3 = this.out2
    this.out4 = this.out3 + 0.3 * this.in4 + (1 - f) * this.out4 // Pole 4
    this.in4 = this.out3
    return this.out4
  }
}
