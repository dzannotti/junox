export default [
  {
    name: 'Strings I',
    vca: 0.2,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.7,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.4, decay: 0, sustain: 1, release: 0.4 },
    chorus: 1
  },
  {
    name: 'Strings II',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.4, delay: 0 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.6,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.7,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.4, decay: 0, sustain: 1, release: 0.4 },
    chorus: 2
  },
  {
    name: 'Strings III',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0.8 },
    dco: {
      saw: true,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.7,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.5,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.3, decay: 0, sustain: 1, release: 0.6 },
    chorus: 2
  },
  {
    name: 'Organ I',
    vca: 0.2,
    vcaType: 'gate',
    lfo: { frequency: 0.2, delay: 0.8 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.4,
      resonance: 0.6,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 0, release: 0 },
    chorus: 1
  },
  {
    name: 'Organ II',
    vca: 0.2,
    vcaType: 'gate',
    lfo: { frequency: 0.5, delay: 0.4 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.8,
      noise: 0,
      pwm: 0.5,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.1, sustain: 0, release: 0.1 },
    chorus: 1
  },
  {
    name: 'Organ III',
    vca: 0.2,
    vcaType: 'gate',
    lfo: { frequency: 0.5, delay: 0.4 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.8,
      noise: 0,
      pwm: 0.5,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.1, sustain: 0, release: 0.1 },
    chorus: 2
  },
  {
    name: 'Brass',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.8,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: { attack: 0.2, decay: 0.4, sustain: 0.6, release: 0.2 },
    chorus: 1
  },
  {
    name: 'Phase Brass',
    vca: 0.30000000000000004,
    vcaType: 'gate',
    lfo: { frequency: 0.6, delay: 0 },
    dco: {
      saw: true,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 1,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.1,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.2, decay: 0.4, sustain: 0.4, release: 0.3 },
    chorus: 1
  },
  {
    name: 'Piano I',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.3 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0.4
    },
    hpf: 0,
    vcf: {
      frequency: 0.1,
      resonance: 0,
      modPositive: true,
      envMod: 0.7,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: { attack: 0, decay: 0.8, sustain: 0.1, release: 0.3 },
    chorus: 0
  },
  {
    name: 'Piano II',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0.4, delay: 0 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.4,
      noise: 0,
      pwm: 0.4,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0.2,
      keyMod: 0.8
    },
    env: { attack: 0, decay: 0.7, sustain: 0, release: 0.3 },
    chorus: 0
  },
  {
    name: 'Celesta',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0.6 },
    dco: {
      saw: true,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.3,
      resonance: 0.8,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.6, sustain: 0.2, release: 0.5 },
    chorus: 0
  },
  {
    name: 'Mellow Piano',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0.1,
      keyMod: 0.9
    },
    env: { attack: 0.1, decay: 0.7, sustain: 0.2, release: 0.8 },
    chorus: 1
  },
  {
    name: 'Harpsichord I',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.4 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.7,
      noise: 0,
      pwm: 0.3,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.7
    },
    env: { attack: 0, decay: 0.6, sustain: 0.3, release: 0.2 },
    chorus: 1
  },
  {
    name: 'Harpsicord II',
    vca: 0.2,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.8,
      noise: 0,
      pwm: 0.2,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.5,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.5, sustain: 0.1, release: 0.5 },
    chorus: 2
  },
  {
    name: 'Guitar',
    vca: 0.6000000000000001,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.6666666666666666,
    vcf: {
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0.1,
      keyMod: 0.5
    },
    env: { attack: 0, decay: 0.5, sustain: 0.3, release: 0.6 },
    chorus: 0
  },
  {
    name: 'Synthetiser Harp',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0.8 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.8
    },
    env: { attack: 0, decay: 0.5, sustain: 0.3, release: 0.5 },
    chorus: 1
  },
  {
    name: 'Bass I',
    vca: 0.2,
    vcaType: 'gate',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0.3,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0
    },
    env: { attack: 0, decay: 0.4, sustain: 0.1, release: 0.2 },
    chorus: 1
  },
  {
    name: 'Bass II',
    vca: 0.30000000000000004,
    vcaType: 'gate',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0.3,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: { attack: 0, decay: 0.3, sustain: 0.3, release: 0.2 },
    chorus: 1
  },
  {
    name: 'Clavichord I',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.9,
      lfoMod: false,
      lfo: 0.4
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.8,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: { attack: 0, decay: 0.5, sustain: 0.3, release: 0.1 },
    chorus: 1
  },
  {
    name: 'Clavichord II',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.1, delay: 0 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.8,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.5,
      resonance: 0.7,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0.2,
      keyMod: 0.7
    },
    env: { attack: 0, decay: 0.4, sustain: 0.2, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Pizzicato Sound I',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.3,
      noise: 0,
      pwm: 0.3,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.4,
      resonance: 0.4,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0.3,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.2, sustain: 0.3, release: 0.5 },
    chorus: 1
  },
  {
    name: 'Pizzicato Sound II',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.3,
      noise: 0,
      pwm: 0.2,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.5,
      resonance: 0.4,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.3, sustain: 0.3, release: 0.4 },
    chorus: 2
  },
  {
    name: 'Xylophone',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0 },
    dco: {
      saw: false,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.4,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: { attack: 0, decay: 0.3, sustain: 0, release: 0.3 },
    chorus: 0
  },
  {
    name: 'Glockenspiel',
    vca: 0.6000000000000001,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.4,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: { attack: 0, decay: 0.3, sustain: 0.2, release: 0.5 },
    chorus: 0
  },
  {
    name: 'Violin',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.6 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.2
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.6,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.4, decay: 0, sustain: 1, release: 0.4 },
    chorus: 0
  },
  {
    name: 'Trumpet',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.2, delay: 0.6 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.8,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: { attack: 0.2, decay: 0.4, sustain: 0.6, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Horn',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.2, delay: 0.7 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.2,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0.2,
      keyMod: 0.4
    },
    env: { attack: 0.4, decay: 0.5, sustain: 0.6, release: 0.3 },
    chorus: 0
  },
  {
    name: 'Tube',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.2, delay: 0.7 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 0,
    vcf: {
      frequency: 0.1,
      resonance: 0,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: { attack: 0.3, decay: 0.4, sustain: 0.4, release: 0.3 },
    chorus: 0
  },
  {
    name: 'Flute',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.5 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0.1,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.5,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.2,
      keyMod: 0.6
    },
    env: { attack: 0.2, decay: 0.6, sustain: 0.5, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Clarinet',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.5,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: { attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Oboe',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 1,
    vcf: {
      frequency: 0.4,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: { attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.2 },
    chorus: 0
  },
  {
    name: 'English Horn',
    vca: 0.7,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0.7 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0.2
    },
    hpf: 1,
    vcf: {
      frequency: 0.5,
      resonance: 0.7,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.1,
      keyMod: 0.5
    },
    env: { attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Funny Cat',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.3
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.1,
      resonance: 0.7,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0.2,
      keyMod: 0.5
    },
    env: { attack: 0.2, decay: 0.4, sustain: 1, release: 0.1 },
    chorus: 0
  },
  {
    name: 'Wah Brass',
    vca: 0.4,
    vcaType: 'gate',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.3
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.7,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: { attack: 0.3, decay: 0.3, sustain: 0.4, release: 0.2 },
    chorus: 0
  },
  {
    name: 'Phase Combination',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.8,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.6,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.2
    },
    env: { attack: 0, decay: 0.7, sustain: 0.2, release: 0.2 },
    chorus: 1
  },
  {
    name: 'Reed I',
    vca: 0.30000000000000004,
    vcaType: 'gate',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.4
    },
    hpf: 0,
    vcf: {
      frequency: 0.1,
      resonance: 0.6,
      modPositive: true,
      envMod: 0.7,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: { attack: 0, decay: 0.8, sustain: 0.5, release: 0.1 },
    chorus: 1
  },
  {
    name: 'Popcorn',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: false,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0.3333333333333333,
    vcf: {
      frequency: 0.2,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.3, sustain: 0.2, release: 0 },
    chorus: 0
  },
  {
    name: 'Reed II',
    vca: 0.2,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0.8 },
    dco: {
      saw: false,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.2,
      resonance: 0,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 0.8
    },
    env: { attack: 0, decay: 0.5, sustain: 0.3, release: 0.6 },
    chorus: 1
  },
  {
    name: 'Reed III',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.2 },
    dco: {
      saw: false,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: false,
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      frequency: 0.3,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.2, decay: 0, sustain: 1, release: 0.2 },
    chorus: 0
  },
  {
    name: 'PWM Chorus',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.5,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.8,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.3, decay: 0, sustain: 1, release: 0.4 },
    chorus: 2
  },
  {
    name: 'Synthetiser Organ',
    vca: 0.2,
    vcaType: 'gate',
    lfo: { frequency: 0.4, delay: 0.6 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.7,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.2,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0.2,
      keyMod: 0.7
    },
    env: { attack: 0, decay: 0.2, sustain: 0.5, release: 0.2 },
    chorus: 2
  },
  {
    name: 'Effect Sound',
    vca: 0.4,
    vcaType: 'env',
    lfo: { frequency: 0.4, delay: 0.6 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0.7,
      noise: 0,
      pwm: 1,
      lfoMod: false,
      lfo: 0.1
    },
    hpf: 0,
    vcf: {
      frequency: 0.6,
      resonance: 0,
      modPositive: false,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 0.7
    },
    env: { attack: 0, decay: 0.5, sustain: 0, release: 0.5 },
    chorus: 1
  },
  {
    name: 'Effect Sound II',
    vca: 0.30000000000000004,
    vcaType: 'gate',
    lfo: { frequency: 0.5, delay: 0.9 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.6,
      noise: 0,
      pwm: 0.3,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.6,
      resonance: 0.3,
      modPositive: false,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 0.1
    },
    env: { attack: 0.6, decay: 0.5, sustain: 0.2, release: 0.6 },
    chorus: 1
  },
  {
    name: 'Space Harm',
    vca: 0.30000000000000004,
    vcaType: 'env',
    lfo: { frequency: 0.5, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: false,
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      frequency: 0.6,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.8, sustain: 0.8, release: 0.9 },
    chorus: 1
  },
  {
    name: 'Funk',
    vca: 0.5,
    vcaType: 'gate',
    lfo: { frequency: 0.3, delay: 0.2 },
    dco: {
      saw: true,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.7,
      resonance: 0.6,
      modPositive: false,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: { attack: 0.6, decay: 0.5, sustain: 0, release: 0 },
    chorus: 1
  },
  {
    name: 'Space Sound I',
    vca: 0.4,
    vcaType: 'gate',
    lfo: { frequency: 0.6, delay: 0.7 },
    dco: {
      saw: false,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.4,
      lfoMod: false,
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      frequency: 0.6,
      resonance: 0.7,
      modPositive: false,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.8, sustain: 0, release: 0.3 },
    chorus: 1
  },
  {
    name: 'Mysterious Invention',
    vca: 0.2,
    vcaType: 'env',
    lfo: { frequency: 0.6, delay: 0.8 },
    dco: {
      saw: true,
      pulse: true,
      sub: 1,
      noise: 0,
      pwm: 0.8,
      lfoMod: false,
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      frequency: 0.8,
      resonance: 0.7,
      modPositive: false,
      envMod: 0.6,
      lfoMod: 0.2,
      keyMod: 0
    },
    env: { attack: 0, decay: 1, sustain: 0, release: 1 },
    chorus: 0
  },
  {
    name: 'Space Sound II',
    vca: 0.5,
    vcaType: 'env',
    lfo: { frequency: 0.3, delay: 0.3 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0.8,
      noise: 0,
      pwm: 0.6,
      lfoMod: false,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.2,
      resonance: 0.8,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 1, decay: 1, sustain: 1, release: 1 },
    chorus: 1
  }
]
