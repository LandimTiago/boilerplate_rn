import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

const About: React.FC = () => {
  // Funções utilizadas pelo Stack Navigation
  // Use Navigation é um Hook, portanto deve ficar foda da função
  // const navigation = useNavigation();
  // const openScreen = () => {
  //   navigation.navigate("Home");
  // };

  return (
    <Container>
      <Text>"About"</Text>

      {/* Funções utilizadas pelo Stack Navigation */}
      {/* <Button title="Home" onPress={openScreen} /> */}
    </Container>
  );
};

export default About;
