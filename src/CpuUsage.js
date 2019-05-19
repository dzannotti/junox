import React from 'react'
import styled from 'styled-components'

const CPUUsage = styled.div`
  position: absolute;
  bottom: -18px;
  right: 0px;
  color: white;
  font-size: 10px;
`

export default class CPUUsageDisplay extends React.Component {
  state = {
    cpuUsage: [0, 0]
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateCPU, 300)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  updateCPU = () => {
    const { synth } = this.props
    this.setState({ cpuUsage: synth.sampleTime() })
  }

  render() {
    const { cpuUsage } = this.state
    return (
      <CPUUsage>
        {cpuUsage[0].toFixed(2)}ms (max {cpuUsage[1].toFixed(2)}ms) per
        128samples
      </CPUUsage>
    )
  }
}
