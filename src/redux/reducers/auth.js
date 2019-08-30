import { LOADING, LOGIN } from '@redux/types/auth'

// Initial State
const initialState = {
  loggedIn: false,
  loading: false,
}

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Logged In
    case LOGIN: {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.payload,
      }
    }

    case LOADING: {
      return {
        // State
        ...state,
        // Redux Store
        loading: action.payload,
      }
    }
    // Default
    default: {
      return state
    }
  }
}

// Exports
export default authReducer
