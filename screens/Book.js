import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
const { width, height } = Dimensions.get("screen");

const Stack = createStackNavigator();

const data = [
  {
    image: require("../assets/Images/1.jpg"),
    date: "06 May 2020",
    category: "Fruit Quality",
    title: "how to make fertile soil",
    seen: 12,
    liked: 9,
  },
  {
    image: require("../assets/Images/2.jpg"),
    date: "23 May 2020",
    category: "Fruit Quality",
    title: "vitamin content in watermelon",
    seen: 122,
    liked: 129,
  },
  {
    image: require("../assets/Images/4.jpg"),
    date: "23 July 2020",
    category: "Fruit Minerals",
    title: "mineral in bananas",
    seen: 5,
    liked: 1,
  },
  {
    image: require("../assets/Images/3.jpg"),
    date: "02 April 2020",
    category: "Fruit Quality",
    title: "choose fruit quality",
    seen: 322,
    liked: 119,
  },
  {
    image: require("../assets/Images/5.jpg"),
    date: "27 October 2020",
    category: "Fruit Market",
    title: "look for suitable fruit market",
    seen: 512,
    liked: 99,
  },
];

const Book = ({ navigation }) => {
  const [searchInput, SetSearchInput] = React.useState("");
  return (
    <View behavior={"padding"} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0D512A", "#708F51", "#0A502B"]}
        style={{ flex: 1, width, height }}
      >
        <View
          style={{
            position: "absolute",
            width,
            height: "7%",
            top: "5%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Start")}>
            <AntDesign name="arrowleft" size={40} color="#e9dabe" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#e9dabe",
              fontSize: 25,
              fontWeight: "bold",
              marginLeft: "33%",
            }}
          >
            Book
          </Text>
        </View>

        <View
          style={{
            width,
            height: height * 0.87,
            backgroundColor: "white",
            alignSelf: "center",
            top: height * 0.13,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            overflow: "hidden",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: width * 0.94,
              height: height * 0.05,
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 40,
            }}
          >
            <View
              style={{
                width: width * 0.8,
                height: height * 0.05,
                backgroundColor: "#efefef",
                alignSelf: "center",
                borderRadius: 10,
                shadowOpacity: 0.1,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Ionicons name="search" size={30} color="black" />
              <TextInput
                placeholder="Search"
                style={{
                  width: "80%",
                  fontSize: 18,
                  marginLeft: 10,
                  color: "#467f61",
                  fontWeight: "bold",
                }}
                onChangeText={(text) => SetSearchInput(text)}
              />
            </View>

            <FontAwesome5 name="sliders-h" size={30} color="#2b6f4c" />
          </View>

          <View
            style={{
              width: width * 0.95,
              height: searchInput.length > 0 ? height * 0.04 : height * 0.05,
              paddingHorizontal: 5,
            }}
          >
            {data.filter(
              (item) =>
                item.category.substring(0, searchInput.length).toLowerCase() ===
                searchInput.toLowerCase()
            ).length !== data.length ? (
              <Text
                style={{ top: "50%", fontWeight: "bold", color: "#b4b4b4" }}
              >
                {" "}
                {
                  data.filter(
                    (item) =>
                      item.category
                        .substring(0, searchInput.length)
                        .toLowerCase() === searchInput.toLowerCase()
                  ).length
                }{" "}
                Results{" "}
                <Text style={{ color: "#68afab", fontWeight: "bold" }}>
                  "{searchInput}"
                </Text>
              </Text>
            ) : null}
          </View>

          <FlatList
            data={data.filter(
              (item) =>
                item.category.substring(0, searchInput.length).toLowerCase() ===
                searchInput.toLowerCase()
            )}
            keyExtractor={(_, i) => i}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: height * 0.12 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    width: width * 0.95,
                    height: height * 0.14,
                    backgroundColor: "white",
                    marginVertical: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.4,
                    shadowOffset: {
                      height: 3,
                      width: 1,
                    },
                    shadowRadius: 1,
                  }}
                >
                  <View
                    style={{
                      flex: 0.8,
                      backgroundColor: "#b4b4b4",
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        flex: 1,
                        resizeMode: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1.2,
                      justifyContent: "space-between",
                      borderRadius: 20,
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                    }}
                  >
                    <View>
                      <Text style={{ color: "#d1d1d1", fontWeight: "bold" }}>
                        {item.date}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 17,
                          marginTop: 5,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        width: "35%",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <AntDesign name="eyeo" size={15} color="#4e7c63" />
                        <Text
                          style={{
                            color: "#4e7c63",
                            fontWeight: "bold",
                            marginLeft: 4,
                          }}
                        >
                          {item.seen}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: 14,
                        }}
                      >
                        <AntDesign name="hearto" size={12} color="#4e7c63" />
                        <Text
                          style={{
                            color: "#4e7c63",
                            fontWeight: "bold",
                            marginLeft: 4,
                          }}
                        >
                          {item.liked}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Book;
