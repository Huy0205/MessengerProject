import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Start from "./screen/Start";
import Home from "./screen/Home";
import profile from "./screen/profile";
import setting from "./screen/setting";
import editProfile from "./screen/editProfile";

<<<<<<< HEAD
import Screen1  from './screen1';
import Screen2  from './screen2';
import Screen3  from './screen3';
import profile from './profile';
import setting from './setting';
import editProfile from './editProfile';
=======
>>>>>>> 890f87b (modified UI Login, SignUp and Start)
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Start/>
    <NavigationContainer>
<<<<<<< HEAD

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

=======
      <Stack.Navigator initalRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="Setting" component={setting} />
        <Stack.Screen name="EditProfile" component={editProfile} />
      </Stack.Navigator>
>>>>>>> 890f87b (modified UI Login, SignUp and Start)
    </NavigationContainer>
  );
}
