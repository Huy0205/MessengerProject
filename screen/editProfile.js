import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/next 3.png")}
            style={{ width: 20, height: 30, left: 10 }}
          ></Image>
        </Pressable>
      </View>
      <View style={{ left: 10 }}>
        <Text style={{ fontSize: 35 }}>Edit profile</Text>
      </View>
      <View
        style={{
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 3,
          shadowOpacity: 0.5,
          width: 350,
          height: 500,
          borderRadius: 10,
          top: 20,
        }}
      >
        <View style={{ top: 20, left: 20 }}>
          <Text style={{ fontWeight: "400" }}>Name:</Text>
          <TextInput
            style={{
              borderWidth: 0.5,
              height: 50,
              width: 200,
              borderRadius: 20,
            }}
          ></TextInput>
        </View>

        <View style={{ marginTop: 30, left: 20 }}>
          <Text style={{ fontWeight: "400" }}>Email:</Text>
          <TextInput
            style={{
              borderWidth: 0.5,
              height: 50,
              width: 200,
              borderRadius: 20,
            }}
          ></TextInput>
        </View>

        <View style={{ marginTop: 10, left: 20 }}>
          <Text style={{ fontWeight: "400" }}>Phone number:</Text>
          <TextInput
            style={{
              borderWidth: 0.5,
              height: 50,
              width: 200,
              borderRadius: 20,
            }}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={{
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 5,
            shadowOpacity: 0.5,
            width: 200,
            height: 60,
            borderRadius: 20,
            left: 20,
            top: 20,
            backgroundColor: "#F3D9D8",
          }}
        >
          <Text
            style={{ textAlign: "center", padding: 20, fontWeight: "bold" }}
          >
            Apply change
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});