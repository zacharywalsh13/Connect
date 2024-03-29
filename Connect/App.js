import React, { useEffect, useState } from 'react';
import { styled } from "nativewind";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/Login/login";
import MatchesScreen from "./screens/Matches/Matches";
import RegisterScreen from "./screens/Register/Register.js";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="MatchesScreen"
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
