import React from 'react';
import { Image, Text, View } from 'react-native';
import { useHero } from '../../hooks/useUser';

import { styles } from './styles';

export function UserDetails() {
  const { user } = useHero();

  return (
    <View style={styles.container}>

      <View style={styles.userProfileAvatar}>
        <Image source={{ uri: user?.avatar}} />
      </View>
      <View style={styles.userProfile}>
        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>Nome</Text>
          <Text style={styles.userProfileText}>{user?.username}</Text>
        </View>

        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>E-mail</Text>
          <Text style={styles.userProfileText}>{user?.email ? user?.email : 'E-mail não cadastrado'}</Text>
        </View>

        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>Localidade</Text>
          <Text style={styles.userProfileText}>{user?.location}</Text>
        </View>

        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>Seguidores</Text>
          <Text style={styles.userProfileText}>{user?.followers}</Text>
        </View>

        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>Seguindo</Text>
          <Text style={styles.userProfileText}>{user?.following}</Text>
        </View>
      </View>
    </View>
  )
}