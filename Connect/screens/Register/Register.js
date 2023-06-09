import {View, Text, SafeAreaView} from 'react-native';
import RegisterForm from '../../components/Register/Forms';

const RegisterScreen = () => {
    return (
        <SafeAreaView>
        <View className="items-center justify-center h-full">
            <RegisterForm />
        </View>
        </SafeAreaView>
    );
    }

export default RegisterScreen;