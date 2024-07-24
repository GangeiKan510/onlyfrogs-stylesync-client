import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import useSignOut from '@/network/firebase/sign-out';
import { auth } from '@/firebaseConfig';
import { routes } from '@/utils/routes';
import { getAllUsers } from '@/network/web/user';

export default function HomeScreen() {
  const router = useRouter();
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = async () => {
    const isSignoutSuccessful = await signOut();

    if (isSignoutSuccessful) {
      router.replace(routes.login);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        console.log('Users fetched successfully:', response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View className='flex-1 justify-center items-center'>
      <Pressable onPress={handleLogout}>
        <Text className='text-[#7ab2b2] text-[16px] underline mt-3'>Logout</Text>
      </Pressable>
    </View>
  );
}
