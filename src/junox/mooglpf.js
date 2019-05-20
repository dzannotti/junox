export default class LPF {
  // resonance should be between 1 and 5
  constructor({ type, cutoff, resonance, sampleRate }) {
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

  render(input) {
    const f = this.cutoff * 1.16
    const fSquare = f * f
    const fb = this.resonance * (1.0 - 0.15 * fSquare)
    const f1 = 1 - f
    const curIn = (input - this.out4 * fb) * 0.35013 * fSquare * fSquare
    this.out1 = curIn + 0.3 * this.in1 + f1 * this.out1 // Pole 1
    this.in1 = curIn
    this.out2 = this.out1 + 0.3 * this.in2 + f1 * this.out2 // Pole 2
    this.in2 = this.out1
    this.out3 = this.out2 + 0.3 * this.in3 + f1 * this.out3 // Pole 3
    this.in3 = this.out2
    this.out4 = this.out3 + 0.3 * this.in4 + f1 * this.out4 // Pole 4
    this.in4 = this.out3
    return this.out4
  }
}
