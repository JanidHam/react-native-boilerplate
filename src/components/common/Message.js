import React, { useState, useEffect } from 'react'
import {
  Animated,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'

const COLOR_UNDER_LINE = '#d6d7da'
const COLOR_TEXT_STATUS = '#f37d9e'
const COLOR_TEXT_MESSAGE = '#565354'
const COLOR_CB = '#69cddd'
const DEFAULT_MESSAGE = 'Please try again.'
const DEFAULT_TEXT_STATUS = 'Error'
const DEFAULT_CB_TEXT_STATUS = 'Retry'
const DEFAULT_HEIGHT = 60

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: COLOR_UNDER_LINE,
    shadowOffset: { height: 0, width: 0 },
    elevation: 10,
    backgroundColor: 'white',
  },
  textStatusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  textStatusStyle: {
    color: COLOR_TEXT_STATUS,
    fontSize: 14,
    fontWeight: '500',
  },
  textMessageContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  textMessage: {
    color: COLOR_TEXT_MESSAGE,
    fontSize: 14,
    fontWeight: '500',
  },
  cbText: {
    color: COLOR_CB,
    fontSize: 14,
    fontWeight: '600',
  },
})

const Message = props => {
  const [animationState] = useState({
    height: new Animated.Value(0),
  })
  const {
    visible,
    onPress,
    textStatus = DEFAULT_TEXT_STATUS,
    textCb = DEFAULT_CB_TEXT_STATUS,
    textMessage = DEFAULT_MESSAGE,
    textStatusStyle,
    textCbStyle,
  } = props

  useEffect(() => {
    Animated.timing(animationState.height, {
      toValue: visible ? DEFAULT_HEIGHT : 0,
      duration: 150,
    }).start()
  })

  return (
    <Animated.View style={[{ height: animationState.height }, style.container]}>
      <View style={style.textStatusContainer}>
        <Text style={[style.textStatusStyle, textStatusStyle]}>
          {textStatus}
        </Text>
      </View>
      <View style={style.textMessageContainer}>
        <Text style={style.textMessage}>{textMessage}</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Text style={[style.cbText, textCbStyle]}>{textCb}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default Message
