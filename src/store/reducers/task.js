import { types } from '../actions';
import { v4 } from 'uuid';

const initialState = {
  id: 0,
  name: '',
  description: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
        return {
            id: action.taskId || v4(),
            name: action.taskName,
            description: action.taskDescription,
        }
    default:
      return state
  }
};
