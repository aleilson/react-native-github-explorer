import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { UserContent } from '../../components/UserContent';
import { useHero } from '../../hooks/useUser';

import { styles } from './styles';

export function UserDetails() {
  const { user } = useHero();

  return (
    <ScrollView style={styles.container}>
      <ProfileAvatar
        avatar={user?.avatar}
        username={user?.username}
        bio={user?.bio}
      />
      <UserContent 
        email={user?.email}
        location={user?.location}
        followers={user?.followers}
        following={user?.following}
      />
    </ScrollView>
  )
}