export function paramToPWM (value) {
  return 0.5 + value * 0.45
}

export function sliderToTime (val) {
  return (
    0.001 + ((Math.exp(val * 10 * 0.5) - 1) / (Math.exp(10 * 0.5) - 1)) * 3.25
  )
}
export function sliderToDecay (val) {
  const slider = val * 10
  return (
    0.002 +
    ((Math.exp(slider * 0.4) - 1) / (Math.exp(10 * 0.4) - 1)) *
      slider *
      0.1 *
      17.46
  )
}

export function sliderToFreq (val, min, max) {
  return Math.max(Math.pow(val, 4) * max, min)
}

export function sliderToSustain (val) {
  const x = 1 // how far we are in the decay phase?
  return val + (1 - val) * Math.exp(-3.5 * x) - Math.exp(-3.5)
}

export function sliderToLFOFreq (val) {
  // linear??
  return val * 14.8 + 0.2
}

export function sliderToHPF (val) {
  const hpfMap = {
    0: 0,
    1: 0,
    2: 250,
    3: 720
  }
  return hpfMap[(val * 3).toFixed()]
}

export function sliderToFilterFreqNorm (val) {
  const clamped = Math.max(Math.min(1, val), 0)
  // return 0.001 + (Math.exp(clamped * 10 * 0.25) - 1) / (Math.exp(10 * 0.25) - 1)
  return Math.pow(clamped, 4)
}

export function sliderToResonance (val) {
  return val * 3 + 0.01
}

export function chorusModeToFreq (val) {
  if (val == 1) {
    return 0.513
  }
  return 1.263
}

export function chorusModeToFeedback (val) {
  if (val == 1) {
    return 0.15
  }
  return 0.3
}

export function chorusModeToDelay (val) {
  if (val === 1) {
    return 0.03 * 22050
  }
  return 0.06 * 22050
}
