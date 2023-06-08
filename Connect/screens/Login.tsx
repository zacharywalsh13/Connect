import {SafeAreaView, Text, View} from 'react-native';

import { Heading, VStack } from '../components';

import  FormTemplate from '../components/login/Forms';

const Login = () => {
  return (
    <SafeAreaView>
        <VStack>
            <Heading>Login</Heading>
            <FormTemplate />
        </VStack>
    </SafeAreaView>
  );
};

export default Login;


