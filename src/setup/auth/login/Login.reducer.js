import { loginConstants } from "./Login.actons";

const intialState = {
  loading: false,
  loadingSignOut : false,
  user: {},
}

export function login(state = intialState, action) {
  switch (action.type) {
    case loginConstants.SET_LOADING:
      return Object.assign({}, state, {
        loading: true,
      })
    case loginConstants.CLEAR_LOADING:
      return Object.assign({}, state, {
        loading: false,
      })
    case loginConstants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      })
    case loginConstants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      })
    case loginConstants.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      })
    case loginConstants.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loadingSignOut : true,
        user: {},
      })
    case loginConstants.USER_LOGOUT:   
      return intialState;   
    default:
      return state
  }
}