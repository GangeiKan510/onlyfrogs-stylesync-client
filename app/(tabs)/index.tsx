import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import useSignOut from '@/network/firebase/sign-out';
import { auth } from '@/firebaseConfig';
import { routes } from '@/utils/routes';
import { getMe } from '@/network/web/user';
import { onAuthStateChanged } from 'firebase/auth';

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
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUsers = async () => {
          try {
            const response = await getMe({email: user.email as string});
            console.log('User fetched successfully:', response);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };

        fetchUsers();
      } else {
        router.replace('/login')
      }
    });

    return () => checkAuth();

  }, []);

  return (
    <View className='flex-1 justify-center items-center'>
      <Pressable onPress={handleLogout}>
        <Text className='text-[#7ab2b2] text-[16px] underline mt-3'>Logout</Text>
      </Pressable>
    </View>
  );
}
