//import liraries
import React, { Component, useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
  Entypo,
} from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context/Auth/AuthContext';

// create a component

const Home = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const {
    token,
    isAuthenticated,
    loadUser,
    user,
    storeToken,
    onLogout,
  } = authContext;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const theFun = async () => {
    try {
      let data = await AsyncStorage.getItem('token');
      await storeToken(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadUser();
    theFun();
  }, []);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigation.navigate('Login');
    }
  }, [authContext]);

  //logout
  const Logout = () => {
    onLogout();
  };
  return (
    <View style={styles.container}>
      <StatusBar style={'dark'} />
      <View style={styles.view1}>
        <View style={styles.imgDiv}>
          {/* <Image
            style={styles.img}
            source={require('../component/assets/logo.png')}
          /> */}
          <Text>Logo</Text>
        </View>
        <Text>Personalize your Oragizational Experience</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.view2}>
        <View style={styles.view2R1}>
          <View style={styles.view2R1ImgDiv}>
            <Image
              style={styles.view2Img}
              source={{
                uri:
                  'http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico',
              }}
            />
            <View style={styles.view2R1Txt}>
              <Text style={styles.view2R1TxtM}> {user && user.name} </Text>
            </View>
          </View>
        </View>
        <View style={styles.view2R2}>
          <Icon name="chevron-right" size={31} color="#BDBDBD" />
        </View>
      </TouchableOpacity>
      <View style={styles.view3}>
        <TouchableOpacity
          style={styles.view3R1}
          onPress={() => {
            navigation.navigate('AllTodoContent');
          }}
        >
          <View style={styles.view3R1Icon1}>
            <MaterialCommunityIcons
              name="content-save-all"
              size={21}
              color="white"
            />
          </View>
          <View style={styles.view3R1Cont2}>
            <Text style={styles.view3R1Cont2txt}>All ToDo</Text>
            <View style={styles.view3R1Cont2a}>
              <Text>15</Text>
              <Icon name="chevron-right" size={31} color="#BDBDBD" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view3R1}
          onPress={() => navigation.navigate('Bookmarks')}
        >
          <View
            style={[
              styles.view3R1Icon1,
              {
                backgroundColor: '#9A3535',
              },
            ]}
          >
            <Entypo name="bookmarks" size={21} color="white" />
          </View>
          <View style={styles.view3R1Cont2}>
            <Text style={styles.view3R1Cont2txt}>Bookmarks</Text>
            <View style={styles.view3R1Cont2a}>
              <Text>0</Text>
              <Icon name="chevron-right" size={31} color="#BDBDBD" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view3R1}
          onPress={() => navigation.navigate('Trash')}
        >
          <View style={styles.view3R1Icon12}>
            <EvilIcons name="trash" size={27} color="white" />
          </View>
          <View style={styles.view3R1Cont21}>
            <Text style={styles.view3R1Cont2txt}>Trash</Text>
            <View style={styles.view3R1Cont2a}>
              <Text>2</Text>
              <Icon name="chevron-right" size={31} color="#BDBDBD" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <View style={styles.view3R1}>
          <View style={styles.theme}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={27}
              color="white"
            />
          </View>
          <View style={styles.view3R1Cont2}>
            <Text style={styles.view3R1Cont2txt}>Theme</Text>
            <View style={styles.view3R1Cont2a}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.view3R1} onPress={Logout}>
          <View style={styles.logout}>
            <AntDesign name="logout" size={21} color="white" />
          </View>
          <View style={styles.view3R1Cont21}>
            <Text style={styles.view3R1Cont2txt}>Logout</Text>
            <View style={styles.view3R1Cont2a}>
              <Icon name="chevron-right" size={31} color="#BDBDBD" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    marginVertical: 45,
  },
  view1: {
    height: 120,
    // backgroundColor: 'blue',
    borderBottomWidth: 1,
    paddingHorizontal: 17,
    borderBottomColor: '#C4C4C4',
  },
  imgDiv: {
    width: '100%',
    height: 55,
  },
  img: {
    width: '100%',
  },
  view2: {
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    alignItems: 'center',
  },
  view2R1: {
    flexDirection: 'row',
  },
  view2R1ImgDiv: {
    width: 60,
    flexDirection: 'row',
    height: 60,
  },
  view2Img: {
    width: '100%',
    height: '100%',
  },
  view2R1Txt: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    paddingHorizontal: 12,
  },
  view2R1TxtM: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  view3: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    paddingLeft: 25,
    marginTop: 25,
  },
  view3R1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3R1Cont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    marginLeft: 9,
  },
  view3R1Cont21: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginLeft: 9,
  },

  view3R1Cont2a: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  view3R1Icon1: {
    width: 37,
    backgroundColor: '#F19A37',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  view3R1Icon12: {
    width: 37,
    backgroundColor: '#F13737',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  logout: {
    width: 37,
    backgroundColor: '#374AF1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  theme: {
    width: 37,
    backgroundColor: '#AA37F1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  view3R1Icon27: {
    width: 37,
    backgroundColor: '#AA37F1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  view3R1Icon28: {
    width: 37,
    backgroundColor: '#F13737',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
  },
  view3R1Cont2txt: {
    fontSize: 18,
  },
});

//make this component available to the app
export default Home;
