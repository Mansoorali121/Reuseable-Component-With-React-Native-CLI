import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

const Fccomponent = () => {
  return (
    <View style={{gap: 10}}>
      <Button
        title="Submit Me "
        onPress={() => Alert.alert('Wow', 'Button is clicked')}
      />
      <Button
        title="New Button"
        onPress={() => Alert.alert('Second..!', 'Second Button is Clicked')}
      />
    </View>
  );
};

export default Fccomponent;

const styles = StyleSheet.create({});
