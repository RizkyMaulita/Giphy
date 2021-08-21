import { combineReducers } from 'redux'

import gifReducer from './gif'

export default combineReducers({
  gifs: gifReducer
})