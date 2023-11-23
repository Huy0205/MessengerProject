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

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Start/>
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
