import { TextInput, View, Text, TouchableOpacity, ActivityIndicator, Button, KeyboardAvoidingView, Pressable } from 'react-native';
import { useState } from 'react';
import Header from '@/components/common/Header';
import { Link } from 'expo-router';
import { signUp } from '@/components/auth/sign-up';

export default function Register() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleSignUp = async() => {
    setLoading(true);
    try {
      const res = await signUp(email, password);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert('Sign in failed:' + error);
      setLoading(false);
    }
  }

  return (
    <View className='flex-1 bg-[#ffffff]'>
      <KeyboardAvoidingView>
        <Header />
        <View className='mx-8 mt-20'>
          <View className='mb-4'>
            <Text className='text-[20px] font-bold'>Thank you for styling with us!</Text>
            <Text>Please enter your details for registration:</Text>
          </View>
          <View>
            <View className='mb-3'>
              <Text className='mb-1'>Email Address</Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={email} onChangeText={(input) => setEmail(input)}/>
            </View>
            <View className='mb-3'>
              <Text>Password</Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={password} onChangeText={(input) => setPassword(input)} secureTextEntry={true}/>
            </View>
            <View>
              { loading 
              ? <ActivityIndicator size={"large"} color={"#7AB2B2"}/> 
              : 
              <Pressable className='bg-[#7ab2b2] h-[42px] rounded-[10px] px-4' onPress={handleSignUp}>
                <View className="flex-1 justify-center items-center">
                  <Text className="text-white">Sign Up</Text>
                </View>
              </Pressable>}
              <Link href={'/login'} className='text-[#7ab2b2] underline text-center mt-3'>I already have an account</Link>
              <View className='my-4'>
                <Text className='text-center'>or</Text>
              </View>
              <Pressable className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'>
              <View className="flex-1 justify-center items-center">
                  <Text>Sign Up with Google</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}