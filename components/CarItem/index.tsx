import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props: any) => {
  const {name, subTitle, subTitleExtra, image} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{subTitle}{" "}
      <Text style={styles.subTitleExtra}>{subTitleExtra}</Text>
      </Text>


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
