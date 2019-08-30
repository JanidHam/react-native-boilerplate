import * as React from 'react'
import { StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
  underLine: {
    height: 1,
    backgroundColor: '#d6d7da',
    width: '100%',
  },
})

const UnderLine = props => <View style={[style.underLine, props.style]} />

export default UnderLine
