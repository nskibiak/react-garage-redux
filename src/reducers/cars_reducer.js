import { FETCH_CARS } from '../actions';
import { POST_CAR } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    default:
      return state
    case FETCH_CARS:
      return action.payload
    case POST_CAR:
      return [ action.payload ]
  }
}
