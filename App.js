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
  LogBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/Start";
// import Explore from "./screens/Explore";
import ExploreScreen from "./screens/Explore";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import axios from "axios";
import BookScreen from "./screens/Book";
import CartScreen from "./screens/Cart";
import HomeScreen from "./screens/Home";
import UserScreen from "./screens/User";
const { width, height } = Dimensions.get("screen");
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  height: height * 0.04,
                  width: height * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopWidth: props.focused ? 4 : 4,
                  borderRadius: 2,
                  borderColor: props.focused ? "#0D512A" : "white",
                  top: 5,
                }}
              >
                <AntDesign
                  name="home"
                  size={24}
                  color={props.focused ? "#0D512A" : "black"}
                  style={{ marginTop: 2 }}
                />
              </View>
            );
          },
          tabBarLabel: (props) => {
            return (
              <Text
                {...props}
                style={{
                  color: props.focused ? "#0D512A" : "black",
                  fontSize: 10,
                  top: 5,
                }}
              >
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  height: height * 0.04,
                  width: height * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopWidth: props.focused ? 4 : 4,
                  borderRadius: 2,
                  borderColor: props.focused ? "#0D512A" : "white",
                  top: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="magnify"
                  color={props.focused ? "#0D512A" : "black"}
                  size={26}
                  style={{ marginTop: 2 }}
                />
              </View>
            );
          },
          tabBarLabel: (props) => {
            return (
              <Text
                {...props}
                style={{
                  color: props.focused ? "#0D512A" : "black",
                  fontSize: 10,
                  top: 5,
                }}
              >
                Explore
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  height: height * 0.04,
                  width: height * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopWidth: props.focused ? 4 : 4,
                  borderRadius: 2,
                  borderColor: props.focused ? "#0D512A" : "white",
                  top: 5,
                }}
              >
                <AntDesign
                  name="shoppingcart"
                  color={props.focused ? "#0D512A" : "black"}
                  size={26}
                  style={{ marginTop: 2 }}
                />
              </View>
            );
          },
          tabBarLabel: (props) => {
            return (
              <Text
                {...props}
                style={{
                  color: props.focused ? "#0D512A" : "black",
                  fontSize: 10,
                  top: 5,
                }}
              >
                Cart
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  height: height * 0.04,
                  width: height * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopWidth: props.focused ? 4 : 4,
                  borderRadius: 2,
                  borderColor: props.focused ? "#0D512A" : "white",
                  top: 5,
                }}
              >
                <Feather
                  name="book-open"
                  color={props.focused ? "#0D512A" : "black"}
                  size={24}
                  style={{ marginTop: 2 }}
                />
              </View>
            );
          },
          tabBarLabel: (props) => {
            return (
              <Text
                {...props}
                style={{
                  color: props.focused ? "#0D512A" : "black",
                  fontSize: 10,
                  top: 5,
                }}
              >
                Book
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  height: height * 0.04,
                  width: height * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopWidth: props.focused ? 4 : 4,
                  borderRadius: 2,
                  borderColor: props.focused ? "#0D512A" : "white",
                  top: 5,
                }}
              >
                <AntDesign
                  name="user"
                  color={props.focused ? "#0D512A" : "black"}
                  size={24}
                  style={{ marginTop: 2 }}
                />
              </View>
            );
          },
          tabBarLabel: (props) => {
            return (
              <Text
                {...props}
                style={{
                  color: props.focused ? "#0D512A" : "black",
                  fontSize: 10,
                  top: 5,
                }}
              >
                User
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screens"
          component={Screens}
          options={{
            headerTransparent: true,
            headerShown: false,
            headerTitle: (props) => {
              return (
                <Text
                  style={
                    (props.style,
                    { color: "#e9dabe", fontSize: 25, fontWeight: "bold" })
                  }
                >
                  {props.children}
                </Text>
              );
            },
            headerLeft: (props) => {
              return (
                <View style={{ marginLeft: 10 }}>
                  <AntDesign
                    {...props}
                    name="arrowleft"
                    size={40}
                    color="#e9dabe"
                  />
                </View>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
  },
  letsgetstarted: {
    fontSize: 20,
    lineHeight: 40,
  },
  type: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 30,
  },
  input: {
    backgroundColor: "#EFEFEF",
    height: height * 0.05,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    marginTop: 10,
  },
  beforeButton: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  orangePress: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    color: "orange",
  },
  signInButton: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: "#0C5A30",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 50,
    alignSelf: "center",
  },
  insideSignIn: {
    color: "white",
    fontSize: 20,
  },
});
