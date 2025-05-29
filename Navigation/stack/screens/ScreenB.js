import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ScreenB = () => {
    const route = useRoute();
  return (
    <View>
      <Text>ScreenB {route.params.name}</Text>
    </View>
  )
}

export default ScreenB;

const styles = StyleSheet.create({})