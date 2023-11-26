import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Start from "./screen/Start";
import Home from "./screen/Home/Home";
import Profile from "./screen/profile";
import Setting from "./screen/setting";
import EditProfile from "./screen/editProfile";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
    </Drawer.Navigator>
  );
};

const HomeBottomTab = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileDrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/profile.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/setting.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    // < ProfileDrawer/>
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
          component={HomeBottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
