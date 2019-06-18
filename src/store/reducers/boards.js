import board from './board'

export default (state = [], action) => {
  switch (action.type) {
    default:
      return state.map(b => board(b, action))
  }
};
