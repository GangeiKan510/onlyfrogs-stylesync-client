import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import useSignOut from '@/network/firebase/sign-out';
import { auth } from '@/firebaseConfig';
import { routes } from '@/utils/routes';

export default function HomeScreen() {
  const router = useRouter();
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = async () => {
    const isSignoutSuccessful = await signOut();

    if (isSignoutSuccessful) {
      router.push(routes.login);
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
