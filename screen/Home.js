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
  const [dataCelendar, setDataCelendar] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [exercisesFilter, setExercisesFilter] = useState([]);
  const [colorFilterOutdoor, setColorFilterOutdoor] = useState("black");
  const [colorFilterIndoor, setColorFilterIndoor] = useState("lightgray");
  const [selectedIdCelendar, setSelectedIdCelendar] = useState(
    new Date().getDate()
  );
  const [date, setDate] = useState(new Date());
  const [selectedIdExercises, setSelectedIdExercises] = useState([]);

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

  useEffect(() => {
    const createDate = (currentDate, i) => {
      var day, month, year;
      var numberOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();
      if (currentDate.getDate() + i > numberOfMonth) {
        day = currentDate.getDate() + i - numberOfMonth;
        if (currentDate.getMonth() + 1 > 12) {
          month = 1;
          year = currentDate.getFullYear();
        } else {
          month = currentDate.getMonth() + 1;
          year = currentDate.getFullYear();
        }
      } else {
        day = currentDate.getDate() + i;
        month = currentDate.getMonth();
        year = currentDate.getFullYear();
      }
      return new Date(year, month, day);
    };
    var celendar = [];
    for (let i = 0; i < 7; i++) {
      celendar.push({
        date: createDate(new Date(), i),
      });
    }
    setDataCelendar(celendar);
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
  const renderItemCelendar = ({ item }) => {
    const backgroundColor =
      item.date.getDate() === selectedIdCelendar ? "#713C5D" : "#A97D8D";
    const color =
      item.date.getDate() === selectedIdCelendar ? "white" : "black";
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
        onPress={() => {
          setDate(item.date);
          setSelectedIdCelendar(item.date.getDate());
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold", color: color }}>
          {getDayInWeek(item.date.getDay())}
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: color }}>
          {item.date.getDate()}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleStartNow = (item) => {
    fetch("https://6563609dee04015769a71ea7.mockapi.io/exerciseSelected", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        date:
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const renderItemExercises = ({ item }) => {
    return (
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: selectedIdExercises.includes(item.id)
                ? "lightgray"
                : "#713C5D",
              borderRadius: 40,
              width: 120,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (selectedIdExercises.includes(item.id)) return;
              if (count("outdoor") === 6) {
                alert("Đã đủ số lượng bài tập outdoor hôm nay!!!");
                return;
              }
              if (count("indoor") === 6) {
                alert("Đã đủ số lượng bài tập indoor hôm nay!!!");
                return;
              }
              setSelectedIdExercises([...selectedIdExercises, item.id]);
              handleStartNow(item);
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: selectedIdExercises.includes(item.id)
                  ? "black"
                  : "white",
              }}
            >
              {selectedIdExercises.includes(item.id)
                ? "COMPLETED"
                : "START NOW"}
            </Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={{ width: 90, height: 90 }} />
      </View>
    );
  };

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
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 20 }}>
          Activities
        </Text>
      </View>
      <View>
        <FlatList
          data={dataCelendar}
          renderItem={renderItemCelendar}
          horizontal={true}
          keyExtractor={(item) => item.date.getDate()}
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
            renderItem={renderItemExercises}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
