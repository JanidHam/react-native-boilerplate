import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from '@views/login'
import HomeScreen from '@views/home'
import { navbarDefault } from '@assets/styles/main'

const initialRouteName = 'Login'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName,
    defaultNavigationOptions: navbarDefault,
  },
)

export default createAppContainer(AppNavigator)
