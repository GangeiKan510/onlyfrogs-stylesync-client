import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ClosetTab from './closet/ClosetTab';

const CLOSET_CARDS = [
  { id: 1, imageUri: 'https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg', label: 'Formal Tops' },
  { id: 2, imageUri: 'https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg', label: 'Casual Tops' },
  { id: 3, imageUri: 'https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg', label: 'Outerwear' },
  { id: 4, imageUri: 'https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg', label: 'Bottoms' },
  { id: 5, imageUri: 'https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg', label: 'Dresses' },
];

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('Closet');

  return (
    <View className="mt-4">
      <View className="flex-row justify-between items-center mb-1 border-b-[2px] border-[#F3F3F3] pb-2">
        <Pressable onPress={() => setActiveTab('Closet')} className="flex-1 items-start">
          <View>
            <Text className={`${activeTab === 'Closet' ? 'font-bold' : ''} text-base text-left`}>
              Closet ({CLOSET_CARDS.length})
            </Text>
            {activeTab === 'Closet' && (
              <View className="h-0.5 bg-black absolute left-0 right-0 mt-2" style={{ bottom: -10 }} />
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('Pieces')} className="flex-1 items-center">
          <View>
            <Text className={`${activeTab === 'Pieces' ? 'font-bold' : ''} text-center text-base`}>
              Pieces (11)
            </Text>
            {activeTab === 'Pieces' && (
              <View className="h-0.5 bg-black absolute left-0 right-0 mt-2" style={{ bottom: -10 }} />
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('Fits')} className="flex-1 items-end">
          <View>
            <Text className={`${activeTab === 'Fits' ? 'font-bold' : ''} text-right text-base`}>
              Fits (2)
            </Text>
            {activeTab === 'Fits' && (
              <View className="h-0.5 bg-black absolute left-0 right-0 mt-2" style={{ bottom: -10 }} />
            )}
          </View>
        </Pressable>
      </View>
      <View className="mt-1">
        {activeTab === 'Closet' && <ClosetTab closetCards={CLOSET_CARDS}/>}
        {activeTab === 'Pieces' && <Text>Pieces Content</Text>}
        {activeTab === 'Fits' && <Text>Fits Content</Text>}
      </View>
    </View>
  );
};

export default HomeTabs;
