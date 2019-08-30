import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'

import stylesDefault from '@assets/styles/main'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    width: '100%',
    height: '100%',
    ...stylesDefault.shadow,
  },
})

const Card = ({ children, style }) => (
  <Fragment>
    <View style={[styles.card, style]}>{children}</View>
  </Fragment>
)

export default Card
