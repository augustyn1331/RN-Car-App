import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const CarItem = (props:any)=> {
  return (
      <View style={styles.carContainer}>
        <ImageBackground source={require("../../assets/images/ModelS.jpeg")} style={styles.image}/>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
  );
}

export default CarItem;
