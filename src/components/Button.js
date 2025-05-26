import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress, title}) => {
  return (
    <View style={{alignItems:"center", top:20}}>
      <TouchableOpacity onPress={onPress}
        style={{
          backgroundColor: '#A4B3C2',
          padding: 20,
          width: '60%',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 16, textAlign:"center"}}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
