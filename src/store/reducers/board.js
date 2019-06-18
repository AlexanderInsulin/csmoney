import { types } from '../actions';
import task from './task'

const initialState = {
  id: 0,
  name: '',
  tasks: []
}

export default (state = initialState, action) => {
  if (action.boardId && action.boardId !== state.id) return state  

  switch (action.type) {
    case types.ADD_TASK:
        return { ...state, tasks: [...state.tasks, task(undefined, action)] }
    case types.REMOVE_TASK:
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.taskId) }
    default:
      return {...state, tasks: state.tasks.map(t => task(t, action))}
  }
};
