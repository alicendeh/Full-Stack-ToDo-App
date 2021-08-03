// import AsyncStorage from '@react-native-community/async-storage';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_REGISTER':
    case 'USER_LOGIN':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
  }
};
