import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '../config/user-context';
import Avatar from '../common/Avatar';

const TopGreeting = () => {
  const { user } = useUser();

  console.log(user?.first_name.split(" ")[0]);

  return (
    <View className="flex-row justify-between items-center mt-5">
      <View className="flex-row items-center">
        <Avatar 
          url={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'} 
          alt={'profile-alt'} 
        />
        <View className="ml-3">
          <Text className="font-bold text-lg">Welcome Back, {user?.first_name.split(" ")[0]}!</Text>
          <Text className="text-[16px] text-text-tertiary underline">Log out</Text>
        </View>
      </View>
      <View>
        <Text className="text-[16px]">Tokens:</Text>
        <Text className="text-[16px] text-right">{user?.tokens}</Text>
      </View>
    </View>
  );
};

export default TopGreeting;
