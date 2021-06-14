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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import axios from "axios";
const { width, height } = Dimensions.get("screen");

const ExploreScreen = ({ navigation }) => {
  const [data, setData] = React.useState();
  const [searchInput, SetSearchInput] = React.useState("");
  React.useEffect(() => {
    axios
      .get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
      .then((res) => setData(res.data));
  });
  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
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
              marginLeft: "29%",
            }}
          >
            Explore
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
              width: width * 0.92,
              height: height * 0.05,
              backgroundColor: "#efefef",
              alignSelf: "center",
              borderRadius: 10,
              shadowOpacity: 0.1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              marginTop: 40,
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

          {data ? (
            [...data[1].products, ...data[2].products].length !==
            [...data[1].products, ...data[2].products].filter(
              (item) =>
                item.name.substring(0, searchInput.length).toLowerCase() ===
                searchInput.toLowerCase()
            ).length ? (
              <Text
                style={{
                  fontSize: 15,
                  paddingHorizontal: 5,
                  marginTop: 10,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                {
                  [...data[1].products, ...data[2].products].filter(
                    (item) =>
                      item.name
                        .substring(0, searchInput.length)
                        .toLowerCase() === searchInput.toLowerCase()
                  ).length
                }{" "}
                Results "
                <Text style={{ color: "#467f61", fontWeight: "bold" }}>
                  {searchInput}
                </Text>
                "
              </Text>
            ) : (
              <View style={{ height: height * 0.05 }}></View>
            )
          ) : null}

          {data ? (
            <FlatList
              data={[...data[1].products, ...data[2].products].filter(
                (item) =>
                  item.name.substring(0, searchInput.length).toLowerCase() ===
                  searchInput.toLowerCase()
              )}
              keyExtractor={(_, i) => i}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: height * 0.14,
              }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width * 0.44,
                      marginHorizontal: width * 0.02,
                      height: width * 0.5,
                      marginVertical: width * 0.02,
                      shadowOpacity: 0.4,
                      backgroundColor: "white",
                      borderRadius: 10,
                      elevation: 10,
                      justifyContent: "space-around",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={{ uri: item.product_img }}
                      style={{
                        width: "90%",
                        height: "50%",
                        resizeMode: "contain",
                      }}
                    />

                    <Text
                      style={{
                        alignSelf: "flex-start",
                        marginLeft: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        width: "90%",
                        height: "25%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#d9d9d9",
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}/kg
                      </Text>

                      <TouchableOpacity
                        style={{
                          width: width * 0.12,
                          height: width * 0.12,
                          backgroundColor: "#fe7e21",
                          borderRadius: width,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign name="plus" size={27} color="white" />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <ActivityIndicator size="large" color="#e9dabe" />
          )}
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default ExploreScreen;
