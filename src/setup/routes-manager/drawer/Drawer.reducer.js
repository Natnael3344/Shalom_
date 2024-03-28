import { drawerConstants } from "./Drawer.actions"


const intialState = {
  loading: false,
  user: {},
}

export function drawer(state = intialState, action) {
  switch (action.type) {
    case drawerConstants.SET_LOADING:
      return Object.assign({}, state, {
        loading: true,
      })
    case drawerConstants.CLEAR_LOADING:
      return Object.assign({}, state, {
        loading: false,
      })
    case drawerConstants.DRAWER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      })
    case drawerConstants.DRAWER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      })
    case drawerConstants.DRAWER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      }) 
    default:
      return state
  }
}