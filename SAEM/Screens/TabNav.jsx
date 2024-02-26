import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pokedex from '../Pokedex';
import Settings from './animation'
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

TabNav = () => {
        <Tab.Navigator initialRouteName="Pokedex">
            <Tab.Screen 
            name="Pokedex"
            component={Pokedex}
            options={{
                headerShown: false,
                tabBarActiveTintColor: '#00aa83',
                tabBarInactiveTintColor: '#002f5d',
                tabBarLabelStyle: {fontSize: 20},
                tabBarIcon: ({size, color}) => (
                    <MaterialIcons 
                    name="catching-pokemon"
                    color={color}
                    size={size}
                    />
                )
            }}/>
            <Tab.Screen 
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
                tabBarActiveTintColor: '#00aa83',
                tabBarInactiveTintColor: '#002f5d',
                tabBarLabelStyle: {fontSize: 20},
                tabBarIcon: ({size, color}) => (
                    <MaterialIcons 
                    name="settings"
                    color={color}
                    size={size}
                    />
                )
            }}/>
        </Tab.Navigator>
}

export default TabNav;