import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import DrawerRoutes from "./drawer.routes";
import { StatusBar } from "expo-status-bar";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {/* <StackRoutes /> */}
      <TabRoutes />
      {/* <DrawerRoutes /> */}
    </NavigationContainer>
  );
};

export default Routes;
