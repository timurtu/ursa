import { createStackNavigator, createAppContainer, } from 'react-navigation'

import theme from 'theme'
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
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: theme.bg,
        },
        headerTintColor: theme.primary,
        headerTitleStyle: {
          fontFamily: 'Dosis-Bold',
          fontSize: 21,
        },
      },
    }
  )
)
