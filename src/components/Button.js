import React from 'react'
import { Button as NativeButton } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding-horizontal: 20;
  padding-vertical: 20;
`

type Props = {
  text: string,
}

export default function Button(props: Props) {
  return (
    <Wrapper>
      <NativeButton title={props.text} {...props} />
    </Wrapper>
  )
}
