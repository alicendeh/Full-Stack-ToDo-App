export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_TODO':
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
  }
};
