import React from 'react'

import Router from '@root/Router'

// import { store, persistor } from '@redux/store/store'
import configureStore from '@redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import LoadingView from '@views/loading'

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
)

export default App
