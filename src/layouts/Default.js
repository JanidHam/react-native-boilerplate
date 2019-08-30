import React, { Fragment } from 'react'
import { View } from 'react-native'

import styles from '@assets/styles/main'

const Default = ({ children, style }) => (
  <Fragment>
    <View style={[styles.body, style]}>{children}</View>
  </Fragment>
)

export default Default
