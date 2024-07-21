import { View, Text, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczMqLZ67-QDnENJcmM7ZH-S83aEocOmUT4OqTC_9ryEERkkN_0MvTqW-V3pfCLvq2aELkt7iygs8hqWPLd0zzouFnx_wSvHJbBvqDq5PBiyfNFt1j2fzpvnvQ1B1nG3SgPpGrJ74fRZ_1bpKSHX-05WSBa8HSsG75Ge4WYxFWYpc_QCYC57XHVdPoW9A6lt5oo9724yQV_Hrshe6-9H_mZ7vjeBqIsRoHtjEySQuJNlAQGNWkBNKaesSRZ-2F-CfjJUlNC0zSxzDnoib1CRwVKnGmco2iizp7aKiuHynfYqsUHjCiAzSvLx8nbPOxnex6eHPHqU6mCXXX8JXzvVznKhcMvaVTw3wO5hG_ScxLwn1CIM4Lubj8v6dLdSOP-tGXJvWBtlwOhye56eyyEkcXAoFy-VWigrBJPYVXkkNz7KBhyaYVe4j7t2-sWGCNe6_rTOIJzkBlrZ5Wi6MCJaUlIMEHf9x5UMnTq34CW2K55PtHepAi3KwmnQTbupVy0MneMVCCnHSf194vtqeJWY4JMMT83qY4drCkVkx3sE0LdSbP1u-OV31Z2Y_ftaNrI7QfBp4E-4YN6tWO_vm_3UMJrfPi8HOTZP9GPHvMrlHBE_d5P9ZdAHs3WwpM0Ah8sqIOpypCYr6Lm5wtIYSoAabrOdgZy3lPAAUmozLVwB4Xbg7jarsQsgkwFh8Ro0sGXzA3YsMbov3LLXG4ErhNYoLA_oXPTdYbQIVg3iei6SlPAX1SkKBWf7fDzWMRnPkEkr10w2Qw49tCZ9hJVIE8imYB15sYKH7EUz3D4Ik7j7Z0GpdiMn9ZieOY-olSzr4y0SMZCbPVzTI5xuTYnBgmqgN-Uv3WQLf7PEkE_4VVbHYAPtkPb9iYHcgGdAV9x1gtc9rfkslpAVc3kH0WI2KrgZTfyLKXBSCfciGCY_M91Hb5WmcTUOmp0u_dmXVhHFClQnEre_xl7OoDqIzLvl22Q1IwCEanugfOnWdSJoCL-XYza3ececUWs9ctnEXJ08RhQt2G42xxEF6nl6qxkKdq1CISGLAJRMoCYsvGU9ryA=w391-h849-s-no-gm?authuser=6' }}
      className='flex-1'
      resizeMode="cover"
    >
      <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
          <View className='mx-8 mb-28'>
            <Text className='text-[48px] text-center'>StyleSync</Text>
            <Text className='text-[16px] text-center'>Style effortlessly.</Text>
          </View>
        </View>
        <View className='absolute bottom-12 left-0 right-0 px-8'>
          <Pressable
            onPress={() => router.push('/login')}
            className='bg-[#7ab2b2] rounded-[10px] h-[48px] flex justify-center items-center mb-3'
          >
            <Text className='text-white text-[16px]'>Log in</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push('/register')}
            className='border rounded-[10px] h-[48px] flex justify-center items-center mb-2'
          >
            <Text className='text-[16px]'>Sign up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;
