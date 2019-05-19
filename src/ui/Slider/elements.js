import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spacer = styled.div`
  flex: 1 1 auto;
`

const SliderTrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SliderTrackLabel = styled.div`
  text-transform: uppercase;
  height: 1.25rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #cfcfcf;
`

const ThumbContainer = styled.div`
  display: flex;
  height: 22px;
  width: 44px;
  background-color: #000000;
  align-items: center;
  border-radius: 2px;
`

const ThumbMarker = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 2px;
  background-color: white;
  width: 100%;
`

const FaderMarks = styled.div`
  width: 31px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FaderMark = styled.div`
  background-color: white;
  height: ${props => (props.bold ? '2px' : '1px')};
  width: 100%;
  margin-bottom: 3px;
`

export const SliderThumb = React.memo(function SliderThumb(props) {
  return (
    <ThumbContainer {...props}>
      <ThumbMarker />
    </ThumbContainer>
  )
})

export const SliderTrackRange = React.memo(function SliderTrackRange({
  props,
  label,
  children
}) {
  const faders = (
    <FaderMarks>
      <FaderMark bold />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark bold />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark bold />
    </FaderMarks>
  )

  return (
    <SliderTrackWrapper>
      <SliderTrackLabel>{label}</SliderTrackLabel>
      <SliderTrackContainer
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={props.style}
      >
        {faders}
        <SliderTrack ref={props.ref}>{children}</SliderTrack>
        {faders}
      </SliderTrackContainer>
    </SliderTrackWrapper>
  )
})

const SliderTrackContainer = styled.div`
  height: 140px;
  width: 70px;
  display: flex;
  flex-direction: row;
`
const SliderTrack = styled.div`
  width: 7px;
  height: 135px;
  background-color: #000000;
  border-radius: 2px;
`
