import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { UserProfile } from '../../components/UserProfile';
import { UserContent } from '../../components/UserContent';
import { useHero } from '../../hooks/useUser';

import { styles } from './styles';

export function UserDetails() {
  const { user } = useHero();

  return (
    <ScrollView style={styles.container}>
      <UserProfile
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