import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
const Stacknavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{headerShown: true, title: 'ScreenA',
           headerStyle:{
            backgroundColor:"blue"
           },
           headerTintColor:"white",
           headerTitleStyle:{
            fontSize:30
           }

          }}
          
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{headerShown: false, title: 'ScreenB'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
