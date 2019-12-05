import React from "react";
import { StyleSheet, Platform } from "react-native";
import Animated from "react-native-reanimated";
import { Interactable, ReText } from "react-native-redash";

export default class Cursor extends React.PureComponent {
  render() {
    const { x, count, size } = this.props;

    const snapPoints = new Array(count)
      .fill(0)
      .map((e, i) => ({ x: i * size }));
    return (
      <Animated.View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "white",
          borderWith: "#f1f2f6",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
      />
    );
  }
}
