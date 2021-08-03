//import liraries
import React, { Component, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import TodoContext from '../../context/Todo/TodoContext';
import { StatusBar } from 'expo-status-bar';
// create a component
const MyComponent = ({ navigation }) => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  const [data, setData] = useState({
    title: '',
    body: '',
  });
  const { title, body } = data;
  let newTitle = title.replace(/\s/g, '');
  let newBody = body.replace(/\s/g, '');

  const send = () => {
    addTodo(data);
    navigation.goBack();
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <StatusBar style={'light'} />
      <View style={styles.main}>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.main1}
      >
        <Text style={styles.txt}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.main1}>
        <Text style={styles.txt1}> New ToDo Item</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              newTitle.length > 0 && newBody.length > 0 ? 'blue' : '#ddd',
            width: 40,
            height: 40,
            borderRadius: 40,
          }}
        >
          <AntDesign name="arrowup" color="white" size={28} onPress={send} />
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.txt3}>Title :</Text>

        <TextInput
          value={title}
          style={styles.txtInput3}
          onChangeText={(txt) => {
            setData({ ...data, title: txt });
          }}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.txt3}>Body :</Text>
        <TextInput
          style={styles.txtInput3}
          value={body}
          style={styles.txtInput3}
          onChangeText={(txt) => {
            setData({ ...data, body: txt });
          }}
        />
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  line: {
    width: 50,
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 50,
  },
  txt: {
    fontSize: 18,
    color: '#4287F7',

    fontWeight: 'bold',
  },
  main1: {
    margin: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  box: {
    marginHorizontal: 21,
    marginVertical: 8,
  },
  txt3: {
    color: 'grey',
    fontSize: 18,
  },
  txtInput3: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 7,
    padding: 10,
  },
});

//make this component available to the app
export default MyComponent;
