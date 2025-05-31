import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Setting from './screens/Setting';
import Chats from './screens/Chats';
import Help from './screens/Help';
import CoustomDrawer from './CoustomDrawer';

const Drawernavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:"#f2f2f2",
        drawerStyle:{
          backgroundColor:"orange"
        }
      }}
      drawerContent={props => <CoustomDrawer {...props}/>}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white', // also fixed "titntColor"
                  }}
                  source={require('../../src/components/images/home.png')}
                />
              );
            },
            drawerLabel: ({size, focused}) => {
              return (
                <Text style={{color: focused ? 'blue' : 'white', fontSize: 18}}>
                  {'Home'}
                </Text>
              );
            },
          }}
        />

        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white', // also fixed "titntColor"
                  }}
                  source={require('../../src/components/images/settings.png')}
                />
              );
            },
            drawerLabel: ({size, focused}) => {
              return (
                <Text style={{color: focused ? 'blue' : 'white', fontSize: 18}}>
                  {'Setting'}
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={Chats}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white', // also fixed "titntColor"
                  }}
                  source={require('../../src/components/images/comment.png')}
                />
              );
            },
            drawerLabel: ({size, focused}) => {
              return (
                <Text style={{color: focused ? 'blue' : 'white', fontSize: 18}}>
                  {'Chats'}
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white', // also fixed "titntColor"
                  }}
                  source={require('../../src/components/images/about.png')}
                />
              );
            },
            drawerLabel: ({size, focused}) => {
              return (
                <Text style={{color: focused ? 'blue' : 'white', fontSize: 18}}>
                  {'Help'}
                </Text>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawernavigator;

const styles = StyleSheet.create({});
