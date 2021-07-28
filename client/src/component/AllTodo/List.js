//import liraries
import React, { Component, useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import TodoContext from '../../context/Todo/TodoContext';
import { Entypo, EvilIcons, Ionicons } from 'react-native-vector-icons';

// create a component

const List = ({ navigation }) => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  const [storeTodo, setStoreTodo] = useState(
    todo.map((aTodo, index) => ({
      key: `${index}`,
      title: aTodo.title,
      body: aTodo.body,
    }))
  );
  const renderItem = (data, rowMap) => {
    return (
      <TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.txt}>{data.item.title}</Text>
          <View style={styles.main1}>
            <Text>9:15</Text>
            <Entypo name="chevron-right" size={25} color="#e3e3e8" />
          </View>
        </View>
        <View style={styles.line}>
          <Text style={styles.txt2} numberOfLines={1}>
            {data.item.body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const HiddenItemWithActions = () => {
    return (
      <View>
        <Text>left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
        >
          <Text>close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
        >
          <Text>delete </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const closeRow = () => {};
  const deleteRow = () => {};

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 12,
      }}
    >
      <View style={styles.container}>
        <SwipeListView
          data={storeTodo}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTodo')}
        style={styles.footer}
      >
        <Ionicons name="ios-create-outline" size={32} color="#4287F7" />
      </TouchableOpacity>
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
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

//make this component available to the app
export default List;
