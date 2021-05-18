import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

interface IProps {
  type: string;
  content: string;
  onPress: ()=>void;
}

const StyledButton = (props:IProps) => {
  const {type, content, onPress} = props;
  const backgroundColor = type === "primary" ? "#171a20cc": "#ffffffa6";
  const textColor = type === "primary" ? "#ffffffa6" : "#171a20cc"
  return (
      <View style={styles.container}>
        <Pressable
        style={[styles.button,{backgroundColor: backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.text,{color: textColor}]}>{content}</Text>
        </Pressable>
      </View>
  );
}

export default StyledButton;
