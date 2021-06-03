import React, { useCallback } from "react";
import { View, FlatList, Dimensions, ListRenderItem } from "react-native";
import styles from "./styles";
import cars from "./cars";
import { ICar } from "./cars";
import CarItem from "../CarItem";

const CarsList = () => {
  const renderItem: ListRenderItem<ICar> = useCallback(
    ({ item }) => <CarItem car={item} />,
    []
  );
  const keyExtractor = useCallback((item: ICar) => item.id.toString(), []);
  const height = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <FlatList<ICar>
        data={cars}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={height}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default CarsList;
