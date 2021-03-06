import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../Avatar';

type ProfieProps = {
  avatar: string;
  username: string;
  bio?: string;
}

export function UserProfile({ avatar, username, bio }: ProfieProps) {
  return (
    <View style={styles.userProfileAvatar}>
      <Avatar urlImage={avatar} />
      <View style={styles.userProfileBox}>
        <Text style={styles.userProfileTitle}>Nome</Text>
        <Text style={styles.userProfileText}>{username}</Text>
        <Text style={styles.userProfileText}>{bio}</Text>
      </View>
    </View>
  );
}
