import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.headerText}>Hello world</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
