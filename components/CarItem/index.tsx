import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subTitle}>Starting at $69,420</Text>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"existing inventory"}
          onPress={() => {
            console.warn("Existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
