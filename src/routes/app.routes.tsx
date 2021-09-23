import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../global/styles/theme';


import { Home } from '../screens/Home';
import { UserDetails } from '../screens/UserDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false, 
        contentStyle: { 
          backgroundColor: theme.colors.secondary100
        } 
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="UserDetails"
        component={UserDetails}
      />
    </Navigator>
  )
}