import React, { useState, useEffect } from 'react'
import { Usage } from './elements'

export default function CPUUsage({ synth }) {
  const [usage, setUsage] = useState([0, 0])
  const updateCPU = () => setUsage(synth.sampleTime())
  useEffect(() => {
    const id = setInterval(updateCPU, 300)
    return () => clearInterval(id)
  }, [updateCPU])
  return (
    <Usage>
      {usage[0].toFixed(2)}ms (max {usage[1].toFixed(2)}ms) per 128samples
    </Usage>
  )
}
