import { createStackNavigator, createAppContainer, } from 'react-navigation'

import Splash from './Splash'
import Login from './Login'

export default createAppContainer(
  createStackNavigator(
    {
      Splash: { screen: Splash, },
      Login: { screen: Login, },
    },
    {
      initialRouteName: 'Splash',
    }
  )
)
