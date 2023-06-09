import { useState } from "react";

import { View, TextInput, TouchableOpacity, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';


import MatchesScreen from "../../screens/Matches/Matches";

const LoginForm = ({ navigation }) => {
    {/* User Input State */}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    {/* On Press Function */}
  const onPress = () => {
  };

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
            onPress={() => navigation.navigate('MatchesScreen')}

            >
            <Text className="text-xl ">Submit</Text>
            </TouchableOpacity>
        </View>
        {/* Register Text */}
        <Text className="mb-0 mt-2 pt-1 text-sm font-semibold">Don't have an account? <Text className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 text-green-400">Register</Text></Text>
    </View>
  );
};

export default LoginForm;
