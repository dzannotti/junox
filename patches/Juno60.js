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
      // this is a bit fudged, unsure what negative values do?
      vca: Math.abs(toSlider(i, 'VCA Value')) + 0.35,
      vcaType: result['VCA Dir'] === 'G' ? 'gate' : 'env',
      lfo: {
        frequency: toSlider(i, 'LFO Rate'),
        delay: toSlider(i, 'LFO Delay')
      },
      dco: {
        saw: toBoolean(i, 'DCO Saw'),
        pulse: toBoolean(i, 'DCO Pulse'),
        sub: toBoolean(i, 'DCO Sub Enabled'),
        subAmount: toSlider(i, 'DCO Sub'),
        noise: toSlider(i, 'DCO Noise'),
        pwm: toSlider(i, 'DCO PWM'),
        pwmMod: result['DCO Lfo Mod'].toLowerCase(),
        lfo: toSlider(i, 'DCO Lfo')
      },
      hpf: toInteger(i, 'HPF') / 3,
      vcf: {
        type: 'diode-ladder',
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
