export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_TODO':
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    case 'USER_REGISTER':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
  }
};
