import { TextInput, View, Text, Pressable, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import Header from '@/components/common/Header';
import { Link, useRouter } from 'expo-router';
import { signUp } from '@/components/auth/sign-up';
import { createUser } from '@/network/web/user';
import { routes } from '@/utils/routes';
import CustomButton from '@/components/buttons/CustomButton';

export default function Register() {

  const router = useRouter();

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleSignUp = async() => {
    setLoading(true);
    try {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
      };

      console.log(userData)

      const firebaseAuthUser = await signUp(email, password);
      const newUser = await createUser(userData);
      console.log(firebaseAuthUser);
      console.log(newUser);
      setLoading(false);
      if (firebaseAuthUser) {
        router.replace(routes.login);
      }
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
        <View className='mx-8 mt-16'>
          <View className='mb-4'>
            <Text className='text-[20px] font-bold'>Thank you for styling with us!</Text>
            <Text>Please enter your details for registration:</Text>
          </View>
          <View>
            <View className='mb-3'>
              <Text className='mb-1'>First Name<Text className='text-[#EE4E4E]'> *</Text></Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={firstName} onChangeText={(input) => setFirstName(input)}/>
            </View>
            <View className='mb-3'>
              <Text className='mb-1'>Last Name<Text className='text-[#EE4E4E]'> *</Text></Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={lastName} onChangeText={(input) => setLastName(input)}/>
            </View>
            <View className='mb-3'>
              <Text className='mb-1'>Email<Text className='text-[#EE4E4E]'> *</Text></Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={email} onChangeText={(input) => setEmail(input)}/>
            </View>
            <View className='mb-3'>
              <Text>Password<Text className='text-[#EE4E4E]'> *</Text></Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4' value={password} onChangeText={(input) => setPassword(input)} secureTextEntry={true}/>
            </View>
            <View className='mb-8'>
              <Text className='mb-1'>Confirm Password<Text className='text-[#EE4E4E]'> *</Text></Text>
              <TextInput className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'/>
            </View>
            <View>
              <CustomButton isLoading={loading} callBack={handleSignUp} label={'Sign up'} type={'primary'} /> 
              <Link href={'/login'} className='text-[#7ab2b2] underline text-center mt-3'>I already have an account</Link>
              <View className='flex-row items-center my-4'>
                <View className='flex-1 h-px bg-gray-400'></View>
                <Text className='text-center mx-4'>or</Text>
                <View className='flex-1 h-px bg-gray-400'></View>
              </View>
              <Pressable className='bg-[#F3F3F3] h-[42px] rounded-[10px] px-4'>
                <View className="flex-1 justify-center items-center">
                  <Link href={'/welcome'}>Sign Up with Google</Link>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
