import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Accordion from "./components";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Accordion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff"
  }
});
