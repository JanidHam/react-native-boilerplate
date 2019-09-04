import React from 'react'
import { Animated, Text, StyleSheet, View } from 'react-native'

import styleDefault from '@assets/styles/main'

const styles = StyleSheet.create({
  animatedNavbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 350,
    backgroundColor: 'white',
    borderBottomColor: '#d3d7de',
    ...styleDefault.shadowLg,
    paddingTop: 0,
    paddingHorizontal: '5%',
  },
  navbarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flex: 0.25,
    height: '100%',
    justifyContent: 'center',
  },
  leftIcon: {
    // backgroundColor: 'blue',
    alignItems: 'flex-start',
  },
  rightIcon: {
    // backgroundColor: 'green',
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
})

const TITLE_DEFAULT = "Mama's Tasty Pasta PastaPastaPasta"

const NavbarRestaurant = props => {
  const {
    navbarHeight,
    navbarPadding,
    navbarTitleAnimated,
    title = TITLE_DEFAULT,
  } = props

  return (
    <Animated.View
      style={[
        styles.animatedNavbarContainer,
        { height: navbarHeight, paddingTop: navbarPadding },
      ]}>
      <Animated.View
        style={[styles.navbarContainer, { opacity: navbarTitleAnimated }]}>
        <View style={[styles.iconsContainer, styles.leftIcon]}>
          <Text>Back</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={[styles.iconsContainer, styles.rightIcon]}>
          <Text>Search</Text>
        </View>
      </Animated.View>
    </Animated.View>
  )
}

export default NavbarRestaurant
