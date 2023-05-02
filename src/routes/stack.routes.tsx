import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./../pages/Home";
import Login from "../pages/Login";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default StackRoutes;
