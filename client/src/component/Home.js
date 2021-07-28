import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import HomeContent from './HomeContent';
import AllTodoContent from './AllTodo/ViewAllTodo';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllTodoContent"
        component={AllTodoContent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
