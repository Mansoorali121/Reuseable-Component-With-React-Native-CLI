import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Addpost from './tabs/Addpost';
import Favorites from './tabs/Favorites';
import Profile from './tabs/Profile';
import CoustomBottomTab from './CoustomBottomTab';

const Bottom = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
   <Bottom.Navigator
  screenOptions={{
    tabBarStyle: {
      height: 80,
      borderTopWidth: 0,
      padding: 0,
      backgroundColor: 'white', // ✅ This adds a white background
    },
  }}
  tabBar={props =><CoustomBottomTab {...props}/>}
>

      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../src/components/images/home.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Search"
        component={Search}
        options={{headerShown: false, 

             tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../src/components/images/search.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Addpost"
        component={Addpost}
        options={{headerShown: false, 

             tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../src/components/images/plus.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false, 
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../src/components/images/heart.png')}
              />
            );
          },

        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, 
             tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../src/components/images/usericon.png')}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
