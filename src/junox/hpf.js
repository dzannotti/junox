// Loosely based on Pirkle's HPF for KG25
import { SQRT2, TWOPI, fastTanh } from './utils'

export default class HPF {
  constructor({ cutoff, sampleRate }) {
    this.alpha = 1
    this.z1 = 0
    this.beta = 1
    this.T = 1 / sampleRate
    this.setCutoff(cutoff)
  }

  setCutoff(cutoff) {
    const wd = 2 * Math.PI * cutoff
    const wa = (2 / this.T) * Math.tan((wd * this.T) / 2)
    const g = (wa * this.T) / 2
    this.alpha = g / (1.0 + g)
  }

  render(xn) {
    // calculate v(n)
    const vn = (xn - this.z1) * this.alpha
    // form LP output
    const lpf = vn + this.z1
    // update memory
    this.z1 = vn + lpf
    // do the HPF
    return fastTanh(xn - lpf)
  }
}
