import { TextInput, View, Text, TouchableOpacity, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import Header from '@/components/common/Header';
import { Link } from 'expo-router';
import { signUp } from '@/components/auth/sign-up';

export default function Register() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleSignUp = async() => {
    setLoading(true);
    try {
      const res = await signUp(email, password);
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
      <KeyboardAvoidingView behavior='padding'>
        <Header />
        <View>
          <View>
            <Text className='text-[20px] font-bold'>Thank you for styling with us!</Text>
            <Text>Please enter your details for registration:</Text>
          </View>
          <View>
            {/* <View>
              <Text>First Name</Text>
              <TextInput/>
            </View>
            <View>
              <Text>Last Name</Text>
              <TextInput />
            </View> */}
            <View>
              <Text>Email</Text>
              <TextInput value={email} onChangeText={(input) => setEmail(input)}/>
            </View>
            <View>
              <Text>Password</Text>
              <TextInput value={password} onChangeText={(input) => setPassword(input)} secureTextEntry={true}/>
            </View>
            {/* <View>
              <Text>Confirm Password</Text>
              <TextInput secureTextEntry={true}/>
            </View> */}
            <View>
              { loading ? <ActivityIndicator size={"large"} color={"#0000ff"}/> 
              : <Button title='Sign Up' onPress={handleSignUp}/>}
              <Link className='underline' href={'/login'}>I already have an account</Link>
              <View>
                <Text>or</Text>
              </View>
              <TouchableOpacity>
                <Text>Sign up with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}