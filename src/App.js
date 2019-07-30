import React from 'react'
import styled from 'styled-components'

import Button from './components/Button'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #123d5f;
  padding-bottom: 20;
`

export default function App() {
  return (
    <Wrapper>
      <Button text="Log In" />
      <Button text="Sign Up" />
    </Wrapper>
  )
}
