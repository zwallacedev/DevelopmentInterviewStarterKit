import { merge } from '../utils'
import { RECEIVE_ME } from '../actions/Constants'

export function me(
  state={},
  action
) {
  switch(action.type) {
    case RECEIVE_ME:
      console.log("action", action)
      return merge(state, action.me)
    default:
      return state
  }
}