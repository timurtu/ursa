import React, { Fragment, } from 'react'
import { StatusBar, } from 'react-native'

import Routes from './routes'

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Routes />
    </Fragment>
  )
}
