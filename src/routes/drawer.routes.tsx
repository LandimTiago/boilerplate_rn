import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Details from "../pages/Details";
import About from "../pages/About";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          drawerLabel: "About",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          drawerLabel: "Details",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="more" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          drawerLabel: "Login",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="login" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default DrawerRoutes;
