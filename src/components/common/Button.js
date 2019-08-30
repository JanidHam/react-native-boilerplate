import React, { Fragment } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import stylesDefault from '@assets/styles/main'

import EllipsisLoading from 'react-native-loading-ellipsis'

const styles = StyleSheet.create({
  btnAction: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#475069',
    borderRadius: 50,
    padding: 12,
    ...stylesDefault.shadow,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  btnActionText: {
    color: '#fbfbfc',
    fontSize: 18,
  },
})

const textComponent = props => (
  <Text style={[styles.btnActionText, props.styleText]}>{props.label}</Text>
)

const loadingComponent = <EllipsisLoading />

const ButtonView = props => {
  const { loading, disabled, style } = props
  return (
    <Fragment>
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        style={[
          styles.btnAction,
          loading || disabled ? styles.btnDisabled : null,
          style,
        ]}>
        {loading ? loadingComponent : textComponent(props)}
      </TouchableOpacity>
    </Fragment>
  )
}

export default ButtonView
