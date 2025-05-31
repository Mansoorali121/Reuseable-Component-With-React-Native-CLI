import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CoustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Image
        source={require('../../src/components/images/user.png')}
        style={{
          width: 100,
          height: 100,
          marginTop: 50,
          borderRadius: 50,
        }}
      />
      <Text style={{marginTop: 10}}>{'View Profile'}</Text>
      {/* Now the Options to Go */}
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}
        style={{width: '90%', height: 50, flexDirection: 'row', alignItems:"center"}}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../src/components/images/home.png')}
        />
        <Text style={{marginLeft: 20}}>Home</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>navigation.navigate("Setting")}
        style={{width: '90%', height: 50, flexDirection: 'row', alignItems:"center"}}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../src/components/images/settings.png')}
        />
        <Text style={{marginLeft: 20}}>Setting</Text>
      </TouchableOpacity>


       <TouchableOpacity onPress={()=>navigation.navigate("Chat")}
        style={{width: '90%', height: 50, flexDirection: 'row', alignItems:"center"}}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../src/components/images/comment.png')}
        />
        <Text style={{marginLeft: 20}}>Chat</Text>
      </TouchableOpacity>



       <TouchableOpacity onPress={()=>navigation.navigate("Help")}
        style={{width: '90%', height: 50, flexDirection: 'row', alignItems:"center"}}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../src/components/images/about.png')}
        />
        <Text style={{marginLeft: 20}}>Help Support</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CoustomDrawer;

const styles = StyleSheet.create({});
