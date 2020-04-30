import { VIEW_CAR } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    default:
      return state
    case VIEW_CAR:
      return action.payload
  }
}
