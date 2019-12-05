import * as React from "react";
import { View, StyleSheet } from "react-native";
import { interpolateColors } from "react-native-redash";
import Animated from "react-native-reanimated";

const { Value, cond, eq, lessOrEq, add, round, divide } = Animated;

const white = { r: 255, g: 255, b: 255 };
const gray = { r: 128, g: 128, b: 128 };

export default ({ count, x, size }) => {
  const index = 1;
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {new Array(count).fill(0).map((e, i) => {
        return (
          <View key={i} style={{ flex: 1 }}>
            <Animated.Text
              style={{ color: "black", textAlign: "center", fontSize: 24 }}
            >{`${i + 1}`}</Animated.Text>
          </View>
        );
      })}
    </View>
  );
};
