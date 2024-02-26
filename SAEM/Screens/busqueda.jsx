import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


busqueda = () => {


  const navigation = useNavigation();

  {/*navigation.replace('Miperfil');*/ }

  return (
    <View style={styles.allScreen}>


      <View style={styles.contSearch}>

        <Button
          buttonStyle={styles.btnSearch}
          containerStyle={{}}

          linearGradientProps={null}
          icon={<Icon name="magnify" size={25} color="#ffffff" />}
          iconContainerStyle={{ background: "#03104A" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert("click")}
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <TextInput style={styles.search} placeholder='Buscar' />


      </View>


      <View style={styles.contImg}>

        <View style={styles.cont3img}>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
        </View>

        <View style={styles.cont3img}>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
        </View>
        <View style={styles.cont3img}>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
          <Image style={styles.img} source={require('../assets/Images/Login.png')}/>
        </View>
      </View>



    </View>

  );
}

export default busqueda;


const styles = StyleSheet.create({
  allScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  nombre: {
    color: 'black',
    fontSize: 20,
    marginTop: 20
  },
  contSearch: {
    position: 'absolute',
    marginTop: 25,
    top: 0,
    flexDirection: 'row'
  },
  search: {
    padding: 10,
    color: 'gray',
    fontSize: 15,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#575757'


  }, img: {
  
    width: 100,
    height: 100,
    borderWidth:1,
    borderColor:'#ffff'
  },
  btnSearch: {
    width: 50,
    height: 50,
    backgroundColor: '#000000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black'

  },
  contImg: {
    alignItems: 'center',
    marginTop: 10,
    width: 350,
    height: 300,

  },

  cont3img: {
    flexDirection: 'row',
    width: 300,
  }
});