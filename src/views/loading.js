import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    fontSize: 22,
  },
})

const LoadingView = () => {
  return (
    <Fragment>
      <Text style={styles.highlight}>Loading..</Text>
    </Fragment>
  )
}

LoadingView.navigationOptions = {
  title: 'Loading!',
}

export default LoadingView
