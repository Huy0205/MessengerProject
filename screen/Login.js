import { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from "react-native";
function Screen1({ navigation }) {
  const [textI, setTextI] = useState("");
  const [username, setname] = useState("");
  const [password, setpass] = useState("");
  const [securePass, setsecurePass] = useState(true);
  const [iconEye, setIconEye] = useState(require("../assets/Hide.png"));
  const [newData, setNewData] = useState([]);
  const [data, setData] = useState([]);
  const email = global.appEmail;
  const phone = global.appPhone;
  const image = global.appImage;
  const fetchdata = async () => {
    fetch("https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const checkuser = (name, pass) => {
    const res = data.find(
      (item) => item.username === name && item.password === pass
    );
    return res;
  };

  const xulylogin = () => {
    if (checkuser(username, password)) {
      navigation.navigate("Start");
      global.appName = username;
      global.appPass = password;
      global.appEmail = checkuser(username, password).email;
      global.appPhone = checkuser(username, password).phone;
      global.appImage = checkuser(username, password).image;
      setNewData(checkuser(username, password));
    } else {
      alert("ko dung!");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#713C5D" }}>
      <View style={{ flex: 2 }}>
        <Image
          source={require("../assets/Vector 2.png")}
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
          Log In Now
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
              marginBottom: 15,
            }}
          >
            <Image
              source={require("../assets/user 1.png")}
              style={{
                width: 15,
                height: 15,
              }}
            ></Image>
            <TextInput
              placeholder="username"
              onChangeText={(text) => setname(text)}
              style={{
                flex: 1,
                paddingHorizontal: 10,
                fontSize: 18,
                outline: "none",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              backgroundColor: "white",
              width: 300,
              height: 55,
              borderRadius: 25,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 25,
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
              placeholder="password"
              onChangeText={(text) => {
                setpass(text);
              }}
              style={{
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 14,
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
          <View
            style={{
              alignItems: "flex-end",
              paddingVertical: 5,
              paddingRight: 20,
            }}
          >
            <Pressable>
              <Text style={{ fontSize: 14, fontWeight: 450 }}>
                Forget password?
              </Text>
            </Pressable>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F3D9D8",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              width: 300,
              height: 55,
            }}
            onPress={xulylogin}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 8,
              paddingBottom: 15,
            }}
          >
            <Text style={{ color: "white", fontSize: 14, marginRight: 5 }}>
              Don't have an account?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUp", textI);
              }}
            >
              <Text style={{ color: "#1F1F1F", fontSize: 14 }}>Sign Up</Text>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 30,
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

export default Screen1;
