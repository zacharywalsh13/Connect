import {View, Text, SafeAreaView} from 'react-native';
import RegisterForm from '../../components/Register/Forms';

function RegisterScreen({ navigation }) {

    const loginFunction = () => {
        navigation.navigate('LoginScreen')
        console.log("Congrats! You've logged in!")
      }

    return (
        <SafeAreaView>
        <View className="items-center justify-center h-full">
            <RegisterForm loginFunction={loginFunction} />
        </View>
        </SafeAreaView>
    );
    }

export default RegisterScreen;