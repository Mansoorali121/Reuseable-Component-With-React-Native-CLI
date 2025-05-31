import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CoustomBottomTab = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {state.routes.map((tab, index) => {
        const color = state.index == index ? 'blue' : 'black';
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(tab.name)}
            style={{
              alignItems: 'center',
              gap: 5,
              borderTopWidth: state.index == index ? 2 : 0,
              borderTopColor: 'blue',
              height: '100%',
              width:"20%",
              justifyContent: 'center',
              gap: 10,
              backgroundColor:state.index == index ? "#f2f2f2":"white"
            }}>
            <Image
              source={
                tab.name == 'Home'
                  ? require('../../src/components/images/home.png')
                  : tab.name == 'Search'
                  ? require('../../src/components/images/search.png')
                  : tab.name == 'Addpost'
                  ? require('../../src/components/images/plus.png')
                  : tab.name == 'Favorites'
                  ? require('../../src/components/images/heart.png')
                  : tab.name == 'Profile'
                  ? require('../../src/components/images/usericon.png')
                  : null
              }
              style={{width: 20, height: 20, tintColor: color}}
            />
            <Text style={{color: color}}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CoustomBottomTab;

const styles = StyleSheet.create({});
