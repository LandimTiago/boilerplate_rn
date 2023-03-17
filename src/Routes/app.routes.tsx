import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Splash from "../Pages/Splash";
import Colors from "../styles";

import { pathRoutes } from "./pathRoutes";

type AppParamsList = {
  Home: undefined;
  About: undefined;
  Splash: undefined;
};

const App = createNativeStackNavigator<AppParamsList>();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.color3 },
      }}
    >
      <App.Screen name={pathRoutes.home} component={Home} />
      <App.Screen name={pathRoutes.about} component={About} />
      <App.Screen name={pathRoutes.splash} component={Splash} />
    </App.Navigator>
  );
};

export default AppRoutes;
