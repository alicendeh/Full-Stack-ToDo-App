import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import TodoState from './src/context/Todo/TodoState';
import ViewALlTodo from './src/component/AllTodo/ViewAllTodo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Home from './src/component/Home';
// import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <TodoState>
      <View style={styles.container}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </View>
    </TodoState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
