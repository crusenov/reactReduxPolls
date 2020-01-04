import authedUser from './authedUsers'
import users from './users'
import polls from './polls'
import { combineReducers } from 'redux'

export default combineReducers({
  authedUser,
  users,
  polls
})