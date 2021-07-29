//import liraries
import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
// create a component
const MyComponent = ({ navigation, name }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.main1}
      >
        <Entypo name="chevron-left" size={32} color="#4287F7" />
        <Text style={styles.txt}> {name} </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: '#4287F7',
  },
  main1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyComponent;
