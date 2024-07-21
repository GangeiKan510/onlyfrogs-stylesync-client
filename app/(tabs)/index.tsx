import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { auth } from '@/firebaseConfig';
import { useState } from 'react';

export default function HomeScreen() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const firebaseAuth = auth;
  
  return (
    <View className='flex-1 justify-center items-center'>
      <Link href={"/login"}>Login Link</Link>
    </View>
  );
}

