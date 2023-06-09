//Login Screen
import {View, Text, SafeAreaView} from 'react-native';

import { StatusBar } from "expo-status-bar";

import LoginText from '../../components/Login/loginText';
import LoginForm from '../../components/Login/Forms';



 function LoginScreen({ navigation }) {

  const loginFunction = () => {
    navigation.navigate('MatchesScreen')
    console.log("Congrats! You've logged in!")
  }

  const RegisterNavigation = () => {
    navigation.navigate('RegisterScreen')
    console.log("Register Pressed")
  }

  return (
    <SafeAreaView>

      <View className="items-center justify-center h-full">

        <LoginText />

        <LoginForm loginFunction={loginFunction} RegisterNavigation={RegisterNavigation} />

      </View>

    </SafeAreaView>
  );
};
export default LoginScreen;