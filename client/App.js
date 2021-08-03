import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import TodoState from './src/context/Todo/TodoState';
import AuthState from './src/context//Auth/AuthState';
import ViewALlTodo from './src/component/AllTodo/ViewAllTodo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Home from './src/component/Home';
// import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <AuthState>
      <TodoState>
        <View style={styles.container}>
          <NavigationContainer>
            <Home />
          </NavigationContainer>
        </View>
      </TodoState>
    </AuthState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
