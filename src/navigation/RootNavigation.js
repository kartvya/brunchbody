import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CompleteProfileWrapper from '../screens/completeProfile/CompleteProfileWrapper';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfileWrapper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
