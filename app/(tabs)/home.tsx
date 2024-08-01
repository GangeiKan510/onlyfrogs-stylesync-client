import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/common/Header'
import { useUser } from '@/components/config/user-context'
import TopGreeting from '@/components/home/TopGreeting'
import HomeTabs from '@/components/home/HomeTabs'

const Home = () => {

  const { user } = useUser();

  return (
    <View className="flex-1 bg-[#ffffff]">
      <Header />
      <View className="mx-8">
        <TopGreeting />
        <HomeTabs />
      </View>
    </View>
  )
}

export default Home