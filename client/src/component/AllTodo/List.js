//import liraries
import React, { Component, useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import TodoContext from '../../context/Todo/TodoContext';
import {
  Entypo,
  EvilIcons,
  Ionicons,
  AntDesign,
  Foundation,
} from 'react-native-vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// create a component

const List = ({ navigation, toggle, rey }) => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  const [storeTodo, setStoreTodo] = useState(
    todo.map((aTodo, index) => ({
      key: `${index}`,
      title: aTodo.title,
      body: aTodo.body,
    }))
  );

  const [isSelected, setIsSelected] = useState(false);
  const [Store, setStore] = useState([]);

  let newArray;
  useEffect(() => {
    newArray = todo.map((item, index) => {
      item.selection = false;
      return { ...item };
    });
  }, []);

  useEffect(() => {
    setStoreTodo(newArray);
    // if (toggle === 'true') {
    //   let arr = storeTodo.map((item, index) => {
    //     item.selection = false;
    //     return { ...item };
    //   });
    //   setStoreTodo(arr);
    // }
    // console.log(toggle);
  }, [newArray]);

  const itemSelection = (title, body, data) => {
    let arr = todo.map((item, index) => {
      if (data.index === index) {
        item.selection = !item.selection;
      }
      return { ...item };
    });
    setStoreTodo(arr);
  };

  const openFullDetails = (data) => {
    console.log('full details');
  };
  const onTry = () => {
    // let checker = todo.map((item, index) => {
    //   if (item.selection === true) {
    //     console.log(item.title);
    //   }
    // });
  };
  const onDelete = () => {
    Alert.alert('Delete Approval', 'Are you sure you want to delete this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('canceled'),
      },
      {
        text: 'Yes',
        onPress: () => console.log('yes pressed'),
      },
    ]);
  };
  const onBookMark = () => {
    Alert.alert('Alert', 'Bookmark this item?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          Alert.alert('Item Bookmarked successfully');
        },
      },
    ]);
  };

  const onEdit = () => {
    navigation.navigate('CreateTodo');
  };
  const rightSwipe = ({ navigation }) => {
    return (
      <View style={styles.RSmain}>
        <TouchableOpacity onPress={onEdit} style={styles.RSmain1}>
          <Foundation name="page-edit" size={31} color="white" />
          <Text style={styles.RSmaintxt}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.RSmain2}>
          <EvilIcons name="trash" size={31} color="white" />
          <Text style={styles.RSmaintxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const leftSwipe = () => {
    return (
      <View style={styles.RSmain}>
        <TouchableOpacity onPress={onBookMark} style={styles.RSmain3}>
          <Ionicons name="ios-bookmarks-outline" size={25} color="white" />
          <Text style={styles.RSmaintxt1}>Bookmark</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (data) => {
    return (
      <View>
        {rey ? (
          <Swipeable
            renderRightActions={rightSwipe}
            renderLeftActions={leftSwipe}
          >
            <TouchableOpacity
              style={{
                backgroundColor: data.item.selection ? '#e5e5ea' : null,
              }}
              onPress={() =>
                toggle
                  ? itemSelection(data.item.title, data.item.body, data)
                  : openFullDetails(data.item.title, data.item.body, data)
              }
            >
              <View style={styles.main}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {toggle ? (
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 25,
                        backgroundColor: data.item.selection ? '#4287F7' : null,
                        marginTop: 12,
                        marginRight: 8,
                        borderWidth: data.item.selection ? null : 1,
                        borderColor: 'grey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {data.item.selection ? (
                        <AntDesign name="check" color="white" size={15} />
                      ) : null}
                    </View>
                  ) : null}
                  <Text style={styles.txt}>{data.item.title}</Text>
                </View>
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
          </Swipeable>
        ) : (
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: data.item.selection ? '#e5e5ea' : null,
              }}
              onPress={() =>
                toggle
                  ? itemSelection(data.item.title, data.item.body, data)
                  : openFullDetails(data.item.title, data.item.body, data)
              }
            >
              <View style={styles.main}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {toggle ? (
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 25,
                        backgroundColor: data.item.selection ? '#4287F7' : null,
                        marginTop: 12,
                        marginRight: 8,
                        borderWidth: data.item.selection ? null : 1,
                        borderColor: 'grey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {data.item.selection ? (
                        <AntDesign name="check" color="white" size={15} />
                      ) : null}
                    </View>
                  ) : null}
                  <Text style={styles.txt}>{data.item.title}</Text>
                </View>
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
          </View>
        )}
      </View>
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
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
      <View>
        {toggle ? (
          <View style={styles.footerView2}>
            <View>
              <Text
                style={[
                  styles.fottertxt,
                  {
                    color: todo.selection ? 'red' : 'blue',
                  },
                ]}
              >
                Bookmark
              </Text>
            </View>
            <View>
              <Text
                onPress={onTry}
                style={[
                  styles.fottertxt,
                  {
                    color: 'red',
                  },
                ]}
              >
                Trash
              </Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateTodo')}
            style={styles.footer}
          >
            <Ionicons name="ios-create-outline" size={32} color="#4287F7" />
          </TouchableOpacity>
        )}
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
  footerView2: {
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  fottertxt: {
    fontSize: 21,
    fontWeight: '600',
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
  RSmain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  RSmain1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9100',
    height: 100,
    width: 60,
  },
  RSmain2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F13737',
    height: 100,
    width: 60,
  },
  RSmain3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F13737',
    height: 100,
    width: 80,
  },
  RSmaintxt: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  RSmaintxt1: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    fontSize: 13,
  },
  bubble: {},
});

//make this component available to the app
export default List;
