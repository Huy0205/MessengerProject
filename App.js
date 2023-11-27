import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Start from "./screen/Start";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import Setting from "./screen/Setting";
import EditProfile from "./screen/EditProfile";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeBottomTab = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: "#713C5D",
        inactiveTintColor: "lightgray",
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/profile.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/setting.png")}
              style={{ width: 25, height: 25, tintColor: color }}
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
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
