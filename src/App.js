import React from 'react'
import styled from 'styled-components/native'

import Button from './components/Button'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #123d5f;
  padding-bottom: 25;
`

const Title = styled.Text`
  flex: 1;
  font-family: Dosis-Regular;
  color: #34e5eb;
  font-size: 120;
  text-align: center;
  margin-top: 20;
`

export default function App() {
  return (
    <Wrapper>
      <Title>ursa</Title>
      <Button text="Log In" />
      <Button text="Sign Up" />
    </Wrapper>
  )
}
