import React, { Fragment } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Card from '@components/common/Card'
import LoginForm from '@components/auth/Login'

import { loginAction } from '@redux/actions/auth'
import DefaultLayout from '@layouts/Default'

const LoginView = ({ dispatch, authState, navigation }) => {
  if (authState.loggedIn) {
    // return navigation.replace('Home')
  }

  const handleSubmit = async ({ email, password }) => {
    const res = await dispatch(loginAction({ email, password }))

    if (res === true) {
      return navigation.replace('Home')
    }
  }

  return (
    <Fragment>
      <DefaultLayout>
        <View style={{ height: 200, marginTop: 50 }}>
          <Card>
            <LoginForm submit={handleSubmit} loading={authState.loading} />
          </Card>
        </View>
      </DefaultLayout>
    </Fragment>
  )
}

LoginView.navigationOptions = {
  title: 'Login',
}

export default connect(state => {
  return { authState: state.authReducer }
})(LoginView)
