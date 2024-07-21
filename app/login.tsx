import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Button, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import { Link } from 'expo-router';
import { signIn } from '@/components/auth/sign-in';

export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading , setLoading ] = useState(false);

  const handleSignIn = async() => {
    setLoading(true);
    try {
      const res = await signIn(email, password);
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
      <Header />
      <View className='mx-8 mt-20'>
        <View className='mb-4'>
          <Text className='text-[20px] font-bold'>Welcome Back!</Text>
          <Text>Continue with one of the following:</Text>
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
            <Pressable className='bg-[#7ab2b2] h-[42px] rounded-[10px] px-4' onPress={handleSignIn}>
              <View className="flex-1 justify-center items-center">
                <Text className="text-white">Login</Text>
              </View>
            </Pressable>}
            <Link href={'/register'} className='text-[#7ab2b2] underline text-center mt-3'>I don't have an account</Link>
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
    </View>
  )
}