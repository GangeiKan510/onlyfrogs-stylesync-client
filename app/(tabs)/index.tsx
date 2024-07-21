import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.replace('login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View className='flex-1 justify-center items-center'>
      <Pressable onPress={handleLogout}>
        <Text className='text-[#7ab2b2] text-[16px] underline mt-3'>Logout</Text>
      </Pressable>
    </View>
  );
}
