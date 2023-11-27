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

export default function Profile({ navigation }) {
  const [textI, setTextI] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(data);
  const username = global.appName;
  const email = global.appEmail;
  const phone = global.appPhone;
  const weight = global.appWeight;
  const image = global.appImage;
  const currentworkout = global.appCurrent;
  const latestprogress = global.appprogress;
  const measurement = global.appmeasure;
  const steps = global.appsteps;
  const heart = global.appheart;
  const instar = global.appinstar;

  const [startNowsToday, setStartNowsToday] = useState([]);
  useEffect(() => {
    var currentDate = new Date();
    var stingCurrentDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();
    fetch("https://6563609dee04015769a71ea7.mockapi.io/exerciseSelected")
      .then((response) => response.json())
      .then((data) => {
        setStartNowsToday(
          data.filter((item) => item.date === stingCurrentDate)
        );
      });
  }, []);

  console.log(startNowsToday);

  const count = (type) => {
    return startNowsToday.filter((item) => item.type === type).length;
  };

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "white" }}>
      <View style={{ flex: 3 }}>
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
        <View style={{ flex: 1, marginTop: 5 }}>
          <Text style={{ fontSize: 30, fontWeight: 500 }}>My Profile</Text>
        </View>
      </View>

      <Image
        source={global.appImage}
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
          <Text style={{ fontSize: 24, fontWeight: 500 }}>{username}</Text>
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
              {email}
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
            <Text>{instar}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/telephone 1.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>{phone}</Text>
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
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>{weight}</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Current<br></br>Weight
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              {currentworkout}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Current<br></br>Workout
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderTopRightRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              {latestprogress}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Latest Photo<br></br>Progress
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderBottomLeftRadius: 20,
              justifyContent: "center",
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>{measurement}</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Latest<br></br>Measurement
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>{steps}</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Steps
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomRightRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>{heart}</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#80808080",
                textAlign: "center",
              }}
            >
              Heart Rate
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>
          CURRENT WORKOUT PLAN
        </Text>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "white",
            shadowColor: "black",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Indoor</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#47F71B",
                  fontSize: 16,
                  color: "white",
                  borderRadius: 15,
                  fontWeight: 500,
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                }}
              >
                {count("indoor")}
                /6
              </Text>
              <Image
                source={require("../assets/next 4.png")}
                style={{ width: 20, height: 20 }}
              ></Image>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              shadowOpacity: 0.2,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Outdoor</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#14A8FC",
                  fontSize: 16,
                  color: "white",
                  borderRadius: 15,
                  fontWeight: 500,
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                }}
              >
                {count("outdoor")}
                /6
              </Text>
              <Image
                source={require("../assets/next 4.png")}
                style={{ width: 20, height: 20 }}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
