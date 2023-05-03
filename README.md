# Boilerplate React Native

Projeto construido com intuito de facilitar e agilizar o processo de criação de um novo app com React native. Nele faremos uso de tecnicas de [Navegação](#navegação), estilização com [Styled Components](#styled-components).

## Navegação

Neste projeto utilizamos o [React Navigation](https://reactnavigation.org/docs/getting-started/) para navegar entre telas do projeto. Nele consta as tres principais tecnicas de navegação que a biblioteca nos fornece:

- [Stack Navigation](#stack-navigation)
- [Native Stack](#native-stack-tabs)
- [Drawe Navigation](#drawer-navigation)

Dentro do arquivo [Routes](src/routes/index.tsx) temos a importação dos tres metodos de navegação que citamos acima, apenas um deles está descomentado no codigo para evitarmos erros. Para fazer uso dos métodos basta comentar o que não for necessário.

```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import DrawerRoutes from "./drawer.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
      {/* <TabRoutes /> */}
      {/* <DrawerRoutes /> */}
    </NavigationContainer>
  );
};

export default Routes;
```

### Stack Navigation

O Stack Navigator fornece uma maneira de seu aplicativo fazer a transição entre as telas, onde cada nova tela é colocada no topo de uma pilha.
Por padrão, o navegador de pilha é configurado para ter a aparência familiar do iOS e do Android: novas telas deslizam da direita no iOS, use a animação padrão do sistema operacional no Android. Mas as animações podem ser personalizadas para atender às suas necessidades.

To use this navigator, import it from `@react-navigation/stack`:

```tsx
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
```

### Native Stack (Tabs)

O Native Stack Navigator fornece uma maneira de seu aplicativo fazer a transição entre as telas em que cada nova tela é colocada em cima de uma pilha.

Este navegador usa as APIs nativas UINavigationController no iOS e Fragment no Android para que a navegação seja criada com createNativeStackNavigator se comportará exatamente da mesma forma e terá as mesmas características de desempenho que os aplicativos criados nativamente em cima dessas APIs. Ele também oferece suporte básico à Web usando react-native-web.

Para usar este navegador, importe-o de `@react-navigation/native-stack`:

```tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
```

### Drawer Navigation

O Drawer Navigator processa uma gaveta de navegação na lateral da tela que pode ser aberta e fechada por gestos. Isso envolve react-native-drawer-layout. Se você deseja usar a visualização de guias sem a integração da Navegação de reação, use a biblioteca diretamente.

Para usar este navegador de gavetas, importe-o de `@react-navigation/drawer`:

```tsx
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
```

## Styled Components

Styled-components é uma biblioteca de estilização criada para facilitar o uso de componentes estilizados no React Native. A biblioteca une o conceito de componentes com o poder dos estilos CSS, permitindo que os desenvolvedores criem componentes reutilizáveis e altamente estilizados. É fácil instalar e configurar o styled-components com React Native, basta adicionar as dependências do styled-components ao seu arquivo package.json e, em seguida, importar a biblioteca no seu arquivo de aplicativo. A partir daí, você pode começar a usar componentes estilizados no seu projeto.

Por estarmos utilizando o typescript temos que realizar a instalação dos @types para o pacote não apresentar erros de tipagem:

```
yarn add @types/styled-components-react-native
```
