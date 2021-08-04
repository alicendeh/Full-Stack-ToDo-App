import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import React, { useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiCall from '../ApiCall';
import axios from 'axios';
// import GlobalHeader from './GlobalHeader';
import GlobalHeader from '../GlobalHeader';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    token: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //load the user
  const loadUser = async () => {
    let tokenData = await AsyncStorage.getItem('token');
    // GlobalHeader(tokenData);
    const config = {
      headers: {
        'todo-token': tokenData,
      },
    };
    try {
      const res = await ApiCall.get('/api/todo/login/loadUser', config);
      dispatch({
        type: 'LOAD_USER',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //register user
  const registerUser = async (userData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await ApiCall.post('/api/todo/createAcct', userData, config);
      loadUser();
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

      const res = await ApiCall.post('/api/todo/login', userData, config);

      dispatch({ type: 'USER_LOGIN', payload: res.data });
      loadUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  //keep token in global variable
  const storeToken = (myToken) => {
    try {
      dispatch({ type: 'STORE_TOKEN', payload: myToken });
    } catch (error) {
      console.log(error.message);
    }
  };
  //logout
  const onLogout = () => {
    try {
      dispatch({ type: 'LOGOUT' });
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
        loadUser,
        storeToken,
        onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
