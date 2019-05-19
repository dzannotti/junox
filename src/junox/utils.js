export const SQRT2 = Math.sqrt(2.0)
export const TWOPI = Math.PI * 2.0

// this is the same as Math.min(Math.max(-1, value), 1)
// but it's only 1 function call instead of 2
export function clampVolume(val) {
  if (val > 1) {
    return 1
  }
  if (val < -1) {
    return -1
  }
  return val
}

export function clamp(val) {
  if (val > 1) {
    return 1
  }
  if (val < 0) {
    return 0
  }
  return val
}
