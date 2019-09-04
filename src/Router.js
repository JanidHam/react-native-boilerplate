import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from '@views/login'
import HomeScreen from '@views/home'
import RestaurantScreen from '@views/restaurant'
import TestScreen from '@views/test'
import { navbarDefault } from '@assets/styles/main'

const initialRouteName = 'Restaurant'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Restaurant: {
      screen: RestaurantScreen,
    },
    Test: {
      screen: TestScreen,
    },
  },
  {
    initialRouteName,
    defaultNavigationOptions: navbarDefault,
  },
)

export default createAppContainer(AppNavigator)
