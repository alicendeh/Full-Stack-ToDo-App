import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React, { useContext } from 'react';
import HomeContent from './HomeContent';
import AllTodoContent from './AllTodo/ViewAllTodo';
import CreateTodo from './AllTodo/CreateTodo';
import Bookmarks from './Bookmarkks';
import Trash from './Trash';
import Register from '../component/Auth/Register';
import Login from '../component/Auth/Login';
import AuthContext from '../context/Auth/AuthContext';

const Stack = createStackNavigator();

function MyStack() {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, token } = authContext;
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={
          Register
          // token ? HomeContent : Register
        }
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomeContent}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="AllTodoContent"
        component={AllTodoContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Trash"
        component={Trash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        mode="modal"
        headerMode="none"
        name="CreateTodo"
        component={CreateTodo}
        options={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
