import React, { useState } from 'react'
import { View } from 'react-native'

import styleDefault from '@assets/styles/main'

import Button from '@components/common/Button'
import TextInput from '@components/common/TextInput'

const LoginForm = ({ submit, loading }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <View style={styleDefault.mbBase}>
        <View style={styleDefault.mbBase}>
          <TextInput
            placeholder={'Email'}
            keyboardType={'email-address'}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styleDefault.mbBase}>
          <TextInput
            secureTextEntry
            placeholder={'Password'}
            returnKeyType={'go'}
            textContentType={'password'}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
      </View>
      <Button
        label="Sign in"
        loading={loading}
        onPress={() => submit({ email, password })}
      />
    </View>
  )
}

export default LoginForm
