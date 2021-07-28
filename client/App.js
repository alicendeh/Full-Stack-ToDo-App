import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TodoState from './src/context/Todo/TodoState';
import ViewALlTodo from './src/component/AllTodo/ViewAllTodo';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/component/Home';
// import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <TodoState>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </SafeAreaView>
    </TodoState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
