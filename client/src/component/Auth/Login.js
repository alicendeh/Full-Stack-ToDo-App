//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Entypo } from 'react-native-vector-icons';

// create a component
const MyComponent = ({ navigation }) => {
  const [pwd, setPwd] = useState(true);
  const togglePwd = () => {
    setPwd(!pwd);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.txt1}>Halowa My Friend !</Text>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={styles.main2}
      >
        <View style={styles.fiView}>
          <Text style={styles.text12}>Email</Text>
          <View style={styles.ano}>
            <Entypo name="lock" size={26} color="#ccc" />
            <TextInput style={styles.input} placeholder="Your Email" />
          </View>
        </View>
        <View style={styles.pwd}>
          <Text style={styles.text12}>Password</Text>
          <View style={styles.ano}>
            <Entypo name="lock" size={26} color="#ccc" />
            <View style={styles.input}>
              <TextInput
                style={styles.inputItem}
                secureTextEntry={pwd ? true : false}
                placeholder="Your Password"
              />
              <TouchableOpacity onPress={togglePwd}>
                <Entypo
                  name={pwd ? 'eye-with-line' : 'eye'}
                  size={26}
                  color="#ccc"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.sginin}>
            <Text style={styles.sginintxt}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.signup}
          >
            <Text style={styles.sginuptxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: '#4287F7',
    height: '25%',
    justifyContent: 'flex-end',
  },
  txt1: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    marginHorizontal: 15,
  },
  main2: {
    backgroundColor: 'white',
    marginTop: -15,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    flex: 1,
    padding: 25,
  },
  text12: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 8,
  },
  ano: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    margin: 6,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pwd: {
    paddingTop: 22,
  },
  inputItem: {
    flex: 1,
  },
  sginin: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287F7',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  sginintxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  sginuptxt: {
    color: '#4287F7',
    fontWeight: 'bold',
  },
  signup: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4287F7',
    borderRadius: 5,
    padding: 9,
    marginVertical: 12,
  },
});

//make this component available to the app
export default MyComponent;
