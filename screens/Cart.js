import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const CartScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0D512A", "#708F51", "#0A502B"]}
        style={{
          flex: 1,
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
        }}
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
            Cart
          </Text>
        </View>

        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
          Cart
        </Text>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default CartScreen;
