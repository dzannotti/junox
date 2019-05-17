import React from 'react'
import PropTypes from 'prop-types'
import { VisualizerDisplay } from './elements'

const WAVE_PIXELS_PER_SAMPLE = 0.4 * 2

// TODO: Figure out a way of doing this with hooks
export default class Visualizer extends React.Component {
  static propTypes = {
    audioContext: PropTypes.object.isRequired,
    outNode: PropTypes.object.isRequired,
    period: PropTypes.number
  }

  static defaultProps = {
    period: 0
  }

  constructor(props) {
    super(props)
    this.width = 510
    this.height = 60
    this.paint = this.paint.bind(this)
    this.dataArray = new Float32Array(1024)
  }

  paint() {
    this.ctx.fillStyle = 'rgb(153, 165, 42)'
    this.ctx.fillRect(0, 0, this.width, this.height)

    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = 'rgb(123, 135, 12)'
    this.ctx.moveTo(0, this.height / 2)
    this.ctx.lineTo(this.width, this.height / 2)
    this.ctx.stroke()

    this.ctx.strokeStyle = 'rgb(47, 52, 9)'
    this.analyser.getFloatTimeDomainData(this.dataArray)
    this.ctx.beginPath()

    // Normalize...
    let max = 0
    for (let i = 0, l = this.dataArray.length; i < l; i++) {
      const abs = Math.abs(this.dataArray[i])
      if (abs > max) {
        max = abs
      }
    }

    const scale = Math.min(1 / max, 4) * 0.48
    const sampleTime =
      this.props.sampleRate * this.props.audioContext.currentTime
    const period = this.props.sampleRate / this.props.period
    const sampleOffset = (sampleTime % period) - period
    this.ctx.moveTo(0, this.height * 1.5 - (this.dataArray[0] >> 2) - 1)
    for (let i = 0, l = this.dataArray.length; i < l; i++) {
      const x = (i + sampleOffset) * WAVE_PIXELS_PER_SAMPLE
      if (x > this.width) {
        break
      }
      this.ctx.lineTo(
        x,
        this.height / 2 + this.height * this.dataArray[i] * scale
      )
    }
    this.ctx.stroke()
    requestAnimationFrame(this.paint)
  }

  componentDidMount() {
    this.analyser = this.props.audioContext.createAnalyser()
    this.analyser.fftSize = 2048
    this.props.outNode.connect(this.analyser)

    const canvas = this.node
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    this.ctx = canvas.getContext('2d')
    requestAnimationFrame(this.paint)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <VisualizerDisplay id="analysis">
        <canvas ref={node => (this.node = node)} />
      </VisualizerDisplay>
    )
  }
}
