import React, { Fragment } from 'react'
import { Dimensions } from 'react-native'
import { Emitter } from 'react-native-particles'
import styled from 'styled-components'

import theme from 'theme'

const scale = Dimensions.get('window')

const Text = styled.Text`
  font-size: 22;
  color: ${theme.primary};
`

const StarEmitter = ({ x, y }) => (
  <Emitter
    infiniteLoop
    numberOfParticles={500}
    emissionRate={1}
    interval={200}
    gravity={2}
    speed={16}
    particleLife={2500}
    direction={-90}
    spread={360}
    fromPosition={{ x, y }}
  >
    <Text>*</Text>
  </Emitter>
)

export default function Stars() {
  return (
    <Fragment>
      <StarEmitter x={50} y={70} />
      <StarEmitter x={scale.width - 40} y={40} />
      <StarEmitter x={scale.width - 80} y={200} />
      <StarEmitter x={scale.width / 5.5} y={scale.height / 2.75} />
      <StarEmitter x={scale.width / 2} y={scale.height / 2.5} />
      <StarEmitter x={scale.width / 1.25} y={scale.height / 2} />
      <StarEmitter x={scale.width / 3} y={scale.height / 1.75} />
      <StarEmitter x={scale.width / 6.5} y={scale.height / 1.25} />
      <StarEmitter x={scale.width / 2} y={scale.height / 1.5} />
      <StarEmitter x={scale.width / 1.15} y={scale.height / 1.4} />
      <StarEmitter x={scale.width / 1.25} y={scale.height / 1.15} />
    </Fragment>
  )
}
