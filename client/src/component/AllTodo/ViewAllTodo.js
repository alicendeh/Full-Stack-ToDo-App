//import liraries
import React, { Component, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import TodoContext from '../../context/Todo/TodoContext';
import { Entypo, EvilIcons, Ionicons } from 'react-native-vector-icons';
import List from './List';

// create a component
const MyComponent = ({ navigation }) => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  useEffect(() => {
    console.log(todo);
  }, [todoContext.todo]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.main1}
        >
          <Entypo name="chevron-left" size={32} color="#4287F7" />
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.Edit}>Edit</Text>
      </View>
      <View>
        <Text style={styles.txt1}>All Your Todo Items</Text>
        <View style={styles.input}>
          <EvilIcons name="search" size={22} color="black" />
          <TextInput placeholder="Search" />
        </View>
      </View>
      <List navigation={navigation} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 85,
    backgroundColor: 'white',
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  main1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    color: '#4287F7',
  },
  Edit: {
    fontSize: 18,
    color: '#4287F7',
    paddingHorizontal: 18,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#e3e3e8',
    padding: 10,
    width: '93%',
    margin: 12,
    borderRadius: 8,
  },
  txt1: {
    margin: 12,
    fontWeight: 'bold',
    fontSize: 25,
  },
});

//make this component available to the app
export default MyComponent;
