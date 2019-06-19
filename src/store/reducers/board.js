import list from './list'

export default (state = [], action) => {
  switch (action.type) {
    default:
      return state.map(l => list(l, action))
  }
};
