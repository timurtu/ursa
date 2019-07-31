import React from 'react'
import styled from 'styled-components/native'

import Layout from '../../components/Layout'
import Stars from '../../components/Stars'
import Button from '../../components/Button'

const Title = styled.Text`
  flex: 1;
  font-family: Dosis-Regular;
  color: #34e5eb;
  font-size: 120;
  text-align: center;
  margin-top: 50;
`

type Props = {
  navigation: Object,
}

export default function Splash(props: Props) {
  return (
    <Layout style={{ paddingBottom: 30 }}>
      <Stars />
      <Title>ursa</Title>
      <Button
        text="Log In"
        onPress={() => props.navigation.navigate('Login')}
      />
      <Button text="Sign Up" />
    </Layout>
  )
}

Splash.navigationOptions = {
  header: null,
}
