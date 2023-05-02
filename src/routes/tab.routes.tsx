import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import Home from "./../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Details from "../pages/Details";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 100 },
        tabBarBackground: () => (
          <BlurView
            tint="default"
            intensity={100}
            style={{ backgroundColor: "#140434" }}
          />
        ),
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="login" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabRoutes;
