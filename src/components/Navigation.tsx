import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { PhotosList } from './PhotosList';

const Stack = createNativeStackNavigator();
export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PhotoGallery" component={PhotosList} options={{ title: 'Gallery' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
