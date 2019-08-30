import React, { useState, useEffect } from 'react'
import {
  Animated,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'

const COLOR_UNDER_LINE = '#d6d7da'
const COLOR_TEXT_INFO = '#f5706d'
const COLOR_TEXT_MESSAGE = '#424242'
const COLOR_CB = '#5cd9ff'
const DEFAULT_MESSAGE = 'Please try again.'

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
  textInfo: {
    color: COLOR_TEXT_INFO,
    fontSize: 14,
    fontWeight: '500',
  },
  textMessage: {
    color: COLOR_TEXT_MESSAGE,
    fontSize: 14,
  },
  cbText: {
    color: COLOR_CB,
    fontSize: 14,
    fontWeight: '500',
  },
})

const Message = props => {
  const [animationState] = useState({
    height: new Animated.Value(0),
  })
  const {
    showing,
    onPress,
    styleContainer,
    textMessage = DEFAULT_MESSAGE,
  } = props

  const container = { ...style.container, ...styleContainer }

  useEffect(() => {
    Animated.timing(animationState.height, {
      toValue: showing ? 50 : 0,
      duration: 150,
    }).start()
  })

  return (
    <Animated.View style={[{ height: animationState.height }, container]}>
      <View style={{ marginRight: 10 }}>
        <Text style={style.textInfo}>Error</Text>
      </View>
      <View style={{ flex: 2, alignItems: 'flex-start' }}>
        <Text style={style.textMessage}>{textMessage}</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Text style={style.cbText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default Message
