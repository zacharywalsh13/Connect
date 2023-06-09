//Login Screen
import {View, Text, SafeAreaView} from 'react-native';

import { StatusBar } from "expo-status-bar";

import LoginText from '../../components/Login/loginText';
import LoginForm from '../../components/Login/Forms';


 const LoginScreen = () => {
  return (
    <SafeAreaView>

      <View className="items-center justify-center h-full">

        <LoginText />

        <LoginForm />

      </View>

    </SafeAreaView>
  );
};
export default LoginScreen;