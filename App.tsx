import * as React from "react";

import { StyleSheet, View, Platform } from "react-native";

import Colors from "./src/styles";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";

export default function App() {
  return <Home />;
  // return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: Colors.color3,
  },
});
