import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";

export default function profile({ navigation }) {
  const [textI, setTextI] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(data);
  const username = global.appName;
  const email = global.appEmail;
  const phone = global.appPhone;

  const image = global.appImage;
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <View style={{ flex: 3 }}>
        <Pressable>
          <Image
            source={require("../assets/menu 1.png")}
            style={{ width: 30, height: 30, resizeMode: "stretch" }}
          ></Image>
        </Pressable>
        <View style={{ flex: 1, marginTop: 5 }}>
          <Text style={{ fontSize: 30, fontWeight: 500 }}>My Profile</Text>
        </View>
      </View>

      <Image
        source={require("../assets/NguyenTanHuy.png")}
        style={{
          width: 85,
          height: 85,
          borderRadius: 43,
          position: "absolute",
          top: 70,
          left: 145,
        }}
      />

      <View
        style={{
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          shadowOpacity: 0.2,
          borderRadius: 20,
          backgroundColor: "white",
          shadowColor: "black",
          flex: 4,
          padding: 15,
          marginBottom: 20,
          backgroundColor: "transparent",
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("EditProfile", textI);
            }}
          >
            <Image
              source={require("../assets/user (1) 1.png")}
              style={{ width: 25, height: 25 }}
            ></Image>
          </Pressable>
        </View>

        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: 500 }}>asdgkgasuid</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "rgba(128, 128, 128, 0.50)",
                fontWeight: 500,
              }}
            >
              ahsgdyuw
            </Text>
            <Pressable>
              <Image
                source={require("../assets/copy.png")}
                style={{
                  width: 16,
                  height: 16,
                  resizeMode: "stretch",
                  marginLeft: 3,
                }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/telephone 1.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>823648623</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/telephone 1.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>823648623</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          shadowOpacity: 0.2,
          borderRadius: 20,
          backgroundColor: "white",
          shadowColor: "black",
          flex: 4,
          padding: 15,
          marginBottom: 20,
        }}
      ></View>
      <View style={{ flex: 4 }}>
        <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>
          CURRENT WORKOUT PLAN
        </Text>
        <View
          style={{
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowOpacity: 0.2,
            borderRadius: 20,
            backgroundColor: "white",
            shadowColor: "black",
            padding: 15,
            flex: 1,
          }}
        ></View>
      </View>
    </View>
  );
}
