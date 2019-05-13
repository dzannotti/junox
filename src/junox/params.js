export function paramToPWM(value) {
  return 0.5 + value * 0.45
}

export function sliderToTime(val) {
  return (
    0.001 + ((Math.exp(val * 10 * 0.5) - 1) / (Math.exp(10 * 0.5) - 1)) * 3.25
  )
}
export function sliderToDecay(val, maxValue = 17.46) {
  const slider = val * 10
  return (
    0.002 +
    ((Math.exp(slider * 0.4) - 1) / (Math.exp(10 * 0.4) - 1)) *
      slider *
      0.1 *
      maxValue
  )
}

export function sliderToFreq(val, min, max) {
  return Math.max(Math.pow(val, 4) * max, min)
}

export function sliderToSustain(val) {
  const x = 1 // how far we are in the decay phase?
  return val + (1 - val) * Math.exp(-3.5 * x) - Math.exp(-3.5)
}

// 0 => 0.3Hz, 0.5 => 3.5Hz, 1 => 21Hz
export function sliderToLFOFreq(val) {
  return (
    0.25 * 1.2 * Math.pow(1.53, val * 10) * (1 + Math.sin(Math.PI * val) * 0.39)
  )
}

export function sliderToLFODelay(val) {
  return sliderToDecay(val, 2.786)
}

export function delayToLFOAttackRate(delay) {
  // this fudge isn't precise, but good enough
  return 0.0608 * delay * delay + 0.18407482 * delay + 0.0166
}

export function sliderToHPF(val) {
  const hpfMap = {
    0: 0,
    1: 0,
    2: 250,
    3: 720
  }
  return hpfMap[Math.round(val * 3)]
}

export function sliderToFilterFreqNorm(val) {
  const clamped = Math.max(Math.min(1, val), 0)
  // return 0.001 + (Math.exp(clamped * 10 * 0.25) - 1) / (Math.exp(10 * 0.25) - 1)
  return Math.pow(clamped, 4)
}

export function sliderToResonance(val) {
  return val * 3 + 0.01
}

export function chorusModeToFreq(val) {
  if (val === 1) {
    return 0.513
  }
  return 1.263
}

export function chorusModeToFeedback(val) {
  return 0
}

export function chorusModeToDelay(val) {
  if (val === 1) {
    return 0.03 * 22050
  }
  return 0.06 * 22050
}
