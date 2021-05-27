import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name="Model 3" subTitle="Order Online For" subTitleExtra={"Touchless Delivery"} image = {require("./assets/images/Model3.jpeg")} />
     {/* <CarItem name="Model S" subTitle="Starting at $69,420" image = {require("./assets/images/ModelS.jpeg")} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
