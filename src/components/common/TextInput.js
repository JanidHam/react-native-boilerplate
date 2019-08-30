import React, { Fragment, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Underline from '@components/common/Underline'

const style = StyleSheet.create({
  input: {
    color: '#424242',
    fontSize: 18,
    padding: 0,
    paddingBottom: 3,
  },
})

const UNDERLINE_ANDROID = 'transparent'
const SELECTION_COLOR = '#5e74d8'

const TextInputView = props => {
  const [focused, setFocus] = useState(false)

  let inputText

  return (
    <Fragment>
      <TextInput
        {...props}
        ref={input => {
          inputText = input
        }}
        style={[style.input, props.style]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        underlineColorAndroid={UNDERLINE_ANDROID}
        selectionColor={SELECTION_COLOR}
      />
      <Underline
        style={[
          props.styleLine,
          focused ? { backgroundColor: '#5e74d8' } : null,
        ]}
      />
    </Fragment>
  )
}

export default TextInputView
