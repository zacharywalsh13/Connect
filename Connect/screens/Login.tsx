import {SafeAreaView, Text, View} from 'react-native';

import  FormTemplate from '../components/login/Forms';

import { Div, H1, H3 } from "@expo/html-elements"

const Login = () => {
  return (
    <SafeAreaView>
       <Div >
            <H1>Lets Get Connected</H1>
            <H3>Sign in to your account</H3>
            <FormTemplate />
        </Div>
    </SafeAreaView>
  );
};

export default Login;


