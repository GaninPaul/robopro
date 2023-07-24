import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
};
