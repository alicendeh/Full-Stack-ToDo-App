//import liraries
import React, { Component, useContext, useState, useEffect } from 'react';
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
import RTopTab from '../RTopTab';
// create a component
const MyComponent = ({ navigation }) => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  const [toggle, setToggle] = useState(false);
  const [rey, setrey] = useState(true);

  const onChangeUI = () => {
    setToggle(!toggle);
    setrey(!rey);
    if (toggle === true) {
      let newArray = todo.map((item, index) => {
        item.selection = false;
        return { ...item };
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <RTopTab name="Home" navigation={navigation} />
        <TouchableOpacity onPress={onChangeUI}>
          {toggle ? (
            <View>
              <Text style={styles.Edit}>Cancel</Text>
            </View>
          ) : (
            <Text style={styles.Edit}>Edit</Text>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txt1}>All Your Todo Items</Text>
        <View style={styles.input}>
          <EvilIcons name="search" size={22} color="black" />
          <TextInput placeholder="Search" />
        </View>
      </View>
      <List navigation={navigation} toggle={toggle} rey={rey} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 85,
    backgroundColor: 'white',
    paddingVertical: 45,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
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
