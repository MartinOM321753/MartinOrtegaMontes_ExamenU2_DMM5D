import React from 'react';
import { StyleSheet, View, Image,Button } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

Splash = () =>{
  const navigation = useNavigation();

  return(
      <View style={styles.container}>
          <Image 
          style={styles.img} 
          source={require('../assets/favicon.png')}/>
      </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    justifyContent:'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});