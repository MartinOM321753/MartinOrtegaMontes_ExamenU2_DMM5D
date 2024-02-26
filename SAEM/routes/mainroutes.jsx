
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Splash from '../Screens/splash';
import animation from '../Screens/animation/';
import ForgetPass from '../Screens/forgetpass';
import Miperfil from '../Screens/miperfil';





const Stack = createNativeStackNavigator();

MainRoutes =()=>{
return(
    <Stack.Navigator >
    
    <Stack.Screen name = 'Animation'component={animation} options={{headerShown: false}}/>
    <Stack.Screen name = 'Splash'component={Splash}/>
    <Stack.Screen name = 'Miperfil'component={Miperfil}/>
    <Stack.Screen name = 'Login' component={Login} options={{headerShown: false}}/>
    <Stack.Screen name = 'ForgetPass' component={ForgetPass} />
    </Stack.Navigator>
    

);

}

export default MainRoutes;