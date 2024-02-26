import { Button } from "@rneui/themed";
import { View, StyleSheet, Text, Image } from "react-native";



FlatListPerfil = (props) => {

    const { nombre, imgpublicacion, comentarios, liked, } = props;


    let send = () => {

    }

    return (

        <View style={styles.list}>
            <View style={styles.contimgperf}>

                <Image style={styles.img} source={require('../assets/Images/prueba.jpg')} />
                <Text style={styles.txtname}>{nombre}</Text>

            </View>

            <View  style={styles.body}>
            <Text style={styles.imgpub}>{imgpublicacion}</Text>


            </View>

            <Text style={styles.txt}>{comentarios}</Text>
            <Text style={styles.txt}>{liked}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    list: {
        padding: 10,
        width: 350,
        height: 340,
        backgroundColor: '#000000',
        marginBottom: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    txt: {

        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    txtname: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        left: 70,
        marginTop:20
    },
    btn: {
        width: 90,
        height: 35,
        backgroundColor: '#083565',
        borderRadius: 5,
        right: 0,
        marginRight: 10
    },
    titlebtn: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    img: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        width: 40,
        top: 0,
        height: 40,
        borderRadius: 50,

    }, contimgperf: {
        justifyContent:'flex-start',
        top: 0,
        width: 250,
        height: 60,
   


    }


})

export default FlatListPerfil;

