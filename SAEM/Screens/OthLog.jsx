import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Image, View, TextInput, Alert } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);

  const navigation = useNavigation();

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Campos vacíos", "Por favor ingresa tu usuario y contraseña");
      return;
    }

    if (username !== "usuario" || password !== "12345") {
      setLoginAttempts(loginAttempts + 1);
      if (loginAttempts >= 2) {
        Alert.alert(
          "Limite de intentos alcanzado",
          "Por favor reinicia la aplicación para volver a intentarlo"
        );
        return;
      }
      Alert.alert("Credenciales incorrectas", "Por favor verifica tu usuario y contraseña");
      return;
    }

    navigation.navigate("Miperfil");
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Zi_79vTp7TRQVuo6WryjQjbnRMej_Rfmcl5eXR9Z3YNxUODni4jYK1kabcX2afhyyic&usqp=CAU' }} style={{ borderRadius: 100, backgroundColor: 'black', width: 150, height: 150, marginBottom: 20 }} />
      <TextInput
        placeholder='Escribe tu usuario'
        style={{ marginBottom: 20, fontSize: 20 }}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder='Escribe tu contraseña'
        style={{ marginBottom: 20, fontSize: 20 }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        style={{ marginTop: 20 }}
        color={'primary'}
        title='Iniciar sesión'
        onPress={handleLogin}
      />
    </View>
  );
};

export default Login;
