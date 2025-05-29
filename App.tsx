// // // /**
// // //  * Sample React Native App
// // //  * https://github.com/facebook/react-native
// // //  *
// // //  * @format
// // //  */

// // // import React from 'react';
// // // import type {PropsWithChildren} from 'react';
// // // import {
// // //   ScrollView,
// // //   StatusBar,
// // //   StyleSheet,
// // //   Text,
// // //   useColorScheme,
// // //   View,
// // // } from 'react-native';

// // // import {
// // //   Colors,
// // //   DebugInstructions,
// // //   Header,
// // //   LearnMoreLinks,
// // //   ReloadInstructions,
// // // } from 'react-native/Libraries/NewAppScreen';

// // // type SectionProps = PropsWithChildren<{
// // //   title: string;
// // // }>;

// // // function Section({children, title}: SectionProps): React.JSX.Element {
// // //   const isDarkMode = useColorScheme() === 'dark';
// // //   return (
// // //     <View style={styles.sectionContainer}>
// // //       <Text
// // //         style={[
// // //           styles.sectionTitle,
// // //           {
// // //             color: isDarkMode ? Colors.white : Colors.black,
// // //           },
// // //         ]}>
// // //         {title}
// // //       </Text>
// // //       <Text
// // //         style={[
// // //           styles.sectionDescription,
// // //           {
// // //             color: isDarkMode ? Colors.light : Colors.dark,
// // //           },
// // //         ]}>
// // //         {children}
// // //       </Text>
// // //     </View>
// // //   );
// // // }

// // // function App(): React.JSX.Element {
// // //   const isDarkMode = useColorScheme() === 'dark';

// // //   const backgroundStyle = {
// // //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// // //   };

// // //   /*
// // //    * To keep the template simple and small we're adding padding to prevent view
// // //    * from rendering under the System UI.
// // //    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
// // //    * https://github.com/AppAndFlow/react-native-safe-area-context
// // //    *
// // //    * You can read more about it here:
// // //    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
// // //    */
// // //   const safePadding = '5%';

// // //   return (
// // //     <View style={backgroundStyle}>
// // //       <StatusBar
// // //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// // //         backgroundColor={backgroundStyle.backgroundColor}
// // //       />
// // //       <ScrollView
// // //         style={backgroundStyle}>
// // //         <View style={{paddingRight: safePadding}}>
// // //           <Header/>
// // //         </View>
// // //         <View
// // //           style={{
// // //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// // //             paddingHorizontal: safePadding,
// // //             paddingBottom: safePadding,
// // //           }}>
// // //           <Section title="ye he Pehla Step ">
// // //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// // //             screen and then come back to see your edits.
// // //           </Section>
// // //           <Section title="Look here and see the changes ">
// // //             <ReloadInstructions />
// // //           </Section>
// // //           <Section title="Debuging Ho rahi he bhai ">
// // //             <DebugInstructions />
// // //           </Section>
// // //           <Section title="Learn More and More Now ">
// // //             Read the docs to discover what to do next:
// // //           </Section>
// // //           <LearnMoreLinks />
// // //         </View>
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   sectionContainer: {
// // //     marginTop: 32,
// // //     paddingHorizontal: 24,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 24,
// // //     fontWeight: '600',
// // //   },
// // //   sectionDescription: {
// // //     marginTop: 8,
// // //     fontSize: 18,
// // //     fontWeight: '400',
// // //   },
// // //   highlight: {
// // //     fontWeight: '700',
// // //   },
// // // });

// // // export default App;

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import "./global.css"

// // const App = () => {
// //   return (
// //     <View className='flex-1 bg-red-500 justify-center items-center '  >  <Text className='color-white' >App</Text>
// //     <Text  className='color-white'> New App </Text>
// //     </View>
// //   )
// // }

// // export default App;

// // const styles = StyleSheet.create({})

// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   return (
//     <View style={{flex: 1}}>
//       <View
//         onLayout={event => {
//           console.log('View Size ', event.nativeEvent.layout);
//         }}
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: 'yellow',
//           marginTop: 10,
//           marginLeft: 20,
//         }}>
//         <Text>Hello Bro</Text>
//       </View>
//       {/* Text Property */}

//       <Text
//         ellipsizeMode="tail"
//         style={{fontSize: 20, color: 'red', textAlign: 'center'}}
//         numberOfLines={2}>
//         {' '}
//         Hello this is Mansoor Ali sahito from the Nawabshah and he is doing
//         absolutely great During his time{' '}
//       </Text>
//       {/*TextInput  */}
//       <TextInput
//         style={{
//           width: '60%',
//           backgroundColor: 'red',
//           borderWidth: 1,
//           borderColor: 'black',
//         }}
//         multiline={true}
//         value={name}
//         placeholder="Enter Name "
//         editable={true}
//         onChangeText={text => setName(text)}
//       />
//       <TouchableOpacity activeOpacity={0.6} onPress={()=> Alert.alert("Clicked...!","Button Clicked")}
//         style={{
//           width: '60%',
//           alignItems: 'center',
//           top: 20,
//           backgroundColor: 'blue',
//           padding: 20,
//           borderRadius: 20,
//         }}>
//         <Text style={{textAlign:"center", fontSize:20, color:"#fff"}}>Submit Me </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const data = [
    "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text",
     "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text",
     "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text",
     "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text",
     "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text",
     "Very very Long text",
    "Small text ",
    "Small ",
    "Demo Text",
    "Very Small Text"
  ]
  return ( 
    <SafeAreaView style={{flex:1}} >
      <View style={{ flexWrap:"wrap", flexDirection:"row"}}>
        {data.map(item => {
          return (
            <View style={{backgroundColor:"orange",padding:10, margin:10}}>
              <Text>{item}</Text>

              </View>
          )
        })}

      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({})