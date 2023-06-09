// Text above login form 

import { View, Text } from 'react-native'
import { styled } from 'nativewind'

const LoginText = () => {
    return (
        <>
          <Text className='text-4xl font-bold	'>Time to <Text className='text-green-400'>Connect</Text></Text>
          <Text className='text-2xl font-semibold	'>Login</Text>    
        </>
      )
}

export default LoginText