import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type ImageProps = {
  urlImage: string | undefined;
}

export function Avatar({ urlImage }: ImageProps) {
  const { secondary30, highlight } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[highlight, secondary30]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}
