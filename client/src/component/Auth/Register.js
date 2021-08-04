//import liraries
import React, { Component, useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import { StatusBar } from 'expo-status-bar';
import AuthContext from '../../context/Auth/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const MyComponent = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { registerUser, isAuthenticated, token } = authContext;

  const [pwd, setPwd] = useState(true);
  const togglePwd = () => {
    setPwd(!pwd);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('HomePage');
    } else {
      console.log('login first please');
    }
  }, [authContext]);
  const [authData, setauthData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = authData;

  const onRegister = async () => {
    registerUser(authData);
    // await AsyncStorage.setItem('name', JSON.stringify(name));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.main}>
        <Text style={styles.txt1}>Welcome !</Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={styles.main2}
      >
        <View style={styles.fiView}>
          <Text style={styles.text12}>Name</Text>
          <View style={styles.ano}>
            <Entypo name="lock" size={26} color="#ccc" />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={name}
              onChangeText={(txt) => setauthData({ ...authData, name: txt })}
            />
          </View>
        </View>
        <View style={styles.fiView}>
          <Text style={styles.text12}>Email</Text>
          <View style={styles.ano}>
            <Entypo name="lock" size={26} color="#ccc" />
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              value={email}
              onChangeText={(txt) => setauthData({ ...authData, email: txt })}
            />
          </View>
        </View>
        <View style={styles.pwd}>
          <Text style={styles.text12}>Password</Text>
          <View style={styles.ano}>
            <Entypo name="lock" size={26} color="#ccc" />
            <View style={styles.input}>
              <TextInput
                value={password}
                onChangeText={(txt) =>
                  setauthData({ ...authData, password: txt })
                }
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
          <TouchableOpacity onPress={onRegister} style={styles.sginin}>
            <Text style={styles.sginintxt}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.sginuptxt}>Sign In</Text>
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
