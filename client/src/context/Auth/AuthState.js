import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import React, { useReducer } from 'react';
import ApiCall from '../ApiCall';
// import GlobalHeader from './GlobalHeader';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    token: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //register user
  const registerUser = async (userData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // console.log(userData);

      const res = await ApiCall.post('/api/todo/createAcct', userData, config);

      dispatch({ type: 'USER_REGISTER', payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  //login user
  const loginUser = async (userData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // console.log(userData);

      const res = await ApiCall.post('/api/todo/login', userData, config);

      dispatch({ type: 'USER_LOGIN', payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        token: state.token,
        registerUser,
        loginUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
