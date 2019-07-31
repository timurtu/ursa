import React from 'react'

import Layout from '../../components/Layout'
import Stars from '../../components/Stars'

export default function Login() {
  return (
    <Layout>
      <Stars />
    </Layout>
  )
}

Login.navigationOptions = {
  title: 'Log In',
}
