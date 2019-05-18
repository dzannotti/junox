import Envelope from '../src/junox/envelope'

describe('Envelope', () => {
  const sampleRate = 120
  it('should produce ramp to 1 in attack in the given time', () => {
    const attack = 1.2
    const envelope = new Envelope({
      attack,
      decay: 0,
      sustain: 0,
      release: 0,
      sampleRate
    })
    const out = Array(attack * sampleRate - 1)
      .fill(0)
      .map(() => {
        envelope.tick()
        return envelope.render()
      })
    out.forEach((val, index) => {
      expect(val).toBeLessThanOrEqual(1)
      if (index) {
        expect(out[index - 1]).toBeLessThan(val)
      }
    })
    expect(out[out.length - 1]).toBeCloseTo(1, 1)
  })
  it('should produce ramp from attackValue to sustain in decay time', () => {
    const attack = 0.1
    const decay = 1.2
    const sustain = 0.5
    const envelope = new Envelope({
      attack,
      decay,
      sustain,
      release: 0,
      sampleRate
    })
    // skip attack phase
    Array(attack * sampleRate)
      .fill(0)
      .forEach(() => {
        envelope.tick()
        envelope.render()
      })
    const out = Array(decay * sampleRate - 1)
      .fill(0)
      .map(() => {
        envelope.tick()
        return envelope.render()
      })
    out.forEach((val, index) => {
      expect(val).toBeLessThanOrEqual(1)
      expect(val).toBeGreaterThan(sustain)
      if (index) {
        expect(out[index - 1]).toBeGreaterThan(val)
      }
    })
    expect(out[out.length - 1]).toBeCloseTo(sustain, 1)
  })
  it('should produce keep sustain value for a random time', () => {
    const attack = 0.1
    const decay = 0.1
    const sustain = 0.5
    const envelope = new Envelope({
      attack,
      decay,
      sustain,
      release: 0,
      sampleRate
    })
    // skip attack phase
    Array(attack * sampleRate + decay * sampleRate)
      .fill(0)
      .forEach(() => {
        envelope.tick()
        envelope.render()
      })
    const out = Array(Math.floor(Math.random() * sampleRate * 10))
      .fill(0)
      .map(() => {
        envelope.tick()
        return envelope.render()
      })
    out.forEach(val => {
      expect(val).toBeCloseTo(sustain, 1)
    })
  })
  it('should release the note within the given time', () => {
    const attack = 0.1
    const decay = 0.1
    const sustain = 0.5
    const release = 1.2
    const envelope = new Envelope({
      attack,
      decay,
      sustain,
      release: 0,
      sampleRate
    })
    // skip attack phase
    Array(attack * sampleRate + decay * sampleRate)
      .fill(0)
      .forEach(() => {
        envelope.tick()
        envelope.render()
      })
    envelope.noteOff()
    const out = Array(release * sampleRate - 1)
      .fill(0)
      .map(() => {
        envelope.tick()
        return envelope.render()
      })
    out.forEach((val, index) => {
      expect(val).toBeLessThan(1)
      if (index) {
        expect(out[index - 1]).toBeGreaterThanOrEqual(val)
      }
    })
    expect(out[out.length - 1]).toBeCloseTo(0, 1)
  })
})
