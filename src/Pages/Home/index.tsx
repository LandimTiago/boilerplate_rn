import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native";
import { Container, Text } from "./styles";

interface FutureReleasesProps {
  id: number;
  nome: string;
  valorTotal: number;
  parcelas: number;
  vencimento: number;
  createdAt: string;
}

const Home: React.FC = () => {
  // Funções utilizadas pelo Stack Navigation
  // Use Navigation é um Hook, portanto deve ficar foda da função
  // const navigation = useNavigation();
  // const openScreen = () => {
  //   navigation.navigate("Login");
  // };

  return (
    <Container>
      <Text>"Home"</Text>

      {/* // Funções utilizadas pelo Stack Navigation */}
      {/* <Button title="Login" onPress={openScreen} /> */}
    </Container>
  );
};

export default Home;

const futureReleases: FutureReleasesProps[] = [
  {
    id: 1,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 2,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 3,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 4,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 5,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 6,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 7,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 8,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 9,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 10,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 11,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 12,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 13,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 14,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 15,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 16,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 17,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 18,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 19,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 20,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 21,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 22,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 23,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 24,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 25,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 26,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
  {
    id: 27,
    nome: "deposito união",
    valorTotal: 2000.0,
    parcelas: 10,
    vencimento: 7,
    createdAt: "2023-04-27",
  },
];
