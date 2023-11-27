import { useState,useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  Switch,
} from "react-native";

export default function Setting({ navigation }) {
  const [textI, setTextI] = useState("");

  const logout = () => {
    // Call the API to log out the user
    fetch("https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          // If the ok property is true, proceed to the next step
          console.log("Logged out successfully");
          // Clear the user data from the global object
          delete global.appName;
          delete global.appPass; // Delete the username
          delete global.appEmail; // Delete the email
          delete global.appPhone; // Delete the phone
          delete global.appImage; // Delete the image
          // Navigate back to the login screen
          navigation.reset({
            index: 0, // Set the current index to 0
            routes: [{ name: "Login" }], // Set the routes array to the login screen
          });
        } else {
          // If the ok property is false, show an alert message
          alert("Failed to log out: " + response.statusText);
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error); // Log the error
        alert("An error occurred: " + error.message); // Show an alert message
      });
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 3,
          paddingLeft: 20,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/next 3.png")}
            style={{ width: 20, height: 30 }}
          ></Image>
        </Pressable>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: 600, marginVertical: 10 }}>
            Settings
          </Text>
        </View>
      </View>

      <View style={{ flex: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
            paddingHorizontal: 14,
          }}
        >
          <Image
            source={require("../assets/account.png")}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 650 }}>Account</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#F0EEEE",
            boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
        <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile", textI);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Edit profile</Text>
            <Image
              source={require("../assets/next 4.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              Change password
            </Text>
            <Image
              source={require("../assets/next 4.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Privacy</Text>
            <Image
              source={require("../assets/next 4.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 4 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
            paddingHorizontal: 18,
          }}
        >
          <Image
            source={require("../assets/notification.png")}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 650 }}>Notification</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#F0EEEE",
            boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
        <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Notifications</Text>
            <Switch />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>
              App Notifications
            </Text>
            <Switch />
          </View>
        </View>
      </View>

      <View style={{ flex: 4 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
            paddingHorizontal: 18,
          }}
        >
          <Image
            source={require("../assets/category.png")}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 650 }}>More</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#F0EEEE",
            boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
        <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Laguage</Text>
            <Image
              source={require("../assets/next 4.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Country</Text>
            <Image
              source={require("../assets/next 4.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable
          onPress={() => {
            logout();
          }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/exit 1.png")}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 600 }}>LOG OUT</Text>
        </Pressable>
      </View>
    </View>
  );
}
