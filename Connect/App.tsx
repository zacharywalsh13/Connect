import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { GluestackUIProvider } from "./components"
import { config } from "./gluestack-ui.config"

import Login from './screens/Login'

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
