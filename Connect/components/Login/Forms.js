import { useState } from "react";

import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { useContext } from "react";

import MatchesScreen from "../../screens/Matches/Matches";

const LoginForm = props => {
    {/* User Input State */}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    {/* Login Function */}
    const onPressLogin = () => {
      fetch('http://10.0.0.13:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          props.loginFunction();
          console.log(data.result);
        } else {
          Alert.alert("Login Failed", data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert("Login Error", "Something went wrong during login.");
      });
    };

    const onPressRegister = () => {
      props.RegisterNavigation();
    }

  return (
    <View className="w-full items-center">

        <View className="w-full items-center">
            {/* Email Form */}
            <View className="w-4/5 bg-gray-200 rounded-lg h-12 mt-5 justify-center p-2">
            <TextInput
                className="h-12 text-black"
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => setEmail(text)}
            />
            </View>
            {/* Password Form */}
            <View className="w-4/5 bg-gray-200 rounded-lg h-12 m-5 justify-center p-2">
            <TextInput
                className="h-12 text-black"
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => setPassword(text)}
            />
            </View>
            {/* Submit Button */}
            <TouchableOpacity
            className="bg-green-400 text-white font-bold py-2 px-4 rounded w-4/5 items-center"
            onPress={onPressLogin}

            >
            <Text className="text-xl ">Login</Text>
            </TouchableOpacity>
        </View>
        {/* Register Text */}
        <Text className="mb-0 mt-2 pt-1 text-sm font-semibold">Don't have an account? </Text>
        <TouchableOpacity className="pt-1"
        onPress={onPressRegister}
        >
        <Text className="font-bold pt-1text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 text-green-400">
        Register
        </Text>
        </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
