import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

function Home() {
  var getDayInWeek = (dayValue) => {
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
    }
  };
  var cuurentDay = new Date().getDay();
  var currentDate = new Date().getDate();
  const celendar = [];
  for (let i = 0; i < 4; i++) {
    celendar.push({
      day: getDayInWeek(cuurentDay + i),
      date: currentDate + i,
    });
  }

  var [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("https://6543683301b5e279de204e68.mockapi.io/YogaApp_exercises")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  const [exercisesFilter, setExercisesFilter] = useState([]);
  useEffect(() => {
    setExercisesFilter(exercises.filter((item) => item.type === "outdoor"));
  }, [exercises]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 20 }}>
          Activities
        </Text>
      </View>
      <FlatList
        data={celendar}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#713C5D",
              width: 80,
              height: 90,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 14,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              {item.day}
            </Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              {item.date}
            </Text>
          </View>
        )}
        horizontal={true}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{ flexDirection: "row", paddingTop: 80, paddingBottom: 15 }}
        >
          <Pressable
            onPress={() =>{
              console.log("press")
              setExercisesFilter(exercises.filter((item) => item.type === "outdoor"))
            }}
          >
            <Text
              style={{ fontSize: 28, fontWeight: "bold", color: "#5E5E5E" }}
            >
              Outdoor
            </Text>
          </Pressable>
          <Pressable
            style={{ marginLeft: 20 }}
            onPress={() =>
              setExercisesFilter(exercises.filter((item) => item.type === "outdoor"))
            }
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>Indoor</Text>
          </Pressable>
        </View>
        <View>
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
