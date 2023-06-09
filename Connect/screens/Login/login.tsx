//Login Screen
import {View, Text, SafeAreaView} from 'react-native';

import LoginText from '../../components/Login/loginText';
import LoginForm from '../../components/Login/forms';

 const login = () => {
  return (
    <SafeAreaView>

      <View className="items-center">

        <LoginText />

        <LoginForm />

      </View>

    </SafeAreaView>
  );
};
export default login;