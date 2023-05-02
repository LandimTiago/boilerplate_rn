import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import DrawerRoutes from "./drawer.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <TabRoutes />
      {/* <DrawerRoutes /> */}
    </NavigationContainer>
  );
};

export default Routes;
