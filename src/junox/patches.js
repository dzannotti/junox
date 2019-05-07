export default [
  {
    name: "Brass",
    vca: 0.8503937,
    lfo: { frequency: 0.15748031, delay: 0.38582677 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.27559055,
      resonance: 0.1023622,
      modPositive: true,
      envMod: 0.45669291,
      lfoMod: 0,
      keyMod: 0.67716535
    },
    env: {
      attack: 0.02362205,
      decay: 0.38582677,
      sustain: 0.35433071,
      release: 0.2519685
    },
    chorus: 1
  },
  {
    name: "Brass Swell",
    vca: 0.59055118,
    lfo: { frequency: 0.04724409, delay: 0.37795276 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.5511811,
      noise: 0,
      pwm: 0.44094488,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.33858268,
      resonance: 0.13385827,
      modPositive: true,
      envMod: 0.20472441,
      lfoMod: 0,
      keyMod: 0.66141732
    },
    env: {
      attack: 0.50393701,
      decay: 0.92913386,
      sustain: 0.2992126,
      release: 0.29133858
    },
    chorus: 1
  },
  {
    name: "Trumpet",
    vca: 1,
    lfo: { frequency: 0.40944882, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0.06299213
    },
    hpf: 2,
    vcf: {
      frequency: 0.43307087,
      resonance: 0.26771654,
      modPositive: true,
      envMod: 0.18897638,
      lfoMod: 0.00787402,
      keyMod: 0.46456693
    },
    env: {
      attack: 0.03937008,
      decay: 0.51968504,
      sustain: 0.37795276,
      release: 0.12598425
    },
    chorus: 0
  },
  {
    name: "Flutes",
    vca: 1,
    lfo: { frequency: 0.47244094, delay: 0.33858268 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.00787402
    },
    hpf: 3,
    vcf: {
      frequency: 0.43307087,
      resonance: 0.2519685,
      modPositive: true,
      envMod: 0.07874016,
      lfoMod: 0.08661417,
      keyMod: 0.32283465
    },
    env: {
      attack: 0.18110236,
      decay: 0.63779528,
      sustain: 0,
      release: 0.14173228
    },
    chorus: 0
  },
  {
    name: "Moving Strings",
    vca: 0.26771654,
    lfo: { frequency: 0.49606299, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.11023622,
      noise: 0,
      pwm: 0.30708661,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.60629921,
      resonance: 0.15748031,
      modPositive: true,
      envMod: 0.03149606,
      lfoMod: 0,
      keyMod: 0.87401575
    },
    env: {
      attack: 0.1023622,
      decay: 0.68503937,
      sustain: 0.69291339,
      release: 0.27559055
    },
    chorus: 2
  },
  {
    name: "Brass & Strings",
    vca: 0.61417323,
    lfo: { frequency: 0.27559055, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.18110236,
      noise: 0,
      pwm: 0.44094488,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.5984252,
      resonance: 0.13385827,
      modPositive: true,
      envMod: 0.03149606,
      lfoMod: 0,
      keyMod: 0.32283465
    },
    env: {
      attack: 0.34645669,
      decay: 0.51968504,
      sustain: 0.41732283,
      release: 0.34645669
    },
    chorus: 1
  },
  {
    name: "Choir",
    vca: 1,
    lfo: { frequency: 0.46456693, delay: 0.11023622 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.19685039,
      lfoMod: true,
      lfo: 0.1023622
    },
    hpf: 0,
    vcf: {
      frequency: 0.46456693,
      resonance: 0.74015748,
      modPositive: true,
      envMod: 0.01574803,
      lfoMod: 0,
      keyMod: 0.48818898
    },
    env: {
      attack: 0.53543307,
      decay: 0.08661417,
      sustain: 1,
      release: 0.37795276
    },
    chorus: 1
  },
  {
    name: "Piano I",
    vca: 0.81102362,
    lfo: { frequency: 0.15748031, delay: 0.38582677 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.67716535,
      noise: 0,
      pwm: 0.62992126,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.51181102,
      resonance: 0.09448819,
      modPositive: true,
      envMod: 0.07874016,
      lfoMod: 0,
      keyMod: 0.21259843
    },
    env: { attack: 0, decay: 0.51968504, sustain: 0, release: 0.23622047 },
    chorus: 0
  },
  {
    name: "Organ I",
    vca: 0.78740157,
    lfo: { frequency: 0.42519685, delay: 0.11811024 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.18110236,
      noise: 0,
      pwm: 0.41732283,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.33858268,
      resonance: 0.5984252,
      modPositive: true,
      envMod: 0.11023622,
      lfoMod: 0.00787402,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.07874016, sustain: 0.64566929, release: 0 },
    chorus: 0
  },
  {
    name: "Organ II",
    vca: 0.58267717,
    lfo: { frequency: 0.34645669, delay: 0.11811024 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.45669291,
      noise: 0,
      pwm: 0.41732283,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.41732283,
      resonance: 0.5984252,
      modPositive: true,
      envMod: 0.11023622,
      lfoMod: 0.00787402,
      keyMod: 0.66929134
    },
    env: { attack: 0, decay: 0.07874016, sustain: 0.64566929, release: 0 },
    chorus: 1
  },
  {
    name: "Combo Organ",
    vca: 0.75590551,
    lfo: { frequency: 0.59055118, delay: 0.16535433 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.48031496,
      noise: 0,
      pwm: 0.4488189,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 2,
    vcf: {
      frequency: 0.49606299,
      resonance: 0.5511811,
      modPositive: true,
      envMod: 0.03149606,
      lfoMod: 0,
      keyMod: 0.85826772
    },
    env: {
      attack: 0,
      decay: 0.37795276,
      sustain: 0.33858268,
      release: 0.36220472
    },
    chorus: 0
  },
  {
    name: "Calliope",
    vca: 0.7007874,
    lfo: { frequency: 0.64566929, delay: 0.31496063 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.37795276,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.08661417
    },
    hpf: 0,
    vcf: {
      frequency: 0.68503937,
      resonance: 0.21259843,
      modPositive: true,
      envMod: 0.13385827,
      lfoMod: 0,
      keyMod: 0.44094488
    },
    env: { attack: 0.05511811, decay: 1, sustain: 1, release: 0.04724409 },
    chorus: 1
  },
  {
    name: "Donald Pluck",
    vca: 0.64566929,
    lfo: { frequency: 0.5984252, delay: 0.16535433 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.4488189,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 3,
    vcf: {
      frequency: 0.57480315,
      resonance: 0.82677165,
      modPositive: true,
      envMod: 0.11811024,
      lfoMod: 0,
      keyMod: 0.61417323
    },
    env: {
      attack: 0.01574803,
      decay: 0.03937008,
      sustain: 0.33858268,
      release: 0.07874016
    },
    chorus: 0
  },
  {
    name: "Celeste",
    vca: 0.75590551,
    lfo: { frequency: 0.22047244, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.11811024,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.25984252,
      resonance: 0.18897638,
      modPositive: true,
      envMod: 0.42519685,
      lfoMod: 0,
      keyMod: 0.2992126
    },
    env: { attack: 0, decay: 0.34645669, sustain: 0, release: 0.63779528 },
    chorus: 0
  },
  {
    name: "Elect. Piano I",
    vca: 1,
    lfo: { frequency: 0.46456693, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.12598425,
      resonance: 0.24409449,
      modPositive: true,
      envMod: 0.48031496,
      lfoMod: 0.04724409,
      keyMod: 0.27559055
    },
    env: {
      attack: 0.00787402,
      decay: 0.66929134,
      sustain: 0.33858268,
      release: 0.31496063
    },
    chorus: 0
  },
  {
    name: "Elect. Piano II",
    vca: 0.80314961,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.55905512,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.39370079,
      resonance: 0.54330709,
      modPositive: true,
      envMod: 0.05511811,
      lfoMod: 0,
      keyMod: 0.62992126
    },
    env: { attack: 0, decay: 0.53543307, sustain: 0, release: 0.17322835 },
    chorus: 1
  },
  {
    name: "Clock Chimes",
    vca: 0.81889764,
    lfo: { frequency: 0.46456693, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0.17322835,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.34645669,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.37795276, sustain: 0, release: 0.4015748 },
    chorus: 1
  },
  {
    name: "Steel Drums",
    vca: 1,
    lfo: { frequency: 0.25984252, delay: 0.41732283 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.25984252,
      noise: 0.07086614,
      pwm: 0.2519685,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.55905512,
      resonance: 0.36220472,
      modPositive: true,
      envMod: 0.20472441,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.20472441, sustain: 0, release: 0.29133858 },
    chorus: 1
  },
  {
    name: "Xylophone",
    vca: 1,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.11811024,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.22834646,
      resonance: 0.18897638,
      modPositive: true,
      envMod: 0.42519685,
      lfoMod: 0,
      keyMod: 0.4015748
    },
    env: {
      attack: 0,
      decay: 0.22834646,
      sustain: 0.22834646,
      release: 0.2992126
    },
    chorus: 0
  },
  {
    name: "Brass III",
    vca: 1,
    lfo: { frequency: 0.40944882, delay: 0.15748031 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.17322835,
      noise: 0,
      pwm: 0.27559055,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.51968504,
      resonance: 0.18897638,
      modPositive: true,
      envMod: 0.08661417,
      lfoMod: 0,
      keyMod: 0.09448819
    },
    env: {
      attack: 0.45669291,
      decay: 0.78740157,
      sustain: 0.74015748,
      release: 0.29133858
    },
    chorus: 1
  },
  {
    name: "Fanfare",
    vca: 0.25984252,
    lfo: { frequency: 0.37007874, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.39370079,
      noise: 0,
      pwm: 0.5511811,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.34645669,
      resonance: 0,
      modPositive: true,
      envMod: 0.2519685,
      lfoMod: 0,
      keyMod: 0.52755906
    },
    env: {
      attack: 0.56692913,
      decay: 0.81889764,
      sustain: 0.59055118,
      release: 0.38582677
    },
    chorus: 1
  },
  {
    name: "Strings III",
    vca: 0.57480315,
    lfo: { frequency: 0.37795276, delay: 0.21259843 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.55905512,
      resonance: 0.11023622,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.66141732
    },
    env: {
      attack: 0.49606299,
      decay: 0.24409449,
      sustain: 1,
      release: 0.35433071
    },
    chorus: 2
  },
  {
    name: "Pizzicato",
    vca: 1,
    lfo: { frequency: 0.47244094, delay: 0.14173228 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.51968504,
      resonance: 0.01574803,
      modPositive: true,
      envMod: 0.03937008,
      lfoMod: 0,
      keyMod: 0.33070866
    },
    env: { attack: 0, decay: 0.08661417, sustain: 0, release: 0.09448819 },
    chorus: 1
  },
  {
    name: "High Strings",
    vca: 0.60629921,
    lfo: { frequency: 0.45669291, delay: 0.11023622 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.66141732,
      resonance: 0.06299213,
      modPositive: true,
      envMod: 0.01574803,
      lfoMod: 0,
      keyMod: 0.55905512
    },
    env: {
      attack: 0.14173228,
      decay: 0.34645669,
      sustain: 1,
      release: 0.31496063
    },
    chorus: 2
  },
  {
    name: "Bass Clarinet",
    vca: 0.81889764,
    lfo: { frequency: 0.40944882, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.06299213
    },
    hpf: 3,
    vcf: {
      frequency: 0.37795276,
      resonance: 0.28346457,
      modPositive: true,
      envMod: 0.19685039,
      lfoMod: 0.06299213,
      keyMod: 0.45669291
    },
    env: {
      attack: 0.08661417,
      decay: 0.59055118,
      sustain: 0,
      release: 0.19685039
    },
    chorus: 0
  },
  {
    name: "English Horn",
    vca: 1,
    lfo: { frequency: 0.37007874, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 3,
    vcf: {
      frequency: 0.5511811,
      resonance: 0.37795276,
      modPositive: true,
      envMod: 0.05511811,
      lfoMod: 0,
      keyMod: 0.21259843
    },
    env: {
      attack: 0.06299213,
      decay: 0.63779528,
      sustain: 0.20472441,
      release: 0.12598425
    },
    chorus: 0
  },
  {
    name: "Brass Ensemble",
    vca: 0.81102362,
    lfo: { frequency: 0.40944882, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.24409449,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.36220472,
      resonance: 0.34645669,
      modPositive: true,
      envMod: 0.22834646,
      lfoMod: 0.00787402,
      keyMod: 0.46456693
    },
    env: {
      attack: 0.12598425,
      decay: 0.81102362,
      sustain: 0.76377953,
      release: 0.26771654
    },
    chorus: 1
  },
  {
    name: "Guitar",
    vca: 0.75590551,
    lfo: { frequency: 0.67716535, delay: 0.45669291 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.51181102,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.09448819,
      resonance: 0.11811024,
      modPositive: true,
      envMod: 0.55905512,
      lfoMod: 0,
      keyMod: 0.23622047
    },
    env: {
      attack: 0,
      decay: 0.40944882,
      sustain: 0.42519685,
      release: 0.24409449
    },
    chorus: 0
  },
  {
    name: "Koto",
    vca: 1,
    lfo: { frequency: 0.70866142, delay: 0.22047244 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.01574803,
      noise: 0,
      pwm: 0.74015748,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.31496063,
      resonance: 0.45669291,
      modPositive: true,
      envMod: 0.22834646,
      lfoMod: 0,
      keyMod: 0.59055118
    },
    env: { attack: 0, decay: 0.44094488, sustain: 0, release: 0.30708661 },
    chorus: 1
  },
  {
    name: "Dark Pluck",
    vca: 0.70866142,
    lfo: { frequency: 0.24409449, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.76377953,
      noise: 0,
      pwm: 0.68503937,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.2992126,
      resonance: 0.48031496,
      modPositive: true,
      envMod: 0.21259843,
      lfoMod: 0,
      keyMod: 0.55905512
    },
    env: {
      attack: 0,
      decay: 0.40944882,
      sustain: 0.11811024,
      release: 0.49606299
    },
    chorus: 2
  },
  {
    name: "Funky I",
    vca: 0.55905512,
    lfo: { frequency: 0.03149606, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.50393701,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.24409449,
      resonance: 0.18110236,
      modPositive: true,
      envMod: 0.4015748,
      lfoMod: 0,
      keyMod: 0.32283465
    },
    env: {
      attack: 0,
      decay: 0.23622047,
      sustain: 0.28346457,
      release: 0.01574803
    },
    chorus: 1
  },
  {
    name: "Synth Bass I",
    vca: 0.59055118,
    lfo: { frequency: 0.45669291, delay: 0.12598425 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.80314961,
      noise: 0.39370079,
      pwm: 0.4488189,
      lfoMod: true,
      lfo: 0.00787402
    },
    hpf: 2,
    vcf: {
      frequency: 0.2519685,
      resonance: 0,
      modPositive: true,
      envMod: 0.51968504,
      lfoMod: 0,
      keyMod: 0.27559055
    },
    env: { attack: 0, decay: 0.26771654, sustain: 0, release: 0.28346457 },
    chorus: 0
  },
  {
    name: "Lead I",
    vca: 0.77952756,
    lfo: { frequency: 0.56692913, delay: 0.69291339 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.14173228
    },
    hpf: 2,
    vcf: {
      frequency: 0.31496063,
      resonance: 0.76377953,
      modPositive: true,
      envMod: 0.28346457,
      lfoMod: 0,
      keyMod: 0.40944882
    },
    env: { attack: 0, decay: 0.35433071, sustain: 0.57480315, release: 0 },
    chorus: 0
  },
  {
    name: "Lead II",
    vca: 0.44094488,
    lfo: { frequency: 0.18897638, delay: 0.69291339 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.62204724,
      noise: 0,
      pwm: 0.41732283,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.35433071,
      resonance: 0,
      modPositive: true,
      envMod: 0.33858268,
      lfoMod: 0,
      keyMod: 0.40944882
    },
    env: {
      attack: 0.00787402,
      decay: 0.18110236,
      sustain: 0.71653543,
      release: 0.59055118
    },
    chorus: 0
  },
  {
    name: "Lead III",
    vca: 1,
    lfo: { frequency: 0.67716535, delay: 0.55905512 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0.16535433
    },
    hpf: 3,
    vcf: {
      frequency: 0.47244094,
      resonance: 0.24409449,
      modPositive: true,
      envMod: 0.14173228,
      lfoMod: 0.00787402,
      keyMod: 0.5984252
    },
    env: {
      attack: 0,
      decay: 0.51968504,
      sustain: 0.37795276,
      release: 0.08661417
    },
    chorus: 0
  },
  {
    name: "Funky II",
    vca: 0.78740157,
    lfo: { frequency: 0.03149606, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.4488189,
      noise: 0,
      pwm: 0.37795276,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.03937008,
      resonance: 0.18110236,
      modPositive: true,
      envMod: 0.63779528,
      lfoMod: 0,
      keyMod: 0.32283465
    },
    env: {
      attack: 0,
      decay: 0.23622047,
      sustain: 0.30708661,
      release: 0.01574803
    },
    chorus: 1
  },
  {
    name: "Synth Bass II",
    vca: 0.61417323,
    lfo: { frequency: 0.70866142, delay: 0.16535433 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.35433071,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.33858268,
      resonance: 0,
      modPositive: true,
      envMod: 0.37007874,
      lfoMod: 0,
      keyMod: 0
    },
    env: {
      attack: 0,
      decay: 0.29133858,
      sustain: 0.07086614,
      release: 0.17322835
    },
    chorus: 0
  },
  {
    name: "Funky III",
    vca: 0.62204724,
    lfo: { frequency: 0.03149606, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0.79527559,
      pwm: 0.07086614,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.2992126,
      resonance: 0.42519685,
      modPositive: true,
      envMod: 0.35433071,
      lfoMod: 0,
      keyMod: 0.07874016
    },
    env: { attack: 0, decay: 0.18897638, sustain: 0, release: 0.01574803 },
    chorus: 0
  },
  {
    name: "Thud Wah",
    vca: 0.83464567,
    lfo: { frequency: 0.48818898, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.2519685,
      noise: 0.06299213,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.61417323,
      resonance: 0.7007874,
      modPositive: true,
      envMod: 0.26771654,
      lfoMod: 0,
      keyMod: 0
    },
    env: { attack: 0, decay: 0, sustain: 0.80314961, release: 0.35433071 },
    chorus: 2
  },
  {
    name: "Going Up",
    vca: 0.59055118,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0.22047244,
      pwm: 0.78740157,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.62204724,
      resonance: 1,
      modPositive: true,
      envMod: 0.29133858,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: { attack: 0, decay: 0.8503937, sustain: 0.14173228, release: 1 },
    chorus: 0
  },
  {
    name: "Piano II",
    vca: 0.61417323,
    lfo: { frequency: 0.00787402, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.90551181,
      noise: 0,
      pwm: 0.56692913,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.37007874,
      resonance: 0,
      modPositive: true,
      envMod: 0.30708661,
      lfoMod: 0,
      keyMod: 0.03937008
    },
    env: { attack: 0, decay: 0.77165354, sustain: 0, release: 0.2519685 },
    chorus: 0
  },
  {
    name: "Clav.",
    vca: 0.94488189,
    lfo: { frequency: 0.51968504, delay: 0.11811024 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0.00787402
    },
    hpf: 1,
    vcf: {
      frequency: 0.05511811,
      resonance: 0.08661417,
      modPositive: true,
      envMod: 0.67716535,
      lfoMod: 0.01574803,
      keyMod: 0
    },
    env: {
      attack: 0,
      decay: 0.30708661,
      sustain: 0.37795276,
      release: 0.11023622
    },
    chorus: 1
  },
  {
    name: "Frontier Organ",
    vca: 1,
    lfo: { frequency: 0.62204724, delay: 0.11811024 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.22834646,
      noise: 0,
      pwm: 0.66929134,
      lfoMod: true,
      lfo: 0.02362205
    },
    hpf: 2,
    vcf: {
      frequency: 0.54330709,
      resonance: 0.42519685,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.40944882
    },
    env: { attack: 0, decay: 0, sustain: 1, release: 0 },
    chorus: 0
  },
  {
    name: "Snare Drum",
    vca: 0.79527559,
    lfo: { frequency: 0.40944882, delay: 0.21259843 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.50393701,
      noise: 0.71653543,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.74015748,
      resonance: 0.08661417,
      modPositive: true,
      envMod: 0.13385827,
      lfoMod: 0,
      keyMod: 0
    },
    env: { attack: 0, decay: 0.19685039, sustain: 0, release: 0.23622047 },
    chorus: 0
  },
  {
    name: "Tom Toms",
    vca: 0.79527559,
    lfo: { frequency: 0.48818898, delay: 0.12598425 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.45669291,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0.06299213
    },
    hpf: 2,
    vcf: {
      frequency: 0.41732283,
      resonance: 0.03149606,
      modPositive: true,
      envMod: 0.31496063,
      lfoMod: 0,
      keyMod: 0.16535433
    },
    env: {
      attack: 0,
      decay: 0.23622047,
      sustain: 0.11811024,
      release: 0.31496063
    },
    chorus: 0
  },
  {
    name: "Timpani",
    vca: 1,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.37007874,
      noise: 1,
      pwm: 0.27559055,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.19685039,
      resonance: 0,
      modPositive: true,
      envMod: 0.42519685,
      lfoMod: 0,
      keyMod: 0.18897638
    },
    env: {
      attack: 0.00787402,
      decay: 0.44094488,
      sustain: 0.20472441,
      release: 0.55905512
    },
    chorus: 0
  },
  {
    name: "Shaker",
    vca: 1,
    lfo: { frequency: 0.16535433, delay: 0.55905512 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0.45669291,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.7007874,
      resonance: 0.35433071,
      modPositive: true,
      envMod: 0.00787402,
      lfoMod: 0.13385827,
      keyMod: 0.62992126
    },
    env: { attack: 0.07874016, decay: 0.07086614, sustain: 0, release: 0 },
    chorus: 0
  },
  {
    name: "Synth Pad",
    vca: 0.4015748,
    lfo: { frequency: 0.44094488, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.29133858,
      noise: 0,
      pwm: 0.33858268,
      lfoMod: true,
      lfo: 0.03937008
    },
    hpf: 2,
    vcf: {
      frequency: 0.29133858,
      resonance: 0,
      modPositive: true,
      envMod: 0.66141732,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0,
      decay: 0.66929134,
      sustain: 0.59055118,
      release: 0.48818898
    },
    chorus: 2
  },
  {
    name: "Sweep I",
    vca: 0.76377953,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.33070866,
      noise: 0.22047244,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.90551181,
      resonance: 0.31496063,
      modPositive: true,
      envMod: 0.52755906,
      lfoMod: 0,
      keyMod: 0
    },
    env: { attack: 0, decay: 0.49606299, sustain: 1, release: 0.64566929 },
    chorus: 2
  },
  {
    name: "Pluck Sweep",
    vca: 0.35433071,
    lfo: { frequency: 0.53543307, delay: 0.37795276 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.98425197,
      noise: 0,
      pwm: 0.53543307,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.47244094,
      resonance: 0.87401575,
      modPositive: true,
      envMod: 0.07086614,
      lfoMod: 0.04724409,
      keyMod: 0.77165354
    },
    env: { attack: 0, decay: 0.71653543, sustain: 0, release: 0.60629921 },
    chorus: 2
  },
  {
    name: "Repeater",
    vca: 0.68503937,
    lfo: { frequency: 0.60629921, delay: 0.15748031 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.34645669,
      noise: 0,
      pwm: 0.79527559,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 1,
    vcf: {
      frequency: 0.76377953,
      resonance: 0.23622047,
      modPositive: true,
      envMod: 0.44094488,
      lfoMod: 0,
      keyMod: 0.4488189
    },
    env: { attack: 0.11023622, decay: 0, sustain: 0.32283465, release: 0 },
    chorus: 1
  },
  {
    name: "Sweep II",
    vca: 0.79527559,
    lfo: { frequency: 0.69291339, delay: 0.56692913 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.37795276,
      noise: 0,
      pwm: 0.76377953,
      lfoMod: true,
      lfo: 0.11811024
    },
    hpf: 0,
    vcf: {
      frequency: 0.51968504,
      resonance: 0.80314961,
      modPositive: true,
      envMod: 0.53543307,
      lfoMod: 0,
      keyMod: 0.5511811
    },
    env: {
      attack: 0,
      decay: 0.7007874,
      sustain: 0.41732283,
      release: 0.61417323
    },
    chorus: 1
  },
  {
    name: "Pluck Bell",
    vca: 0.38582677,
    lfo: { frequency: 0.4015748, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.38582677,
      noise: 0,
      pwm: 0.13385827,
      lfoMod: true,
      lfo: 0.03937008
    },
    hpf: 2,
    vcf: {
      frequency: 0.30708661,
      resonance: 0,
      modPositive: true,
      envMod: 0.38582677,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0,
      decay: 0.66929134,
      sustain: 0.59055118,
      release: 0.41732283
    },
    chorus: 2
  },
  {
    name: "Dark Synth Piano",
    vca: 0.62204724,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.44094488,
      resonance: 0.67716535,
      modPositive: true,
      envMod: 0.04724409,
      lfoMod: 0,
      keyMod: 0.55905512
    },
    env: { attack: 0, decay: 0.37007874, sustain: 0, release: 0.39370079 },
    chorus: 2
  },
  {
    name: "Sustainer",
    vca: 0.4488189,
    lfo: { frequency: 0.55905512, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.38582677,
      noise: 0,
      pwm: 0.36220472,
      lfoMod: true,
      lfo: 0.03937008
    },
    hpf: 2,
    vcf: {
      frequency: 0.30708661,
      resonance: 0,
      modPositive: true,
      envMod: 0.66141732,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0,
      decay: 0.66929134,
      sustain: 0.59055118,
      release: 0.5511811
    },
    chorus: 0
  },
  {
    name: "Wah Release",
    vca: 0.81889764,
    lfo: { frequency: 0.7007874, delay: 0.11023622 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.68503937,
      noise: 0,
      pwm: 0.19685039,
      lfoMod: true,
      lfo: 0.00787402
    },
    hpf: 3,
    vcf: {
      frequency: 0.56692913,
      resonance: 0.69291339,
      modPositive: true,
      envMod: 0.1496063,
      lfoMod: 0,
      keyMod: 0.51968504
    },
    env: { attack: 0, decay: 0.66141732, sustain: 0, release: 0.22834646 },
    chorus: 2
  },
  {
    name: "Gong",
    vca: 0.71653543,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0.44094488,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.5511811,
      resonance: 0.84251969,
      modPositive: true,
      envMod: 0.03937008,
      lfoMod: 0,
      keyMod: 0.56692913
    },
    env: {
      attack: 0.02362205,
      decay: 0.37795276,
      sustain: 1,
      release: 0.77165354
    },
    chorus: 1
  },
  {
    name: "Resonance Funk",
    vca: 1,
    lfo: { frequency: 0.46456693, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.20472441,
      resonance: 1,
      modPositive: true,
      envMod: 0.35433071,
      lfoMod: 0,
      keyMod: 0.7007874
    },
    env: { attack: 0, decay: 0.1496063, sustain: 0, release: 0.17322835 },
    chorus: 0
  },
  {
    name: "Drum Booms",
    vca: 1,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.36220472,
      noise: 1,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.33070866,
      resonance: 0,
      modPositive: true,
      envMod: 0.26771654,
      lfoMod: 0,
      keyMod: 0.45669291
    },
    env: {
      attack: 0,
      decay: 0.28346457,
      sustain: 0.11811024,
      release: 0.38582677
    },
    chorus: 0
  },
  {
    name: "Dust Storm",
    vca: 1,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.40944882,
      resonance: 0.66929134,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.34645669,
      keyMod: 0.74015748
    },
    env: {
      attack: 0.69291339,
      decay: 0.71653543,
      sustain: 0.22047244,
      release: 0.66929134
    },
    chorus: 0
  },
  {
    name: "Rocket Men",
    vca: 1,
    lfo: { frequency: 0.06299213, delay: 0.2519685 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0.76377953,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.57480315,
      resonance: 0.8976378,
      modPositive: true,
      envMod: 0.06299213,
      lfoMod: 0,
      keyMod: 0.44094488
    },
    env: { attack: 0, decay: 0.7007874, sustain: 1, release: 0.81889764 },
    chorus: 0
  },
  {
    name: "Hand Claps",
    vca: 1,
    lfo: { frequency: 0.46456693, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.13385827,
      resonance: 0.69291339,
      modPositive: true,
      envMod: 0.42519685,
      lfoMod: 0,
      keyMod: 0.43307087
    },
    env: {
      attack: 0.00787402,
      decay: 0.08661417,
      sustain: 0,
      release: 0.06299213
    },
    chorus: 0
  },
  {
    name: "FX Sweep",
    vca: 1,
    lfo: { frequency: 1, delay: 0.51181102 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 1,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0.91338583
    },
    hpf: 3,
    vcf: {
      frequency: 0.55905512,
      resonance: 0.34645669,
      modPositive: true,
      envMod: 0.65354331,
      lfoMod: 0,
      keyMod: 0.74015748
    },
    env: { attack: 0, decay: 0.74015748, sustain: 0, release: 0.88188976 },
    chorus: 0
  },
  {
    name: "Caverns",
    vca: 0.84251969,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0.80314961,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.53543307,
      resonance: 0.92913386,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.54330709
    },
    env: {
      attack: 0,
      decay: 0.1023622,
      sustain: 0.2992126,
      release: 0.37007874
    },
    chorus: 0
  },
  {
    name: "Strings",
    vca: 0.40944882,
    lfo: { frequency: 0.4488189, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.43307087,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.66929134,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.8503937
    },
    env: {
      attack: 0.46456693,
      decay: 0.2519685,
      sustain: 0.67716535,
      release: 0.31496063
    },
    chorus: 2
  },
  {
    name: "Violin",
    vca: 0.86614173,
    lfo: { frequency: 0.51968504, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.15748031
    },
    hpf: 2,
    vcf: {
      frequency: 0.60629921,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.94488189
    },
    env: {
      attack: 0.33858268,
      decay: 0.35433071,
      sustain: 0.4488189,
      release: 0.20472441
    },
    chorus: 0
  },
  {
    name: "Chorus Vibes",
    vca: 0.69291339,
    lfo: { frequency: 0.56692913, delay: 0.35433071 },
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
      frequency: 0.07874016,
      resonance: 0,
      modPositive: true,
      envMod: 0.46456693,
      lfoMod: 0,
      keyMod: 0.18110236
    },
    env: {
      attack: 0,
      decay: 0.7007874,
      sustain: 0.37007874,
      release: 0.58267717
    },
    chorus: 1
  },
  {
    name: "Organ I",
    vca: 0.45669291,
    lfo: { frequency: 0.35433071, delay: 0.33070866 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.76377953,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.47244094,
      resonance: 0.56692913,
      modPositive: true,
      envMod: 0.11023622,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 0, release: 0 },
    chorus: 2
  },
  {
    name: "Harpsichord I",
    vca: 0.98425197,
    lfo: { frequency: 0.18110236, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.27559055,
      noise: 0,
      pwm: 0.42519685,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 1,
      resonance: 1,
      modPositive: true,
      envMod: 0.70866142,
      lfoMod: 0,
      keyMod: 0.67716535
    },
    env: { attack: 0, decay: 0.47244094, sustain: 0, release: 0.24409449 },
    chorus: 0
  },
  {
    name: "Recorder",
    vca: 1,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.06299213,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.04724409,
      resonance: 0,
      modPositive: true,
      envMod: 0.36220472,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0.03937008,
      decay: 0.16535433,
      sustain: 1,
      release: 0.23622047
    },
    chorus: 0
  },
  {
    name: "Perc. Pluck",
    vca: 0.51181102,
    lfo: { frequency: 0.48818898, delay: 0.2992126 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.06299213
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.70866142,
      lfoMod: 0,
      keyMod: 0.57480315
    },
    env: {
      attack: 0,
      decay: 0.12598425,
      sustain: 0.61417323,
      release: 0.91338583
    },
    chorus: 1
  },
  {
    name: "Noise Sweep",
    vca: 0.72440945,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.01574803,
      resonance: 0,
      modPositive: true,
      envMod: 0.60629921,
      lfoMod: 0,
      keyMod: 0.81889764
    },
    env: {
      attack: 0.11023622,
      decay: 0.61417323,
      sustain: 0.8503937,
      release: 0.94488189
    },
    chorus: 0
  },
  {
    name: "Space Chimes",
    vca: 0.66929134,
    lfo: { frequency: 0.77952756, delay: 0 },
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
      frequency: 0.5511811,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.58267717
    },
    env: { attack: 0, decay: 0.19685039, sustain: 0, release: 0.47244094 },
    chorus: 1
  },
  {
    name: "Nylon Guitar",
    vca: 0.90551181,
    lfo: { frequency: 0.56692913, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.22834646,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.4488189,
      resonance: 0,
      modPositive: true,
      envMod: 0.20472441,
      lfoMod: 0,
      keyMod: 0.19685039
    },
    env: { attack: 0, decay: 0.7007874, sustain: 0, release: 0.2519685 },
    chorus: 0
  },
  {
    name: "Orchestral Pad",
    vca: 0,
    lfo: { frequency: 0.17322835, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.25984252,
      resonance: 0,
      modPositive: true,
      envMod: 0.43307087,
      lfoMod: 0,
      keyMod: 0.28346457
    },
    env: {
      attack: 0.22834646,
      decay: 0.69291339,
      sustain: 0.39370079,
      release: 0.40944882
    },
    chorus: 2
  },
  {
    name: "Bright Pluck",
    vca: 0.81889764,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.45669291,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.4488189,
      resonance: 0,
      modPositive: true,
      envMod: 0.31496063,
      lfoMod: 0,
      keyMod: 0.67716535
    },
    env: {
      attack: 0,
      decay: 0.19685039,
      sustain: 0.33070866,
      release: 0.34645669
    },
    chorus: 0
  },
  {
    name: "Organ Bell",
    vca: 0.48818898,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.66929134,
      noise: 0,
      pwm: 0.53543307,
      lfoMod: true,
      lfo: 0.04724409
    },
    hpf: 0,
    vcf: {
      frequency: 0.48031496,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 1, release: 0.20472441 },
    chorus: 1
  },
  {
    name: "Accordion",
    vca: 0.51968504,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.62992126,
      noise: 0,
      pwm: 0.50393701,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.60629921,
      resonance: 0,
      modPositive: true,
      envMod: 0.11023622,
      lfoMod: 0,
      keyMod: 0.58267717
    },
    env: {
      attack: 0.06299213,
      decay: 0.08661417,
      sustain: 0.86614173,
      release: 0.07086614
    },
    chorus: 1
  },
  {
    name: "FX Rise 1",
    vca: 0,
    lfo: { frequency: 0.91338583, delay: 0 },
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
      frequency: 0.8503937,
      resonance: 1,
      modPositive: true,
      envMod: 0.12598425,
      lfoMod: 1,
      keyMod: 0.50393701
    },
    env: { attack: 0, decay: 0, sustain: 1, release: 0.66141732 },
    chorus: 1
  },
  {
    name: "FX Rise 2",
    vca: 0,
    lfo: { frequency: 0.8503937, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.74015748,
      resonance: 1,
      modPositive: true,
      envMod: 0.62992126,
      lfoMod: 0.18110236,
      keyMod: 1
    },
    env: { attack: 0, decay: 1, sustain: 0.4015748, release: 0.55905512 },
    chorus: 2
  },
  {
    name: "Brass",
    vca: 0.56692913,
    lfo: { frequency: 0.4015748, delay: 1 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.74015748,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0.02362205,
      decay: 0.34645669,
      sustain: 0.4015748,
      release: 0.08661417
    },
    chorus: 1
  },
  {
    name: "Helicopter",
    vca: 0.56692913,
    lfo: { frequency: 0.83464567, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.37795276,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.64566929,
      resonance: 0.03937008,
      modPositive: true,
      envMod: 0.73228346,
      lfoMod: 1,
      keyMod: 0
    },
    env: { attack: 0, decay: 0, sustain: 0.27559055, release: 0.5984252 },
    chorus: 2
  },
  {
    name: "Lute",
    vca: 1,
    lfo: { frequency: 0.40944882, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0.01574803
    },
    hpf: 2,
    vcf: {
      frequency: 0.22834646,
      resonance: 0,
      modPositive: true,
      envMod: 0.27559055,
      lfoMod: 0,
      keyMod: 0.67716535
    },
    env: {
      attack: 0,
      decay: 0.37795276,
      sustain: 0.26771654,
      release: 0.68503937
    },
    chorus: 0
  },
  {
    name: "Chorus Funk",
    vca: 0.33070866,
    lfo: { frequency: 0.60629921, delay: 0.74015748 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.62204724,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.37007874,
      resonance: 0.26771654,
      modPositive: true,
      envMod: 0.41732283,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: { attack: 0, decay: 0.08661417, sustain: 0.26771654, release: 0 },
    chorus: 1
  },
  {
    name: "Tomita",
    vca: 0.4488189,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.38582677,
      resonance: 0.98425197,
      modPositive: true,
      envMod: 0.11811024,
      lfoMod: 0.01574803,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.11023622, sustain: 0.62204724, release: 0 },
    chorus: 0
  },
  {
    name: "FX Sweep 1",
    vca: 0,
    lfo: { frequency: 1, delay: 0 },
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
      frequency: 0.45669291,
      resonance: 1,
      modPositive: true,
      envMod: 0.12598425,
      lfoMod: 0.5984252,
      keyMod: 0.50393701
    },
    env: { attack: 0, decay: 0, sustain: 1, release: 0.66929134 },
    chorus: 1
  },
  {
    name: "Sharp Reed",
    vca: 0.43307087,
    lfo: { frequency: 0.16535433, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.25984252,
      resonance: 0,
      modPositive: true,
      envMod: 0.41732283,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.01574803,
      decay: 0.14173228,
      sustain: 0.88188976,
      release: 0
    },
    chorus: 0
  },
  {
    name: "Bass Pluck",
    vca: 0.72440945,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.47244094,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.29133858,
      resonance: 0.22834646,
      modPositive: true,
      envMod: 0.22047244,
      lfoMod: 0,
      keyMod: 0.33858268
    },
    env: { attack: 0, decay: 0.33070866, sustain: 0.27559055, release: 0 },
    chorus: 0
  },
  {
    name: "Resonant Rise",
    vca: 0.48818898,
    lfo: { frequency: 0.40944882, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.11811024
    },
    hpf: 2,
    vcf: {
      frequency: 0.51968504,
      resonance: 0.84251969,
      modPositive: true,
      envMod: 0.24409449,
      lfoMod: 0,
      keyMod: 0.57480315
    },
    env: { attack: 0, decay: 0.40944882, sustain: 0.30708661, release: 0 },
    chorus: 2
  },
  {
    name: "Harpsichord 2",
    vca: 0.84251969,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.27559055,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 1,
      resonance: 0.7480315,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.35433071, sustain: 0, release: 0 },
    chorus: 0
  },
  {
    name: "Dark Ensemble",
    vca: 0.52755906,
    lfo: { frequency: 0, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.59055118,
      noise: 0,
      pwm: 0.4488189,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.43307087,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.84251969
    },
    env: { attack: 0.16535433, decay: 0, sustain: 1, release: 0.27559055 },
    chorus: 1
  },
  {
    name: "Contact Wah",
    vca: 1,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.63779528,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.48031496,
      resonance: 0.79527559,
      modPositive: true,
      envMod: 0.36220472,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 0, release: 0 },
    chorus: 0
  },
  {
    name: "Noise Sweep 2",
    vca: 0.91338583,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 1,
      resonance: 0,
      modPositive: true,
      envMod: 0.65354331,
      lfoMod: 0,
      keyMod: 0.81889764
    },
    env: {
      attack: 1,
      decay: 0.62204724,
      sustain: 0.20472441,
      release: 0.65354331
    },
    chorus: 1
  },
  {
    name: "Glassy Wah",
    vca: 0.88188976,
    lfo: { frequency: 0, delay: 0.74015748 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.22047244,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.18897638,
      resonance: 0.26771654,
      modPositive: true,
      envMod: 0.48031496,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.04724409,
      decay: 0.14173228,
      sustain: 0.39370079,
      release: 0.2992126
    },
    chorus: 0
  },
  {
    name: "Phase Ensemble",
    vca: 0.77952756,
    lfo: { frequency: 0.08661417, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0.03937008
    },
    hpf: 2,
    vcf: {
      frequency: 0.62204724,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0.66141732,
      decay: 0.35433071,
      sustain: 0.4488189,
      release: 0.38582677
    },
    chorus: 2
  },
  {
    name: "Chorused Bell",
    vca: 0.48818898,
    lfo: { frequency: 0, delay: 0.08661417 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.79527559,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.46456693,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.48818898, sustain: 0, release: 0.4488189 },
    chorus: 1
  },
  {
    name: "Clav",
    vca: 0.8503937,
    lfo: { frequency: 0.39370079, delay: 0.08661417 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.05511811,
      noise: 0,
      pwm: 0.71653543,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.2519685,
      resonance: 0,
      modPositive: true,
      envMod: 0.49606299,
      lfoMod: 0,
      keyMod: 0
    },
    env: { attack: 0, decay: 0.33858268, sustain: 0.43307087, release: 0 },
    chorus: 0
  },
  {
    name: "Organ 2",
    vca: 0.62204724,
    lfo: { frequency: 0.63779528, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.81889764,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.42519685,
      resonance: 0.83464567,
      modPositive: true,
      envMod: 0.05511811,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 0, release: 0 },
    chorus: 1
  },
  {
    name: "Bassoon",
    vca: 1,
    lfo: { frequency: 0.66141732, delay: 0.2992126 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.70866142,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 3,
    vcf: {
      frequency: 0.27559055,
      resonance: 0,
      modPositive: true,
      envMod: 0.33858268,
      lfoMod: 0.07086614,
      keyMod: 0.77165354
    },
    env: {
      attack: 0.03937008,
      decay: 1,
      sustain: 0.83464567,
      release: 0.01574803
    },
    chorus: 0
  },
  {
    name: "Auto Release Noise Sweep",
    vca: 0.84251969,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 1,
      resonance: 0,
      modPositive: true,
      envMod: 1,
      lfoMod: 0,
      keyMod: 0.81889764
    },
    env: {
      attack: 0,
      decay: 0.62204724,
      sustain: 0.4488189,
      release: 0.65354331
    },
    chorus: 1
  },
  {
    name: "Brass Ensemble",
    vca: 0.30708661,
    lfo: { frequency: 0.19685039, delay: 0.74015748 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.37007874,
      resonance: 0.26771654,
      modPositive: true,
      envMod: 0.27559055,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.04724409,
      decay: 0.53543307,
      sustain: 0.52755906,
      release: 0.2992126
    },
    chorus: 1
  },
  {
    name: "Ethereal",
    vca: 0.47244094,
    lfo: { frequency: 0.54330709, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.46456693,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.37007874,
      resonance: 0.94488189,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0.72440945,
      decay: 0.39370079,
      sustain: 1,
      release: 0.43307087
    },
    chorus: 2
  },
  {
    name: "Chorus Bell 2",
    vca: 0.23622047,
    lfo: { frequency: 0.56692913, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.22834646,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0,
      resonance: 0.80314961,
      modPositive: true,
      envMod: 0.48818898,
      lfoMod: 0,
      keyMod: 0.70866142
    },
    env: { attack: 0, decay: 0.92125984, sustain: 0, release: 0.94488189 },
    chorus: 1
  },
  {
    name: "Blizzard",
    vca: 1,
    lfo: { frequency: 0.00787402, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.44094488,
      resonance: 0.7007874,
      modPositive: true,
      envMod: 0.05511811,
      lfoMod: 0.2992126,
      keyMod: 0.95275591
    },
    env: {
      attack: 0.61417323,
      decay: 0.77165354,
      sustain: 0.68503937,
      release: 0.61417323
    },
    chorus: 0
  },
  {
    name: "E. Piano with Tremolo",
    vca: 0.81102362,
    lfo: { frequency: 0.34645669, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0.16535433,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.17322835,
      resonance: 0,
      modPositive: true,
      envMod: 0.27559055,
      lfoMod: 0.05511811,
      keyMod: 0.84251969
    },
    env: {
      attack: 0,
      decay: 0.51181102,
      sustain: 0.47244094,
      release: 0.77165354
    },
    chorus: 0
  },
  {
    name: "Clarinet",
    vca: 0.81889764,
    lfo: { frequency: 0.54330709, delay: 0.17322835 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.07086614
    },
    hpf: 3,
    vcf: {
      frequency: 0.27559055,
      resonance: 0,
      modPositive: true,
      envMod: 0.33858268,
      lfoMod: 0.05511811,
      keyMod: 0.77165354
    },
    env: {
      attack: 0.03937008,
      decay: 1,
      sustain: 0.83464567,
      release: 0.05511811
    },
    chorus: 0
  },
  {
    name: "Thunder",
    vca: 0.84251969,
    lfo: { frequency: 1, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.01574803,
      resonance: 0,
      modPositive: true,
      envMod: 0.60629921,
      lfoMod: 0,
      keyMod: 0.81889764
    },
    env: {
      attack: 0,
      decay: 0.17322835,
      sustain: 0.8503937,
      release: 0.94488189
    },
    chorus: 0
  },
  {
    name: "Reedy Organ",
    vca: 0.54330709,
    lfo: { frequency: 0.27559055, delay: 0.14173228 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.25984252,
      resonance: 0,
      modPositive: true,
      envMod: 0.41732283,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.02362205,
      decay: 0.34645669,
      sustain: 0.85826772,
      release: 0
    },
    chorus: 0
  },
  {
    name: "Flute - Horn",
    vca: 0.17322835,
    lfo: { frequency: 0.26771654, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.46456693,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.19685039,
      resonance: 0,
      modPositive: true,
      envMod: 0.33070866,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.16535433,
      decay: 0.57480315,
      sustain: 0.55905512,
      release: 0.37795276
    },
    chorus: 2
  },
  {
    name: "Toy Rhodes",
    vca: 0.84251969,
    lfo: { frequency: 0.23622047, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 1
    },
    hpf: 3,
    vcf: {
      frequency: 0.45669291,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.7007874, sustain: 0, release: 0.30708661 },
    chorus: 0
  },
  {
    name: "Surf's Up",
    vca: 0.59055118,
    lfo: { frequency: 0.00787402, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.66141732,
      resonance: 0.08661417,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.38582677,
      keyMod: 0.42519685
    },
    env: {
      attack: 0.25984252,
      decay: 0.76377953,
      sustain: 1,
      release: 0.95275591
    },
    chorus: 0
  },
  {
    name: "OW Bass",
    vca: 0.5511811,
    lfo: { frequency: 0.39370079, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.37007874,
      noise: 0,
      pwm: 0.39370079,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.49606299,
      resonance: 0.66141732,
      modPositive: true,
      envMod: 0.51181102,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 1, decay: 0, sustain: 0.84251969, release: 0 },
    chorus: 0
  },
  {
    name: "Piccolo",
    vca: 0.68503937,
    lfo: { frequency: 0.5511811, delay: 0.22047244 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.11023622,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.03149606,
      resonance: 0,
      modPositive: true,
      envMod: 0.49606299,
      lfoMod: 0.12598425,
      keyMod: 0.77165354
    },
    env: {
      attack: 0.12598425,
      decay: 0.81102362,
      sustain: 0.83464567,
      release: 0.16535433
    },
    chorus: 0
  },
  {
    name: "Melodic Taps",
    vca: 1,
    lfo: { frequency: 0.77952756, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 1,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.56692913,
      resonance: 0.88188976,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.18897638, sustain: 0, release: 0.18897638 },
    chorus: 1
  },
  {
    name: "Meow Bass",
    vca: 0.66141732,
    lfo: { frequency: 0.4015748, delay: 1 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.35433071,
      resonance: 0.78740157,
      modPositive: true,
      envMod: 0.27559055,
      lfoMod: 0,
      keyMod: 0.51181102
    },
    env: {
      attack: 0.03149606,
      decay: 0.70866142,
      sustain: 0,
      release: 0.21259843
    },
    chorus: 0
  },
  {
    name: "Violin (high)",
    vca: 0.66929134,
    lfo: { frequency: 0.55905512, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.17322835
    },
    hpf: 2,
    vcf: {
      frequency: 0.7007874,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.02362205,
      keyMod: 0.94488189
    },
    env: {
      attack: 0.33858268,
      decay: 0.35433071,
      sustain: 0.4488189,
      release: 0.20472441
    },
    chorus: 0
  },
  {
    name: "High Bells",
    vca: 0.87401575,
    lfo: { frequency: 0.23622047, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 1
    },
    hpf: 3,
    vcf: {
      frequency: 0.5984252,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0,
      decay: 0.17322835,
      sustain: 0.40944882,
      release: 0.46456693
    },
    chorus: 0
  },
  {
    name: "Rolling Wah",
    vca: 0.60629921,
    lfo: { frequency: 0.28346457, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.82677165,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.47244094,
      resonance: 0.07086614,
      modPositive: true,
      envMod: 0,
      lfoMod: 1,
      keyMod: 0
    },
    env: {
      attack: 0.26771654,
      decay: 0.43307087,
      sustain: 1,
      release: 0.82677165
    },
    chorus: 0
  },
  {
    name: "Ping Bell",
    vca: 0.65354331,
    lfo: { frequency: 0, delay: 0.08661417 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.81889764,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.5984252,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0,
      decay: 0.18110236,
      sustain: 0.18110236,
      release: 0.4488189
    },
    chorus: 1
  },
  {
    name: "Brassy Organ",
    vca: 0.11023622,
    lfo: { frequency: 0.12598425, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.44094488,
      noise: 0,
      pwm: 0.53543307,
      lfoMod: true,
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.06299213,
      resonance: 0,
      modPositive: true,
      envMod: 0.68503937,
      lfoMod: 0,
      keyMod: 0.40944882
    },
    env: { attack: 0, decay: 0.28346457, sustain: 0.85826772, release: 0 },
    chorus: 1
  },
  {
    name: "Low Dark Strings",
    vca: 0.31496063,
    lfo: { frequency: 0.16535433, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.63779528,
      lfoMod: true,
      lfo: 0.03937008
    },
    hpf: 2,
    vcf: {
      frequency: 0.55905512,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.81102362
    },
    env: {
      attack: 0.65354331,
      decay: 0.18110236,
      sustain: 0.85826772,
      release: 0.33070866
    },
    chorus: 2
  },
  {
    name: "Piccolo Trumpet",
    vca: 0.76377953,
    lfo: { frequency: 0.4015748, delay: 1 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.57480315,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.74015748,
      lfoMod: 0,
      keyMod: 1
    },
    env: {
      attack: 0.02362205,
      decay: 0.34645669,
      sustain: 0.4015748,
      release: 0.08661417
    },
    chorus: 0
  },
  {
    name: "Cello",
    vca: 0.85826772,
    lfo: { frequency: 0.4488189, delay: 0.35433071 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0.16535433
    },
    hpf: 2,
    vcf: {
      frequency: 0.59055118,
      resonance: 0,
      modPositive: true,
      envMod: 0.02362205,
      lfoMod: 0.00787402,
      keyMod: 0.35433071
    },
    env: {
      attack: 0.37795276,
      decay: 0.51181102,
      sustain: 0.70866142,
      release: 0.26771654
    },
    chorus: 0
  },
  {
    name: "HIgh Strings",
    vca: 0.37795276,
    lfo: { frequency: 0.62992126, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.5511811,
      lfoMod: true,
      lfo: 0.07874016
    },
    hpf: 2,
    vcf: {
      frequency: 0.72440945,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 0.55905512
    },
    env: {
      attack: 0.21259843,
      decay: 0.4488189,
      sustain: 0.4488189,
      release: 0.32283465
    },
    chorus: 2
  },
  {
    name: "Rocket Men",
    vca: 0,
    lfo: { frequency: 0.8503937, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.86614173,
      resonance: 1,
      modPositive: true,
      envMod: 0.62992126,
      lfoMod: 0.49606299,
      keyMod: 1
    },
    env: { attack: 0, decay: 1, sustain: 0.4015748, release: 0.7007874 },
    chorus: 2
  },
  {
    name: "Forbidden Planet",
    vca: 0.62204724,
    lfo: { frequency: 0.39370079, delay: 0.08661417 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.07086614,
      noise: 0,
      pwm: 0.34645669,
      lfoMod: true,
      lfo: 0
    },
    hpf: 1,
    vcf: {
      frequency: 0.22834646,
      resonance: 0.03149606,
      modPositive: true,
      envMod: 0.69291339,
      lfoMod: 0.03937008,
      keyMod: 0.7480315
    },
    env: {
      attack: 0,
      decay: 0.37795276,
      sustain: 0.18110236,
      release: 0.33070866
    },
    chorus: 1
  },
  {
    name: "Froggy",
    vca: 0.60629921,
    lfo: { frequency: 0.61417323, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 1,
      noise: 0,
      pwm: 0,
      lfoMod: true,
      lfo: 0
    },
    hpf: 3,
    vcf: {
      frequency: 0.43307087,
      resonance: 1,
      modPositive: true,
      envMod: 0.33858268,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0, sustain: 0, release: 0 },
    chorus: 0
  },
  {
    name: "Owgan",
    vca: 0.79527559,
    lfo: { frequency: 0.39370079, delay: 0 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0.44094488,
      noise: 0,
      pwm: 0.35433071,
      lfoMod: true,
      lfo: 0
    },
    hpf: 2,
    vcf: {
      frequency: 0.2992126,
      resonance: 0.66141732,
      modPositive: true,
      envMod: 0.2519685,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0, decay: 0.38582677, sustain: 0.43307087, release: 0 },
    chorus: 0
  }
].map(patch => ({ ...patch, hpf: patch.hpf / 4 }))
