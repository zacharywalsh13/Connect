import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";

const RegisterForm = (props) => {
  {
    /* User Input State */
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  {
    /* Register Function */
  }
  const onPress = () => {
    if (password !== confirmPassword) {
      Alert.alert("Registration Error", "Passwords do not match.");
      return;
    }

    fetch("http://10.0.0.13:3001/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            console.log("Server response:", data);
            throw new Error(`HTTP error! status: ${response.status}`);
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.token) {
          props.loginFunction();
        } else if (data && data.message) {
          Alert.alert(
            "Registration Failed",
            data.message
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Alert.alert(
          "Registration Error",
          "Something went wrong during registration."
        );
      });
  };


  return (
    <View className="w-full items-center">
      <View className="w-full items-center">
        {/* First Name Form */}
        <View className="w-4/5 bg-gray-200 rounded-lg h-12 mt-5 justify-center p-2">
          <TextInput
            className="h-12 text-black"
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        {/* Last Name Form */}
        <View className="w-4/5 bg-gray-200 rounded-lg h-12 m-5 justify-center p-2">
          <TextInput
            className="h-12 text-black"
            placeholder="Last Name"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        {/* Username Form */}
        <View className="w-4/5 bg-gray-200 rounded-lg h-12 m-5 justify-center p-2">
          <TextInput
            className="h-12 text-black"
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        {/* Email Form */}
        <View className="w-4/5 bg-gray-200 rounded-lg h-12 m-5 justify-center p-2">
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
        {/* Confirm Password Form */}
        <View className="w-4/5 bg-gray-200 rounded-lg h-12 m-5 justify-center p-2">
          <TextInput
            className="h-12 text-black"
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        {/* Submit Button */}
        <TouchableOpacity
          className="bg-green-400 text-white font-bold py-2 px-4 rounded w-4/5 items-center"
          onPress={onPress}
        >
          <Text className="text-xl ">Register</Text>
        </TouchableOpacity>
      </View>
      {/* Login Text */}
      <Text className="mb-0 mt-2 pt-1 text-sm font-semibold">
        Already have an account?{" "}
        <Text className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 text-green-400">
          Login
        </Text>
      </Text>
    </View>
  );
};

export default RegisterForm;
