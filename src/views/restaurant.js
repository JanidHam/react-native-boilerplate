import React from 'react'
import { Text, View, ScrollView, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Header from '@root/components/restaurant/Header'
import NavbarRestaurant from '@root/components/restaurant/Navbar'
import MenuItem from '@components/restaurant/MenuItem'

const HEADER_MAX_HEIGHT = 350
const NAVBAR_MAX_HEIGHT = 80

const styles = StyleSheet.create({
  animatedHeaderContainer: {
    position: 'absolute',
    top: 0,
    // top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    height: 350,
    justifyContent: 'flex-end',
  },
})

const items = (
  <View
    style={{
      height: 100,
      width: '100%',
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      marginBottom: 10,
    }}>
    <MenuItem />
  </View>
)

const RestaurantView = () => {
  let scrollYAnimatedValue = new Animated.Value(0)

  const headerHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, 0],
    extrapolate: 'clamp',
  })

  const navbarHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, NAVBAR_MAX_HEIGHT],
    extrapolate: 'clamp',
  })

  const navbarPadding = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, 30],
    extrapolate: 'clamp',
  })

  const navbarTitleAnimated = scrollYAnimatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const menu = Array(10).fill('')

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        scrollEventThrottle={1}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 20 }}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollYAnimatedValue } },
          },
        ])}>
        <View style={{ paddingHorizontal: '5%' }}>
          {menu.map(men => items)}
        </View>
      </ScrollView>

      <Animated.View
        style={[styles.animatedHeaderContainer, { height: headerHeight }]}>
        <Header />
      </Animated.View>

      <NavbarRestaurant
        navbarHeight={navbarHeight}
        navbarPadding={navbarPadding}
        navbarTitleAnimated={navbarTitleAnimated}
      />
    </View>
  )
}

RestaurantView.navigationOptions = {
  header: null,
}

export default connect(state => {
  return { authState: state.authReducer }
})(RestaurantView)
