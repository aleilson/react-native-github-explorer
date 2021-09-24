import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Text, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/core';
import { useUser } from '../../hooks/useUser';
import { User } from '../../contexts/userContext';

type HeaderProps ={
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();
  const { setUser } = useUser();

  function handleGoBack() {
    navigation.goBack();
    setUser({} as User);
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>
    </LinearGradient>
  );
}
