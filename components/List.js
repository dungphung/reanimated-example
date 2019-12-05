import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import Animated, { Easing } from "react-native-reanimated";
import { bInterpolate, bin, useTransition } from "react-native-redash";
import Chevron from "./Chevron";
import Item, { LIST_ITEM_HEIGHT } from "./ListItem";

const { not, interpolate } = Animated;
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  items: {
    overflow: "hidden"
  }
});

export default ({ list }) => {
  const [open, setOpen] = useState(false);

  const transition = useTransition(
    open,
    open ? 1 : 0,
    open ? 0 : 1,
    400,
    Easing.inOut(Easing.ease)
  );

  // console.log(transition);

  const height = bInterpolate(
    transition,
    0,
    list.items.length * LIST_ITEM_HEIGHT
  );
  const bottomRadius = bInterpolate(transition, 8, 0);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius
            }
          ]}
        >
          <Text style={styles.title}>Total Points</Text>
          <Chevron transition={transition} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        {list.items.map((item, key) => (
          <Item key={key} item={item} isLast={key === list.items.length - 1} />
        ))}
      </Animated.View>
    </>
  );
};
