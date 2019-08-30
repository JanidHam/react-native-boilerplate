// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'

// Imports: Redux
import rootReducer from '@redux/reducers/index'

const configureStore = () => {
  // Middleware: Redux Thunk (Async/Await)
  const middleware = [thunk]

  // Middleware: Redux Logger (For Development)
  if (!process.env.IS_PRODUCTION) {
    middleware.push(createLogger())
  }

  // Middleware: Redux Persist Config
  const persistConfig = {
    // Root?
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['authReducer'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: ['counterReducer'],
  }

  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  // Redux: Store
  let store = createStore(persistedReducer, applyMiddleware(...middleware))

  // Middleware: Redux Persist Persister
  let persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('@redux/reducers/index').default
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer))
      persistor = persistStore(store)
    })
    // This fetch the new state of the above reducers.
    // const nextRootReducer = require('@redux/reducers/index').default
    // console.log('hot 2', nextRootReducer)
    // store.replaceReducer(persistReducer(persistConfig, nextRootReducer))
    // persistor = persistStore(store)
    // module.hot.accept(() => {
    //   // This fetch the new state of the above reducers.
    //   const nextRootReducer = require('@redux/reducers/index').default
    //   console.log('hot 2', nextRootReducer)
    //   store.replaceReducer(persistReducer(persistConfig, nextRootReducer))
    // })
  }

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('@redux/reducers/index').default
  //     const persistedR = persistReducer(persistConfig, nextRootReducer)
  //     store.replaceReducer(persistedR)
  //   })
  // }

  return { store, persistor }
}

// Exports
// export { store, persistor }

export default configureStore
