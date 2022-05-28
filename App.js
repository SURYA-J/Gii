import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const config = {
  animation: 'spring',
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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ()=>{
  return(
    <MyStack/>
  )
}

/*
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AccountScreen from './src/screens/AccountScreen.js';
import TrackCreateScreen from './src/screens/TrackCreateScreen';

const switchNavigator = createSwitchNavigator({
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
          <App />
        );
};

*/