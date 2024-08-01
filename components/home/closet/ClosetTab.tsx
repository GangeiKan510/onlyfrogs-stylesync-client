import React from 'react';
import { View } from 'react-native';
import ClosetCard from '@/components/cards/ClosetCard';

interface ClosetTabProps {
  closetCards: {
    id: number;
    imageUri: string;
    label: string;
  }[]
};

const ClosetTab = ({closetCards}: ClosetTabProps) => {

  const handleAddCard = () => {
    console.log('Add new card');
  };

  return (
    <View className="flex-1">
      <View className="flex-row flex-wrap justify-start">
        {closetCards.map((item) => (
          <ClosetCard key={item.id} imageUri={item.imageUri} label={item.label} />
        ))}
        <ClosetCard onPress={handleAddCard} />
      </View>
    </View>
  );
}

export default ClosetTab;
