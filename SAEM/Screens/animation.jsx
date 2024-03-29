import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Text } from '@rneui/themed';
import React, { useEffect } from 'react';



Splash = () => {
    const navigation = useNavigation();


    useEffect(() => {

        const timeout = setTimeout(() => {
            navigation.replace('Login');

        }, 5000);
        return () => {
            clearTimeout(timeout);
        }, [navigation]
    })


    return (
        <View style={styles.allScreen}>
            {/* <LottieView 
            ref={animation}
            style = {{width: 300, height: 300}}
            source={require("../assets/animations/Animation - 1708536776770.json")}
            autoPlay
            loop={true}
            />  */}

            <StatusBar barStyle={styles.status}/>
            <View style={styles.contImg}>
                <Image style={styles.img} source={require('../assets/Images/instagram.png')} ></Image>
            </View>
            <View style={[styles.line, styles.lineTopLeft, styles.spaceT]}></View>
            <View style={[styles.line, styles.lineBottomRitgh, styles.spaceB]}></View>
            <View style={[styles.line, styles.lineTopLeft]}></View>
            <View style={[styles.line, styles.lineBottomRitgh]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    allScreen: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    contImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    mainText: {
        color: '#03104A',
        fontWeight: 'bold'
    },
    status: {
        color: '#083565'
    },
    img: {
        width: 200,
        height: 200
    },
    line: {
        position: 'absolute',
        backgroundColor: '#FF3ED0',
        width: 310,
        height: 20,

    },
    lineTopLeft: {
        top: 0,
        left: 0,
        transform: [{ rotate: '-35deg' }, { translateY: -10 }, { translateX: -50 }]
    },

    lineBottomRitgh: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: '-35deg' }, { translateY: 2 }, { translateX: 38 }]
    },
    spaceT: {
        marginTop: 50
    },
    spaceB: {
        marginBottom: 50
    }, status:{
        color:'#000000'
    }


})

export default Splash;
