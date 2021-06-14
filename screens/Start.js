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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const StartScreen = ({ navigation }) => {
  const pressUp = new Animated.Value(height * 0.68);
  const viewHeightAnimation = new Animated.Value(height * 0.38);
  const viewWidthAnimation = new Animated.Value(width * 0.05);
  const textSizeAnimationWelcome = new Animated.Value(80);
  const textSizeAnimationInFruitShop = new Animated.Value(30);
  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0D512A", "#708F51", "#0A502B"]}
        style={{ flex: 1 }}
      >
        <Animated.View
          style={{
            width,
            height: "22%",
            justifyContent: "center",
            padding: 20,
            transform: [
              {
                translateY: viewHeightAnimation,
              },
              {
                translateX: viewWidthAnimation,
              },
            ],
          }}
        >
          <Animated.Text
            style={{
              color: "white",
              fontSize: textSizeAnimationWelcome,
              fontWeight: "bold",
            }}
          >
            Welcome
          </Animated.Text>
          <Animated.Text
            style={{ color: "white", fontSize: textSizeAnimationInFruitShop }}
          >
            In FruitShopApp
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            width,
            height: "78%",
            backgroundColor: "white",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            transform: [{ translateY: pressUp }],
          }}
        >
          <TouchableOpacity
            style={{
              width: width * 0.2,
              height: "1.5%",
              backgroundColor: "#0D512A",
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 15,
            }}
            onPress={() => {
              if (pressUp._value > 0) {
                Animated.timing(pressUp, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start(() => {
                  pressUp.setValue(0);
                });
              } else if (pressUp._value === 0) {
                Animated.timing(pressUp, {
                  toValue: height * 0.68,
                  useNativeDriver: true,
                }).start(() => {
                  pressUp.setValue(height * 0.68);
                });
              }

              if (viewHeightAnimation._value > 0) {
                Animated.timing(viewHeightAnimation, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start(() => {
                  viewHeightAnimation.setValue(0);

                  Animated.timing(viewWidthAnimation, {
                    toValue: 0,
                    useNativeDriver: true,
                  }).start(() => {
                    viewWidthAnimation.setValue(0);
                  });

                  Animated.timing(textSizeAnimationWelcome, {
                    toValue: 40,
                    useNativeDriver: false,
                  }).start(() => {
                    textSizeAnimationWelcome.setValue(40);
                  });

                  Animated.timing(textSizeAnimationInFruitShop, {
                    toValue: 16,
                    useNativeDriver: false,
                  }).start(() => {
                    textSizeAnimationInFruitShop.setValue(16);
                  });
                });
              } else {
                Animated.timing(viewHeightAnimation, {
                  toValue: height * 0.38,
                  useNativeDriver: true,
                }).start(() => {
                  viewHeightAnimation.setValue(height * 0.38);

                  Animated.timing(textSizeAnimationWelcome, {
                    toValue: 80,
                    useNativeDriver: false,
                  }).start(() => {
                    textSizeAnimationWelcome.setValue(80);
                  });

                  Animated.timing(textSizeAnimationInFruitShop, {
                    toValue: 30,
                    useNativeDriver: false,
                  }).start(() => {
                    textSizeAnimationInFruitShop.setValue(30);
                  });

                  Animated.timing(viewWidthAnimation, {
                    toValue: width * 0.05,
                    useNativeDriver: true,
                  }).start(() => {
                    viewWidthAnimation.setValue(width * 0.05);
                  });
                });
              }

              // if (viewWidthAnimation._value > 0) {

              // } else {

              // }
            }}
          />
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Hey,</Text>
            <Text style={styles.letsgetstarted}>Let's get started.</Text>
            <View>
              <Text style={{ marginTop: 40, fontSize: 15, fontWeight: "bold" }}>
                Username
              </Text>
              <TextInput style={styles.input} placeholder="your username" />
            </View>

            <View>
              <Text style={styles.type}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="your password"
                secureTextEntry
              />

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.beforeButton}>Forgot your Password ? </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.orangePress}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => navigation.navigate("Screens")}
            >
              <Text style={styles.insideSignIn}>Sign in</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text style={styles.beforeButton}>Don't have an account ? </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.orangePress}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

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

export default StartScreen;
