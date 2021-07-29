//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RTopTab from './RTopTab';

// create a component
const MyComponent = ({ navigation }) => {
  return (
    <View>
      <RTopTab name="Home" navigation={navigation} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MyComponent;
