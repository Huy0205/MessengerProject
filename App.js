import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1  from './screen1';
import Screen2  from './screen2';
import Screen3  from './screen3';
import profile from './profile';
import setting from './setting';
import editProfile from './editProfile';
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

<Stack.Navigator initalRouteName="Home"
     screenOptions={{headerShown:false}}
>
<Stack.Screen name="Screen1" component={Screen1}/> 
<Stack.Screen name="Screen2" component={Screen2}/>
<Stack.Screen name="Screen3" component={Screen3}/>

<Stack.Screen name="Profile" component={profile}/>
<Stack.Screen name="Setting" component={setting}/>
<Stack.Screen name="EditProfile" component={editProfile}/>
</Stack.Navigator>

    </NavigationContainer>
  );
}


