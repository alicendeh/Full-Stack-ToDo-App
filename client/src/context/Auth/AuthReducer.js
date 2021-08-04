import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_REGISTER':
    case 'USER_LOGIN':
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOAD_USER':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        user: action.payload,
      };

    case 'STORE_TOKEN':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        token: payload,
      };
    case 'LOGOUT':
      AsyncStorage.removeItem('token');

      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        error: null,
        token: null,
      };
  }
};
