import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    fontSize: 22,
  },
})

const HomeView = ({ dispatch, authState }) => (
  <Fragment>
    <Text style={styles.highlight}>Login hola 2</Text>
    <Text style={styles.highlight}>{JSON.stringify(authState)}</Text>
  </Fragment>
)

HomeView.navigationOptions = {
  title: 'Home!',
}

export default connect(state => {
  return { authState: state.authReducer }
})(HomeView)
