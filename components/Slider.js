import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Cursor from "./Cursor";

const { width: totalWidth } = Dimensions.get("window");

const { Value } = Animated;

const count = 5;
const width = totalWidth / count;
const height = width;

export default () => {
  const x = new Value(0);

  return (
    <View style={styles.container}>
      <Cursor x={x} count={count} size={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: "#f1f2f6"
  }
});
