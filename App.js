import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CamScreen from "./src/screens/CamScreen";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import ResultScreen from "./src/screens/ResultScreen";

const Stack = createNativeStackNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const MyStack = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  let fontSize = 18;
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "GII",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontSize,
                fontFamily: "Pacifico_400Regular",
              },
            }}
          />
          <Stack.Screen
            name="Camera"
            component={CamScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontSize,
                fontFamily: "Pacifico_400Regular",
              },
            }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
              title: "GII",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: "Pacifico_400Regular",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default () => {
  return <MyStack />;
};