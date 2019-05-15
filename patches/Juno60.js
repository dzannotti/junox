const csv = require('csv-parser')
const fs = require('fs')
const results = []

fs.createReadStream('patches/Juno60.csv')
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    toJSON(results)
  })

function toSlider(index, value) {
  return parseInt(results[index][value]) / 10
}

function toInteger(index, value) {
  return parseInt(results[index][value])
}

function toBoolean(index, value) {
  return Boolean(parseInt(results[index][value]))
}

function toJSON(results) {
  const formatted = results
    .filter(patch => parseInt(patch['Number']) < 71)
    .map((result, i) => ({
      name: result['Name'],
      vca: toSlider(i, 'VCA Value'),
      vcaType: result['VCA Dir'] === 'G' ? 'gate' : 'env',
      lfo: {
        frequency: toSlider(i, 'LFO Rate'),
        delay: toSlider(i, 'LFO Delay')
      },
      dco: {
        saw: toBoolean(i, 'DCO Saw'),
        pulse: toBoolean(i, 'DCO Pulse'),
        sub: toSlider(i, 'DCO Sub'),
        noise: toSlider(i, 'DCO Noise'),
        pwm: toSlider(i, 'DCO PWM'),
        lfoMod: result['DCO Lfo Mod'] === 'L',
        lfo: toSlider(i, 'DCO Lfo')
      },
      hpf: toInteger(i, 'HPF'),
      vcf: {
        frequency: toSlider(i, 'VCF Freq'),
        resonance: toSlider(i, 'VCF Res'),
        modPositive: result['VCF Dir'] === 'N',
        envMod: toSlider(i, 'VCF Env'),
        lfoMod: toSlider(i, 'VCF LFO'),
        keyMod: toSlider(i, 'VCF Key')
      },
      env: {
        attack: toSlider(i, 'ENV Attack'),
        decay: toSlider(i, 'ENV Decay'),
        sustain: toSlider(i, 'ENV Sustain'),
        release: toSlider(i, 'ENV Release')
      },
      chorus: toInteger(i, 'Chorus')
    }))
  console.log(formatted[0])
  fs.writeFileSync(
    'src/junox/patches.js',
    `export default ${JSON.stringify(formatted)}`
  )
}
