import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading , setLoading ] = useState(false);
  const firebaseAuth = auth;

  const signIn = async() => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert('Sign in failed:' + error);
      setLoading(false);
    }
  }

  return (
    <View className='mx-8'>
      <Header />
      <View>
        <View>
          <Text className='text-[20px] font-bold'>Welcome Back!</Text>
          <Text>Continue with one of the following:</Text>
        </View>
        <View>
          <View>
            <Text>Email Address</Text>
            <TextInput value={email} onChangeText={(input) => setEmail(input)}/>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput value={password} onChangeText={(input) => setPassword(input)} secureTextEntry={true}/>
          </View>
          <View>
            { loading ? <ActivityIndicator size={"large"} color={"#0000ff"}/> 
            : <Button title='Login' onPress={signIn}/>}
            <Link href={'/register'} className='underline'>I don't have an account</Link>
            <View>
              <Text>or</Text>
            </View>
            <TouchableOpacity>
              <Text>Sign up with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}