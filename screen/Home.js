import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
  ScrollView,
  View,
} from "react-native";
function Home() {
  const [celendar, setCelendar] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [exercisesFilter, setExercisesFilter] = useState([]);
  const [colorFilterOutdoor, setColorFilterOutdoor] = useState("black");
  const [colorFilterIndoor, setColorFilterIndoor] = useState("lightgray");

  useEffect(() => {
    const getDayInWeek = (dayValue) => {
      console.log(dayValue);
      switch (dayValue) {
        case 0:
          return "Sun";
        case 1:
          return "Mon";
        case 2:
          return "Tue";
        case 3:
          return "Wed";
        case 4:
          return "Thu";
        case 5:
          return "Fri";
        case 6:
          return "Sat";
        case 7:
          return "Sun";
      }
    };
    const cuurentDay = new Date().getDay();
    const currentDate = new Date().getDate();
    const celendar = [];
    for (let i = 0; i < 7; i++) {
      if (cuurentDay + i > 7) {
        celendar.push({
          day: getDayInWeek(cuurentDay + i - 7),
          date: currentDate + i,
        });
      } else {
        celendar.push({
          day: getDayInWeek(cuurentDay + i),
          date: currentDate + i,
        });
      }
    }
    setCelendar(celendar);
  }, []);

  useEffect(() => {
    fetch("https://6563609dee04015769a71ea7.mockapi.io/exercises")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
        setExercisesFilter(data.filter((item) => item.type === "outdoor"));
      });
  }, []);

  // Item FlatList calendar
  const [selectedId, setSelectedId] = useState(new Date().getDate());
  const renderItem = ({ item }) => {
    const backgroundColor = item.date === selectedId ? "#713C5D" : "#A97D8D";
    const color = item.date === selectedId ? "white" : "black";
    return (
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          width: 80,
          height: 90,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 14,
        }}
        onPress={() => setSelectedId(item.date)}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold", color: color }}>
          {item.day}
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: color }}>
          {item.date}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 20 }}>
          Activities
        </Text>
      </View>
      <View>
        <FlatList
          data={celendar}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item) => item.date}
        />
      </View>

      <ScrollView
        style={{ paddingHorizontal: 20, flex: 1, overflow: "scroll" }}
      >
        <View
          style={{ flexDirection: "row", paddingTop: 80, paddingBottom: 15 }}
        >
          <Pressable
            onPress={() => {
              setExercisesFilter(
                exercises.filter((item) => item.type === "outdoor")
              );
              setColorFilterIndoor("lightgray");
              setColorFilterOutdoor("black");
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: colorFilterOutdoor,
              }}
            >
              Outdoor
            </Text>
          </Pressable>
          <Pressable
            style={{ marginLeft: 20 }}
            onPress={() => {
              setExercisesFilter(
                exercises.filter((item) => item.type === "indoor")
              );
              setColorFilterIndoor("black");
              setColorFilterOutdoor("lightgray");
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: colorFilterIndoor,
              }}
            >
              Indoor
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 315 }}>
          <FlatList
            data={exercisesFilter}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "#F3D9D8",
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              >
                <View style={{ justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: "#713C5D",
                      borderRadius: 40,
                      width: 120,
                      padding: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "white" }}>
                      START NOW
                    </Text>
                  </Pressable>
                </View>
                <Image source={item.image} style={{ width: 90, height: 90 }} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
