import React, { Component } from 'react';
import { StyleSheet, Text, AppRegistry, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <Image 
        source={require ('.\assets\Pr.png')}
        />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CFC00',
    alignItems: 'center',
    justifyContent: 'center',
  },
 hello: {
 	fontSize:50,
 	color: "red",
 },
});
