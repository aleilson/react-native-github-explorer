import React from 'react';
import { Image, Text, View } from 'react-native';
import { Avatar } from '../../components/Avatar';
import { useHero } from '../../hooks/useUser';

import { styles } from './styles';

export function UserDetails() {
  const { user } = useHero();

  return (
    <View style={styles.container}>
      <View style={styles.userProfileAvatar}>
        <Avatar urlImage={user?.avatar} />
        <View style={styles.userProfileBox}>
          <Text style={styles.userProfileTitle}>Nome</Text>
          <Text style={styles.userProfileText}>{user?.username}</Text>
          <Text style={styles.userProfileText}>{user?.bio}</Text>
        </View>
      </View>

      <View style={styles.thumbInformation}>
        <View style={styles.contentBox}>
          <Text style={styles.userProfileTitle}>E-mail</Text>
          <Text style={styles.userProfileText}>{user?.email ? user?.email : 'E-mail não cadastrado'}</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.userProfileTitle}>Localidade</Text>
          <Text style={styles.userProfileText}>{user?.location}</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.userProfileTitle}>Seguidores</Text>
          <Text style={styles.userProfileText}>{user?.followers}</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.userProfileTitle}>Seguindo</Text>
          <Text style={styles.userProfileText}>{user?.following}</Text>
        </View>
      </View>
    </View>
  )
}