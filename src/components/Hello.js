import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    fontSize: 22,
  },
})

const Hello = () => (
  <Fragment>
    <Text style={styles.highlight}>Hola</Text>
  </Fragment>
)

export default Hello
