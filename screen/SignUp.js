import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from "react-native";

function screen2({ navigation }) {
  const [textI, setTextI] = useState("");
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [securePass, setsecurePass] = useState(true);
  const [iconEye, setIconEye] = useState(require("../assets/Hide.png"));
  const [email, setEmail] = useState("");

  const newuser = {
    username: username,
    email: email,
    password: password,
  };
  const postuser = async () => {
    try {
      const response = await fetch(
        "https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      )
        .then((response) => response.json())
        .then(() => {
          navigation.navigate("Start", { newuser: newuser });
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      await postuser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ backgroundColor: "#713C5D", flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Image
          source={require("../assets/lol.png")}
          style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        ></Image>
      </View>
      <View
        style={{
          position: "absolute",
          top: 220,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontfamily: "Poppins",
            fontWeight: 700,
            wordWrap: "breakword",
          }}
        >
          Sign Up Now
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 25,
              width: 300,
              height: 55,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 25,
              marginBottom: 12,
            }}
          >
            <Image
              source={require("../assets/user 1.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <TextInput
              onChangeText={(text) => {
                setName(text);
              }}
              placeholder="FullName"
              style={{
                flex: 1,
                paddingHorizontal: 10,
                fontSize: 18,
                outline: "none",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 25,
              width: 300,
              height: 55,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 25,
              marginBottom: 12,
            }}
          >
            <Image
              source={require("../assets/email_561127 1.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <TextInput
              onChangeText={(text) => {
                setEmail(text);
              }}
              placeholder="Email"
              style={{
                flex: 1,
                paddingHorizontal: 10,
                fontSize: 18,
                outline: "none",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 25,
              width: 300,
              height: 55,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 25,
              marginBottom: 16,
            }}
          >
            <Image
              source={require("../assets/key 1.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <TextInput
              secureTextEntry={securePass}
              onChangeText={(text) => {
                setPass(text);
              }}
              placeholder="Password"
              style={{
                flex: 1,
                paddingHorizontal: 10,
                fontSize: 18,
                outline: "none",
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setsecurePass(!securePass);
                if (securePass) {
                  setIconEye(require("../assets/Show.png"));
                } else {
                  setIconEye(require("../assets/Hide.png"));
                }
              }}
            >
              <Image
                source={iconEye}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleRegister}
            style={{
              backgroundColor: "#F3D9D8",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              width: 300,
              height: 55,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 6,
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 14, marginRight: 5 }}>
              Already have an account?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Login", textI);
              }}
            >
              <Text style={{ color: "#1F1F1F", fontSize: 14 }}>Log In</Text>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              ───────── or ────────
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: 150,
            justifyContent: "space-between",
          }}
        >
          <Pressable>
            <Image
              source={require("../assets/google_300221 1.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("../assets/google-plus_2111450 1.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("../assets/facebook_5968764 1.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default screen2;
