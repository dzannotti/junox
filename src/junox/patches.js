export default [
  {
    name: 'Synth Bass I',
    vca: 0.7795275590551181,
    lfo: { frequency: 0.5511811023622047 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.7637795275590551,
      noise: 0.4094488188976378,
      pwm: 0.4409448818897638,
      lfoMod: false,
      lfo: 0
    },
    env: {
      attack: 0,
      decay: 0.3464566929133858,
      sustain: 0.14173228346456693,
      release: 0.2677165354330709
    },
    hpf: 0,
    vcf: {
      frequency: 0.25984251968503935,
      resonance: 0,
      modPositive: true,
      envMod: 0.5354330708661418,
      lfoMod: 0,
      keyMod: 0.2204724409448819
    },
    chorus: 0
  },
  {
    name: 'Brass',
    vca: 0.7795275590551181,
    lfo: { frequency: 0.3779527559055118 },
    dco: {
      saw: true,
      pulse: false,
      sub: 0,
      noise: 0,
      pwm: 0.6220472440944882,
      lfoMod: false,
      lfo: 0
    },
    env: {
      attack: 0,
      decay: 0.3464566929133858,
      sustain: 0.47244094488188976,
      release: 0.15748031496062992
    },
    hpf: 0,
    vcf: {
      frequency: 0.2047244094488189,
      resonance: 0,
      modPositive: true,
      envMod: 0.5826771653543307,
      lfoMod: 0,
      keyMod: 0.889763779527559
    },
    chorus: 1
  },
  {
    name: 'Organ',
    vca: 0.6141732283464567,
    lfo: { frequency: 0.1968503937007874 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.15748031496062992,
      noise: 0,
      pwm: 0.4015748031496063,
      lfoMod: true,
      lfo: 0
    },
    env: {
      attack: 0,
      decay: 0.1732283464566929,
      sustain: 0.5984251968503937,
      release: 0.25984251968503935
    },
    hpf: 0,
    vcf: {
      frequency: 0.28346456692913385,
      resonance: 0.6456692913385826,
      modPositive: true,
      envMod: 0.1889763779527559,
      lfoMod: 0,
      keyMod: 1
    },
    chorus: 1
  },
  {
    name: 'Low Dark Strings',
    vca: 0.5118110236220472,
    lfo: { frequency: 0.10236220472440945 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.6614173228346457,
      lfoMod: true,
      lfo: 0
    },
    env: {
      attack: 0.5433070866141733,
      decay: 0.2125984251968504,
      sustain: 0.47244094488188976,
      release: 0.25984251968503935
    },
    hpf: 0,
    vcf: {
      frequency: 0.6062992125984252,
      resonance: 0,
      modPositive: true,
      envMod: 0.06299212598425197,
      lfoMod: 0,
      keyMod: 0.8503937007874016
    },
    chorus: 2
  },
  {
    name: 'Harpsichord',
    vca: 0.5118110236220472,
    lfo: { frequency: 0.07086614173228346 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0.2677165354330709,
      noise: 0,
      pwm: 0.4094488188976378,
      lfoMod: true,
      lfo: 0
    },
    env: {
      attack: 0.06299212598425197,
      decay: 0.5196850393700787,
      sustain: 0.09448818897637795,
      release: 0.25984251968503935
    },
    hpf: 1,
    vcf: {
      frequency: 1,
      resonance: 0.4645669291338583,
      modPositive: true,
      envMod: 0.6062992125984252,
      lfoMod: 0,
      keyMod: 1
    },
    chorus: 1
  },
  {
    name: 'Pizzicato',
    vca: 0.6614173228346457,
    lfo: { frequency: 0.4409448818897638 },
    dco: {
      saw: true,
      pulse: true,
      sub: 0,
      noise: 0,
      pwm: 0.8582677165354331,
      lfoMod: true,
      lfo: 0
    },
    env: {
      attack: 0,
      decay: 0.15748031496062992,
      sustain: 0.07874015748031496,
      release: 0.2677165354330709
    },
    hpf: 1,
    vcf: {
      frequency: 0.5196850393700787,
      resonance: 0,
      modPositive: true,
      envMod: 0.08661417322834646,
      lfoMod: 0,
      keyMod: 0.2440944881889764
    },
    chorus: 1
  },
  {
    name: 'Piano',
    vca: 0.6220472440944882,
    lfo: { frequency: 0.1732283464566929 },
    dco: {
      saw: false,
      pulse: true,
      sub: 0.7795275590551181,
      noise: 0,
      pwm: 0.5905511811023622,
      lfoMod: false,
      lfo: 0
    },
    env: {
      attack: 0,
      decay: 0.5354330708661418,
      sustain: 0.07086614173228346,
      release: 0.25196850393700787
    },
    hpf: 0.32999999999999996,
    vcf: {
      frequency: 0.4881889763779528,
      resonance: 0.10236220472440945,
      modPositive: true,
      envMod: 0.08661417322834646,
      lfoMod: 0,
      keyMod: 0.13385826771653545
    },
    chorus: 0
  }
].sort((a, b) => a.name.localeCompare(b.name))
