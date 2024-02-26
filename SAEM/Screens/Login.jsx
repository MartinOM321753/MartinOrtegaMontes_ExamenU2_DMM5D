import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,  Image,FlatList,ScrollView } from 'react-native';
import FlatListPerfil from '../Screens/FlatListPerfil';



Login = () => {
  const datos = [
    {
      uid: 1,
      imgperfil:'../assets/Images/Login.png',
      nombre: "carlos",
      imgpublicacion:'../assets/Images/Login.png',
      comentarios: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos  ",
      liked:'You liked',
    },

  ]

  const navigation = useNavigation();

  {/*navigation.replace('Miperfil');*/ }

  return (
    <View style={styles.allScreen}>

  <ScrollView>
            <View style={styles.container}>
            <View style={styles.rowscont}>
                </View>
                <View style={styles.rowscont}>
                <Image style={styles.img2}
                 source={require('../assets/Images/prueba.jpg')}/>
                <Text style={styles.texto}>10 Posteos</Text>
                <Text style={styles.texto}>10 Seguidores</Text>
                <Text style={styles.texto}>50  Seguidos</Text>
                </View>
                <View style={styles.cont2}>
                <Text style={styles.texto}>JuanRiveraMaya</Text> 
                </View>
                <View style={styles.cont2}><Text style={styles.texto}>Bscando el One pince</Text></View>

            
            <View style={styles.rowscont}>
            <Image style={styles.img2}
             source={require('../assets/Images/prueba.jpg')}/>
            <Image style={styles.img2}
             source={require('../assets/Images/prueba.jpg')}/>
            <Image style={styles.img2}
             source={require('../assets/Images/prueba.jpg')}/>
            </View>


        </View>
      
        
      <View style={styles.headers}>
      
      </View>



  <View style={styles.list}>
      <FlatList data={datos} renderItem={ ({ item }) =>
          <FlatListPerfil
          
    
          nombre = {item.nombre}
          imgpublicacion = {item.imgpublicacion}
          comentarios = {item.comentarios}
          liked = {item.liked}

          />

        } keyExtractor={item => item.uid.toString()}>

        </FlatList>
      </View>   
      </ScrollView>

    </View>

   
  );
}

export default Login;


const styles = StyleSheet.create({
  
  allScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
},

texto: {
    fontSize: 15,
    margin: 15,
    color: 'white',
},
rowscont:{
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center', 
    backgroundColor: '#000000',
    padding: 15,
    marginTop: 15
},

cont2:{
   padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: '#000000',
   
},

img2: {
    height: 80,
    width: 80,
    borderRadius: 100,
    resizeMode: 'contain'
},

list: {
  marginLeft:10
},

});
