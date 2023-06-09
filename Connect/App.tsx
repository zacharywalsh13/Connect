import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styled} from 'nativewind'

import Login from './screens/Login/login';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}
