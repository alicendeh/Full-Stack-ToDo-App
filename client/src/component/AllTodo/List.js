//import liraries
import React, { Component, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TodoContext from '../../context/Todo/TodoContext';
import { Entypo, EvilIcons, Ionicons } from 'react-native-vector-icons';

// create a component
const List = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 12,
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={todo}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.main}>
                  <Text style={styles.txt}>{item.title}</Text>
                  <View style={styles.main1}>
                    <Text>9:15</Text>
                    <Entypo name="chevron-right" size={25} color="#e3e3e8" />
                  </View>
                </View>
                <View style={styles.line}>
                  <Text style={styles.txt2} numberOfLines={1}>
                    {item.body}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <Ionicons name="ios-create-outline" size={32} color="#4287F7" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: 'white',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 12,
  },
  txt: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  txt2: {
    lineHeight: 24,
    color: '#797676',
    marginBottom: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  footer: {
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
  },
});

//make this component available to the app
export default List;
