import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Button, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import { Link, useRouter } from 'expo-router';
import { signIn } from '@/components/auth/sign-in';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function Login() {

  const [user, setUser] = useState<User | null>(null);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading , setLoading ] = useState(false);

  const router = useRouter();

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
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.replace('(tabs)');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (user) {
    return null
  }

  return (
    <View className='flex-1 bg-[#ffffff]'>
      <Header />
      <View className='mx-8 mt-20'>
        <View className='mb-4'>
          <Text className='text-[20px] font-bold'>Welcome Back!</Text>
          <Text className='text-[16px]'>Continue with one of the following:</Text>
        </View>
        <View>
          <View className='mb-3'>
            <Text className='text-[16px] mb-1'>Email Address</Text>
            <TextInput
              className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'
              value={email}
              onChangeText={(input) => setEmail(input)}
            />
          </View>
          <View className='mb-3'>
            <Text className='text-[16px]'>Password</Text>
            <TextInput
              className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'
              value={password}
              onChangeText={(input) => setPassword(input)}
              secureTextEntry={true}
            />
          </View>
          <View>
            {loading ? (
              <ActivityIndicator size={"large"} color={"#7AB2B2"} />
            ) : (
              <Pressable className='bg-[#7ab2b2] h-[42px] rounded-[10px] px-4' onPress={handleSignIn}>
                <View className="flex-1 justify-center items-center">
                  <Text className="text-white text-[16px]">Login</Text>
                </View>
              </Pressable>
            )}
            <Link href={'/register'} className='text-[#7ab2b2] text-[16px] underline text-center mt-3'>
              I don't have an account
            </Link>
            <View className='my-4'>
              <Text className='text-center text-[16px]'>or</Text>
            </View>
            <Pressable className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'>
              <View className="flex-1 justify-center items-center">
                <Link href={'/welcome'} className='text-[16px]'>
                  Sign Up with Google
                </Link>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
