import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type userContent = {
  email: string | undefined;
  location: string | undefined;
  followers: number | undefined;
  following: number | undefined;
}

export function UserContent({ email, location, followers, following }: userContent) {
  return (
    <View style={styles.thumbInformation}>
      <View style={styles.contentBox}>
        <Text style={styles.userProfileTitle}>E-mail</Text>
        <Text style={styles.userProfileText}>{email ? email : 'E-mail não cadastrado'}</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.userProfileTitle}>Localidade</Text>
        <Text style={styles.userProfileText}>{location ? location : 'não informado'}</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.userProfileTitle}>Seguidores</Text>
        <Text style={styles.userProfileText}>{followers}</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.userProfileTitle}>Seguindo</Text>
        <Text style={styles.userProfileText}>{following}</Text>
      </View>
    </View>
  );
}
