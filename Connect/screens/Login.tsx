import {SafeAreaView, Text, View} from 'react-native';

import { Heading, VStack, HStack } from '../components';

import  FormTemplate from '../components/login/Forms';

const Login = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <VStack>

                <HStack justifyContent='flex-start' style={styles.hstack}>
                <Heading size={"xl"}>Time to get Connected </Heading>
                </HStack>

                <FormTemplate />
            </VStack>
        </View>
    </SafeAreaView>
  );
};

const styles = {
    container: {
        width: '90%',
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    hstack: {
        width: '100%',
    }
}

export default Login;


