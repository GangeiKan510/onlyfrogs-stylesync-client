import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Judson-Regular': require('../assets/fonts/Judson-Regular.ttf'),
        'Judson-Bold': require('../assets/fonts/Judson-Bold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFonts;
