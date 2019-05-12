import LFO from '../src/junox/lfo'

// TODO -- refactor this ones - they feel a bit pointless like this
// but help debug issues and shapes that are not debuggable in real time
describe('LFO', () => {
  it('should produce a triangle wave', () => {
    const lfo = new LFO({ sampleRate: 100, delay: 0, frequency: 1 })
    const out = Array(100)
      .fill(0)
      .map(() => lfo.render())
    expect(out[0]).toBeLessThan(-0.9)
    expect(out[24]).toBeGreaterThan(-0.01)
    expect(out[24]).toBeLessThan(0.01)
    expect(out[49]).toBeGreaterThan(0.9)
    expect(out[74]).toBeGreaterThan(-0.01)
    expect(out[74]).toBeLessThan(0.01)
    expect(out[99]).toBeLessThan(-0.9)
  })
  it('should envelope delay', () => {
    const lfo = new LFO({ sampleRate: 100, delay: 1, frequency: 1 })
    const out = Array(100 * 3)
      .fill(0)
      .map(() => lfo.delayEnv())
    out.forEach((val, idx) => {
      if (idx < 100) {
        expect(val).toBeLessThan(0.01)
      } else if (idx < 100 * 2) {
        expect(val).toBeGreaterThan(0.0)
        expect(val).toBeLessThan(1.01)
      } else {
        expect(val).toBeGreaterThan(0.95)
      }
    })
  })
})
